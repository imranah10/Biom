import { useState } from 'react';

  function BIRatingCalculator() {
  // State for form inputs
  const [formData, setFormData] = useState({
    age: '',
    experience: '',
    gst: '',
    gstVintage: '',
    turnover: '',
    profit: '',
    capital: '',
    cibil: '',
    properties: '',
    loans: '',
    bouncing12: '',
    bouncing6: ''
  });

  // State for showing/hiding GST vintage field
  const [showGstVintage, setShowGstVintage] = useState(false);
  
  // State for results
  const [showResults, setShowResults] = useState(false);
  const [biRating, setBiRating] = useState(0);
  const [ratingMessage, setRatingMessage] = useState('');
  const [ratingClass, setRatingClass] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Toggle GST Vintage field visibility
    if (name === 'gst') {
      setShowGstVintage(value === 'yes');
      if (value !== 'yes') {
        setFormData(prev => ({
          ...prev,
          gstVintage: ''
        }));
      }
    }
  };

  // Calculate BI Rating
  const calculateRating = () => {
    // Check if required fields are filled
    const requiredFields = ['age', 'experience', 'gst', 'turnover', 'profit', 'capital', 'cibil', 'properties', 'loans', 'bouncing12', 'bouncing6'];
    if (formData.gst === 'yes') requiredFields.push('gstVintage');
    
    const isValid = requiredFields.every(field => formData[field] !== '');
    
    if (!isValid) {
      alert('Please fill all required fields');
      return;
    }
    
    // Calculate score
    let score = 0;
    
    // Age score (older generally better up to a point)
    const age = parseInt(formData.age);
    if (age >= 25 && age <= 55) score += 10;
    else if (age > 55) score += 5;
    else score += 3;
    
    // Experience score
    const experience = parseInt(formData.experience);
    score += Math.min(experience * 2, 20);
    
    // GST Registration
    if (formData.gst === 'yes') {
      score += 10;
      const gstVintage = parseFloat(formData.gstVintage);
      score += Math.min(gstVintage * 2, 10); // GST vintage bonus
    }
    
    // Financial trends
    if (formData.turnover === 'yes') score += 15;
    if (formData.profit === 'yes') score += 15;
    if (formData.capital === 'yes') score += 10;
    
    // CIBIL score impact
    const cibil = parseInt(formData.cibil);
    if (cibil >= 750) score += 20;
    else if (cibil >= 700) score += 15;
    else if (cibil >= 650) score += 10;
    else if (cibil >= 600) score += 5;
    
    // Properties
    const properties = parseInt(formData.properties);
    score += Math.min(properties * 5, 15);
    
    // Loans penalty
    const loans = parseInt(formData.loans);
    score -= Math.min(loans * 2, 10);
    
    // Bouncing penalty (recent bounces are worse)
    const bouncing12 = parseInt(formData.bouncing12);
    const bouncing6 = parseInt(formData.bouncing6);
    score -= Math.min(bouncing12 * 1, 10);
    score -= Math.min(bouncing6 * 2, 20);
    
    // Ensure score is within range
    score = Math.max(0, Math.min(100, score));
    
    // Set rating and message
    setBiRating(Math.round(score));
    
    if (score >= 80) {
      setRatingMessage('Excellent! High approval chances.');
      setRatingClass('text-green-600');
    } else if (score >= 60) {
      setRatingMessage('Good. Moderate approval chances.');
      setRatingClass('text-yellow-500');
    } else {
      setRatingMessage('Needs improvement. Lower approval chances.');
      setRatingClass('text-red-500');
    }
    
    // Show results
    setShowResults(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      age: '',
      experience: '',
      gst: '',
      gstVintage: '',
      turnover: '',
      profit: '',
      capital: '',
      cibil: '',
      properties: '',
      loans: '',
      bouncing12: '',
      bouncing6: ''
    });
    setShowGstVintage(false);
    setShowResults(false);
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Check Your BI Rating</h2>
          <p className="text-gray-600 mt-2">The higher your BI Rating, the better your loan chances. Get your personalized assessment instantly.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Calculator Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age of Main Applicant <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="80"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Experience in Business (years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                min="0"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* GST */}
            <div>
              <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-1">
                GST Registered? <span className="text-red-500">*</span>
              </label>
              <select
                id="gst"
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            {/* GST Vintage */}
            {showGstVintage && (
              <div>
                <label htmlFor="gstVintage" className="block text-sm font-medium text-gray-700 mb-1">
                  GST Vintage (years) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="gstVintage"
                  name="gstVintage"
                  min="0"
                  step="0.1"
                  value={formData.gstVintage}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
            
            {/* Turnover */}
            <div>
              <label htmlFor="turnover" className="block text-sm font-medium text-gray-700 mb-1">
                Turnover Trend Increasing? <span className="text-red-500">*</span>
              </label>
              <select
                id="turnover"
                name="turnover"
                value={formData.turnover}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            {/* Profit */}
            <div>
              <label htmlFor="profit" className="block text-sm font-medium text-gray-700 mb-1">
                Profit Trend Positive? <span className="text-red-500">*</span>
              </label>
              <select
                id="profit"
                name="profit"
                value={formData.profit}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            {/* Capital */}
            <div>
              <label htmlFor="capital" className="block text-sm font-medium text-gray-700 mb-1">
                Capital Trend Positive? <span className="text-red-500">*</span>
              </label>
              <select
                id="capital"
                name="capital"
                value={formData.capital}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            {/* CIBIL */}
            <div>
              <label htmlFor="cibil" className="block text-sm font-medium text-gray-700 mb-1">
                CIBIL Score <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="cibil"
                name="cibil"
                min="300"
                max="900"
                value={formData.cibil}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Properties */}
            <div>
              <label htmlFor="properties" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Family-Owned Properties <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="properties"
                name="properties"
                min="0"
                value={formData.properties}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Loans */}
            <div>
              <label htmlFor="loans" className="block text-sm font-medium text-gray-700 mb-1">
                Running/Closed Loans <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="loans"
                name="loans"
                min="0"
                value={formData.loans}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Bouncing 12 */}
            <div>
              <label htmlFor="bouncing12" className="block text-sm font-medium text-gray-700 mb-1">
                Bouncing in last 12 months <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="bouncing12"
                name="bouncing12"
                min="0"
                value={formData.bouncing12}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            {/* Bouncing 6 */}
            <div>
              <label htmlFor="bouncing6" className="block text-sm font-medium text-gray-700 mb-1">
                Bouncing in last 6 months <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="bouncing6"
                name="bouncing6"
                min="0"
                value={formData.bouncing6}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={calculateRating}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Calculate BI Rating
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
            >
              Reset
            </button>
          </div>
          
          {/* Results Section */}
          {showResults && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-center mb-4">Your BI Rating Result</h3>
              
              <div className="flex justify-center my-6">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center border-4 border-gray-200">
                    <span className={`text-5xl font-bold ${ratingClass}`}>
                      {biRating}
                    </span>
                  </div>
                  
                  <div className="absolute -bottom-2 left-0 right-0">
                    <div className="bg-white mx-auto w-fit px-4 py-1 rounded-full shadow border border-gray-200">
                      <span className="text-sm font-medium">Out of 100</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg">{ratingMessage}</p>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">What does this mean?</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 80-100: Excellent approval chances</li>
                  <li>• 60-79: Good approval chances</li>
                  <li>• Below 60: Moderate to low approval chances</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default BIRatingCalculator