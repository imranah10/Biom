import React, { useState } from "react";

const Loan = () => {
    const [step, setStep] = useState(1);
    const [loanType, setLoanType] = useState("");
    const [runningLoans, setRunningLoans] = useState([]);
    // const [otherIncomes, setOtherIncomes] = useState([]);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleAddLoan = () => {
        setRunningLoans([...runningLoans, { type: "", bank: "", emi: "" }]);
    };

    // const handleAddIncome = () => {
    //     setOtherIncomes([...otherIncomes, { name: "", source: "", income: "" }]);
    // };
    window.scrollTo(0, 0)
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-3xl bg-white p-6 rounded shadow-lg opacity-0.1">
                <h2 className="text-xl font-bold mb-4">Loan Application - Step {step}</h2>

                {step === 1 && (
                    <div>
                        <label className="block mb-2">Select Loan Type</label>
                        <select
                            value={loanType}
                            onChange={(e) => setLoanType(e.target.value)}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Choose</option>
                            <option value="home">Home Loan</option>
                            <option value="property">Loan Against Property</option>
                            <option value="business">Business Loan</option>
                            <option value="personal">Personal Loan</option>
                            <option value="auto">Auto Loan</option>
                        </select>
                        <label className="block">Loan Amount</label>
                        <input type="number" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Tenure (in months)</label>
                        <input type="number" className="w-full border p-2 rounded" />
                        <div className="mt-4 flex justify-between gap-2 ">
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className="font-semibold mb-2">Applicant Details</h3>
                        <label className="block">Full Name</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Age</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Select Gender</label>
                        <select className="w-full border p-2 rounded mb-2">
                            <option value="">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <label className="block">PAN Number</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Aadhaar Number</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Mobile Number</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Email ID</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Address</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">City & State</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Marital Status</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <label className="block">Number of Dependents</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />
                        <div className="mt-4 flex justify-between gap-2 ">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                                Previous
                            </button>
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Next
                            </button>
                        </div>

                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Employment / Business Details</h3>

                        <label className="block mb-1">Employment Type</label>
                        <select className="w-full border p-2 rounded mb-3">
                            <option value="">Select Type</option>
                            <option value="salaried">Salaried</option>
                            <option value="selfEmployed">Self-Employed</option>
                            <option value="businessOwner">Business Owner</option>
                        </select>

                        <label className="block mb-1">Company / Business Name</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />

                        <label className="block mb-1">Designation / Nature of Business</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" />

                        <label className="block mb-1">Monthly Gross Income</label>
                        <input type="number" className="w-full border p-2 rounded mb-3" />

                        <label className="block mb-1">Monthly Net Income</label>
                        <input type="number" className="w-full border p-2 rounded mb-3" />

                        <label className="block mb-1">Work Experience (in years)</label>
                        <input type="number" className="w-full border p-2 rounded mb-3" />

                        <div className="mt-4 flex justify-between gap-2 ">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                                Previous
                            </button>
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Running Loan Details</h3>

                        {runningLoans.map((loan, index) => (
                            <div key={index} className="mb-4 p-4 border rounded shadow-sm">
                                <label className="block mb-1">Loan Type</label>
                                <input
                                    type="text"
                                    value={loan.type}
                                    onChange={(e) => handleLoanChange(index, 'type', e.target.value)}
                                    placeholder="Loan Type"
                                    className="w-full border p-2 rounded mb-3"
                                />

                              
                                <label className="block mb-1">Bank / NBFC Name</label>
                                <input
                                    type="text"
                                    value={loan.bank}
                                    onChange={(e) => handleLoanChange(index, 'bank', e.target.value)}
                                    placeholder="Bank / NBFC Name"
                                    className="w-full border p-2 rounded mb-3"
                                />

                              
                                <label className="block mb-1">Original Loan Amount</label>
                                <input
                                    type="number"
                                    value={loan.amount}
                                    onChange={(e) => handleLoanChange(index, 'amount', e.target.value)}
                                    placeholder="Original Loan Amount"
                                    className="w-full border p-2 rounded mb-3"
                                />

                             
                                <label className="block mb-1">Tenure (in months)</label>
                                <input
                                    type="number"
                                    value={loan.tenure}
                                    onChange={(e) => handleLoanChange(index, 'tenure', e.target.value)}
                                    placeholder="Tenure"
                                    className="w-full border p-2 rounded mb-3"
                                />

                               
                                <label className="block mb-1">Monthly EMI</label>
                                <input
                                    type="number"
                                    value={loan.emi}
                                    onChange={(e) => handleLoanChange(index, 'emi', e.target.value)}
                                    placeholder="Monthly EMI"
                                    className="w-full border p-2 rounded mb-3"
                                />

                                <label className="block mb-1">Outstanding Balance</label>
                                <input
                                    type="number"
                                    value={loan.balance}
                                    onChange={(e) => handleLoanChange(index, 'balance', e.target.value)}
                                    placeholder="Outstanding Balance"
                                    className="w-full border p-2 rounded mb-3"
                                />

                            
                                <label className="block mb-1">EMI Bounce Count (last 12 months)</label>
                                <input
                                    type="number"
                                    value={loan.bounce12}
                                    onChange={(e) => handleLoanChange(index, 'bounce12', e.target.value)}
                                    placeholder="EMI Bounce Count (last 12 months)"
                                    className="w-full border p-2 rounded mb-3"
                                />

                                
                                <label className="block mb-1">EMI Bounce Count (last 6 months)</label>
                                <input
                                    type="number"
                                    value={loan.bounce6}
                                    onChange={(e) => handleLoanChange(index, 'bounce6', e.target.value)}
                                    placeholder="EMI Bounce Count (last 6 months)"
                                    className="w-full border p-2 rounded mb-3"
                                />
                            </div>
                        ))}

                      
                        <button onClick={handleAddLoan} className="bg-green-800 text-white px-3 py-2 rounded">
                            + Add Loan
                        </button>

                        <div className="mt-4 flex justify-between gap-2 ">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                                Previous
                            </button>
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Next
                            </button>
                        </div>
                    </div>
                )}

{/* 
                {step === 5 && loanType === "home" && (
                    <div>
                        <h3 className="font-semibold mb-3">Home Loan Property Details</h3>
                        <input placeholder="Property Address" className="w-full border p-2 rounded mb-2" />
                        <input placeholder="Market Value" className="w-full border p-2 rounded mb-2" />

                        <div className="mt-4 flex gap-2">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 5 && loanType === "auto" && (
                    <div>
                        <h3 className="font-semibold mb-3">Auto Loan Details</h3>
                        <input placeholder="Car Make & Model" className="w-full border p-2 rounded mb-2" />
                        <input placeholder="Dealer Name" className="w-full border p-2 rounded" />

                        <div className="mt-4 flex gap-2">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div>
                        <h3 className="font-semibold mb-3">Other Income</h3>
                        {otherIncomes.map((income, idx) => (
                            <div key={idx} className="mb-3 border p-3 rounded">
                                <input placeholder="Family Member Name" className="w-full border p-2 rounded mb-1" />
                                <input placeholder="Source" className="w-full border p-2 rounded mb-1" />
                                <input placeholder="Monthly Income" className="w-full border p-2 rounded" />
                            </div>
                        ))}
                        <button onClick={handleAddIncome} className="bg-green-500 text-white px-3 py-1 rounded">
                            + Add Income
                        </button>

                        <div className="mt-4 flex gap-2">
                            <button onClick={handleBack} className="bg-gray-400 text-white px-4 py-2 rounded">
                                Back
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default Loan;
