import React, { useState } from "react";
import { MapPin, Briefcase, DollarSign, FileText, User, ChevronDown, ChevronUp, Home, Tag, Car, BookOpen, CreditCard, Truck, FileCheck } from "lucide-react";

const Services = () => {
  const [expandedSection, setExpandedSection] = useState("home");

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const loanTypes = [
    {
      id: "home",
      title: "Home Loan",
      icon: <Home className="text-blue-600" />,
      description: "A Home Loan helps you purchase or construct your dream home. Whether you're buying a flat, building a house, or transferring your existing home loan for better terms, we've got you covered.",
      eligibility: [
        "Salaried or self-employed individuals",
        "Age 21 to 60 years",
        "Stable income and good credit score"
      ],
      interestRate: "8.50% – 13% (Approx.)",
      documents: [
        "PAN, Aadhaar",
        "Income Proof (ITR/Salary Slips)",
        "Bank statements",
        "Property papers"
      ],
      benefits: [
        "Tie-ups with top housing finance institutions",
        "Quick pre-approval",
        "Expert property/legal support",
        "Best interest rate negotiation"
      ],
      faqs: [
        {
          question: "Can I apply jointly with my spouse?",
          answer: "Yes, co-applicant is allowed and improves eligibility."
        },
        {
          question: "Do I need property papers upfront?",
          answer: "Yes, for sanction and legal approval."
        }
      ]
    },
    {
      id: "lap",
      title: "Loan Against Property (LAP)",
      icon: <Tag className="text-green-600" />,
      description: "A secured loan where you mortgage your residential or commercial property to raise funds for personal or business needs.",
      eligibility: [
        "Property owners (residential/commercial)",
        "Age 25 to 65 years",
        "Stable income source"
      ],
      interestRate: "9.00% – 14% (Approx.)",
      documents: [
        "PAN, Aadhaar",
        "Income documents",
        "Bank statements",
        "Property documents"
      ],
      benefits: [
        "Higher loan amounts",
        "Longer repayment tenure",
        "Lower interest rates than unsecured loans",
        "Flexible end-use"
      ],
      faqs: [
        {
          question: "Can I get LAP on rented property?",
          answer: "Yes, if you own the property and have clear title."
        },
        {
          question: "What's the maximum loan amount?",
          answer: "Typically up to 70% of property value."
        }
      ]
    },
    {
      id: "business",
      title: "Business Loan",
      icon: <Briefcase className="text-purple-600" />,
      description: "An unsecured loan for self-employed professionals or businesses to meet expansion, working capital, or equipment needs.",
      eligibility: [
        "Business vintage of 2+ years",
        "Minimum annual turnover requirements",
        "Profitable business operations"
      ],
      interestRate: "11.00% – 16% (Approx.)",
      documents: [
        "Business registration proof",
        "GST returns",
        "ITR for last 2 years",
        "Bank statements"
      ],
      benefits: [
        "No collateral required",
        "Quick processing time",
        "Flexible usage of funds",
        "Minimal documentation"
      ],
      faqs: [
        {
          question: "Can startups apply?",
          answer: "Some lenders offer startup-specific loans with different criteria."
        },
        {
          question: "Is GST registration mandatory?",
          answer: "For most lenders, yes, though exceptions exist for select businesses."
        }
      ]
    },
    {
      id: "personal",
      title: "Personal Loan",
      icon: <User className="text-orange-600" />,
      description: "Personal Loan helps meet urgent expenses like medical, wedding, travel, or debt consolidation — without any collateral.",
      eligibility: [
        "Salaried or self-employed individuals",
        "Age 21 to 60 years",
        "Minimum income requirements",
        "Good credit score"
      ],
      interestRate: "10.50% – 18% (Approx.)",
      documents: [
        "PAN, Aadhaar",
        "Salary slips/ITR",
        "Bank statements",
        "Address proof"
      ],
      benefits: [
        "Quick disbursal",
        "No collateral needed",
        "Flexible usage",
        "Minimal documentation"
      ],
      faqs: [
        {
          question: "What is the typical processing time?",
          answer: "24-72 hours for most lenders."
        },
        {
          question: "Can I prepay my loan?",
          answer: "Yes, most lenders allow prepayment after certain period with nominal charges."
        }
      ]
    },
    {
      id: "newcar",
      title: "New Car Loan",
      icon: <Car className="text-red-600" />,
      description: "Finance your new car with flexible EMIs, high LTV, and fast approvals.",
      eligibility: [
        "Salaried or self-employed individuals",
        "Age 21 to 65 years",
        "Stable income source"
      ],
      interestRate: "7.25% – 12% (Approx.)",
      documents: [
        "PAN, Aadhaar",
        "Income proof",
        "Bank statements",
        "Quotation from dealer"
      ],
      benefits: [
        "Up to 90% financing",
        "Quick loan approval",
        "Flexible repayment options",
        "Attractive interest rates"
      ],
      faqs: [
        {
          question: "Do I need a down payment?",
          answer: "Yes, typically 10-20% of the car value."
        },
        {
          question: "Can I transfer my loan to someone else?",
          answer: "Most lenders allow loan transfers subject to eligibility checks."
        }
      ]
    },
    {
      id: "usedcar",
      title: "Used Car Loan",
      icon: <Truck className="text-gray-600" />,
      description: "Finance your pre-owned car with quick approvals and lower EMIs.",
      eligibility: [
        "Salaried or self-employed individuals",
        "Age 21 to 65 years",
        "Car age typically not more than 7-8 years at end of loan tenure"
      ],
      interestRate: "9.50% – 15% (Approx.)",
      documents: [
        "PAN, Aadhaar",
        "Income proof",
        "Bank statements",
        "RC book, insurance of the vehicle"
      ],
      benefits: [
        "Up to 80% financing",
        "Flexible repayment options",
        "Quick processing",
        "Competitive interest rates"
      ],
      faqs: [
        {
          question: "Do you finance private sales?",
          answer: "Yes, subject to additional verification."
        },
        {
          question: "Is car evaluation required?",
          answer: "Yes, lenders will evaluate the car before approval."
        }
      ]
    },
    {
      id: "education",
      title: "Education Loan",
      icon: <BookOpen className="text-indigo-600" />,
      description: "Education Loans help finance higher studies in India or abroad.",
      eligibility: [
        "Students with admission to recognized institutions",
        "Co-applicant (parent/guardian) required",
        "Good academic record"
      ],
      interestRate: "7.50% – 12% (Approx.)",
      documents: [
        "Admission letter",
        "Mark sheets of previous education",
        "Co-applicant income proof",
        "Collateral documents (for higher amounts)"
      ],
      benefits: [
        "Tax benefits under Section 80E",
        "Moratorium period during study",
        "Cover tuition fees and living expenses",
        "Collateral-free options for select courses"
      ],
      faqs: [
        {
          question: "Is collateral required?",
          answer: "Typically not required for loans up to ₹7.5 lakhs for studies in India."
        },
        {
          question: "When do repayments start?",
          answer: "After course completion or getting employment, whichever is earlier."
        }
      ]
    },
    {
      id: "workingcapital",
      title: "Working Capital Loan",
      icon: <CreditCard className="text-yellow-600" />,
      description: "Short-term funding for daily operational expenses of your business.",
      eligibility: [
        "Business with stable operations",
        "Minimum business vintage of 1-2 years",
        "Healthy financials and cash flow"
      ],
      interestRate: "10.00% – 16% (Approx.)",
      documents: [
        "Financial statements",
        "Bank statements",
        "GST returns",
        "Business proof"
      ],
      benefits: [
        "Addresses seasonal cash flow gaps",
        "Available as overdraft, cash credit, or line of credit",
        "Interest charged only on utilized amount (for some products)",
        "Revolving nature allows flexibility"
      ],
      faqs: [
        {
          question: "How is the limit decided?",
          answer: "Based on projected sales, inventory cycles, and financial assessment."
        },
        {
          question: "Can I use it for capital expenses?",
          answer: "Working capital loans are designed for operational expenses, not long-term assets."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">ऋण Samadhan Loan Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive financial solutions tailored to your needs. Explore our range of loan products designed to help you achieve your goals.</p>
        </div>

        <div className="space-y-6">
          {loanTypes.map((loan) => (
            <div 
              key={loan.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div 
                className={`flex items-center justify-between p-6 cursor-pointer ${expandedSection === loan.id ? "bg-blue-50" : ""}`}
                onClick={() => toggleSection(loan.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-50 flex items-center justify-center">
                    {loan.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{loan.title}</h2>
                </div>
                {expandedSection === loan.id ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </div>
              
              {expandedSection === loan.id && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 mb-6">{loan.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Eligibility Criteria */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <FileCheck className="text-green-500" size={18} />
                        <h3 className="text-lg font-medium text-gray-800">Eligibility Criteria</h3>
                      </div>
                      <ul className="space-y-1">
                        {loan.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <DollarSign className="text-green-500" size={18} />
                        <h3 className="text-lg font-medium text-gray-800">Interest Rate Range</h3>
                      </div>
                      <p className="text-gray-700">{loan.interestRate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Required Documents */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <FileText className="text-blue-500" size={18} />
                        <h3 className="text-lg font-medium text-gray-800">Required Documents</h3>
                      </div>
                      <ul className="space-y-1">
                        {loan.documents.map((doc, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <DollarSign className="text-blue-500" size={18} />
                        <h3 className="text-lg font-medium text-gray-800">Benefits</h3>
                      </div>
                      <ul className="space-y-1">
                        {loan.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="mt-8">
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="text-purple-500" size={18} />
                      <h3 className="text-lg font-medium text-gray-800">Frequently Asked Questions</h3>
                    </div>
                    <div className="space-y-4">
                      {loan.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <p className="font-medium text-gray-800 mb-1">{faq.question}</p>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Apply?</h3>
          <p className="text-gray-600 mb-4">Our loan experts are ready to assist you with your financial needs.</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm">
            Contact a Loan Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;