import React from "react";
import { MapPin, Briefcase, DollarSign, FileText, User } from "lucide-react";

const LoanPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Home Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🏠 Home Loan</h2>
        <p className="text-gray-700 mb-4">
          A Home Loan helps you purchase or construct your dream home. Whether you're buying a flat, building a house, or transferring your existing home loan for better terms, we’ve got you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eligibility Criteria */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">✔️ Eligibility Criteria</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Salaried or self-employed individuals</li>
              <li>Age 21 to 60 years</li>
              <li>Stable income and good credit score</li>
            </ul>
          </div>

          {/* Interest Rate */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💰 Interest Rate Range</h3>
            <p className="text-gray-700">8.50% – 13% (Approx.)</p>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">📄 Required Documents</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>PAN, Aadhaar</li>
            <li>Income Proof (ITR/Salary Slips)</li>
            <li>Bank statements</li>
            <li>Property papers</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🌟 Benefits of Applying through ऋण Samadhan</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Tie-ups with top housing finance institutions</li>
            <li>Quick pre-approval</li>
            <li>Expert property/legal support</li>
            <li>Best interest rate negotiation</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">❓ FAQs</h3>
          <ul className="text-gray-700">
            <li><strong>Q:</strong> Can I apply jointly with my spouse? <br />
              <span className="ml-4">Yes, co-applicant is allowed and improves eligibility.</span>
            </li>
            <li><strong>Q:</strong> Do I need property papers upfront? <br />
              <span className="ml-4">Yes, for sanction and legal approval.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Repeat similar structure for other loan types below */}

      {/* Loan Against Property */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🧾 Loan Against Property (LAP)</h2>
        <p className="text-gray-700 mb-4">
          A secured loan where you mortgage your residential or commercial property to raise funds for personal or business needs.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* Business Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">💼 Business Loan</h2>
        <p className="text-gray-700 mb-4">
          An unsecured loan for self-employed professionals or businesses to meet expansion, working capital, or equipment needs.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* Personal Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">👤 Personal Loan</h2>
        <p className="text-gray-700 mb-4">
          Personal Loan helps meet urgent expenses like medical, wedding, travel, or debt consolidation — without any collateral.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* New Car Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🚗 New Car Loan</h2>
        <p className="text-gray-700 mb-4">
          Finance your new car with flexible EMIs, high LTV, and fast approvals.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* Used Car Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🚙 Used Car Loan</h2>
        <p className="text-gray-700 mb-4">
          Finance your pre-owned car with quick approvals and lower EMIs.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* Education Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🎓 Education Loan</h2>
        <p className="text-gray-700 mb-4">
          Education Loans help finance higher studies in India or abroad.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>

      {/* Working Capital Loan */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🧾 Working Capital Loan</h2>
        <p className="text-gray-700 mb-4">
          Short-term funding for daily operational expenses of your business.
        </p>
        {/* Eligibility, Interest Rate, Required Docs, Benefits, FAQs */}
        {/* Similar structure as Home Loan */}
      </section>
      
    </div>
  );
};

export default LoanPage;
