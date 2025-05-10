import React, { useState } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "Understanding Personal Loans",
      desc: "Learn what personal loans are, how they work, and when they might be the right financial solution for your needs.",
      img: "https://i.pinimg.com/736x/78/a4/24/78a4249c5575cabf1bf590eedac623be.jpg",
    },
    {
      title: "Home Loans: A Beginner’s Guide",
      desc: "Explore the basics of home loans, including types, interest rates, eligibility, and tips for first-time buyers.",
      img: "https://i.pinimg.com/736x/4d/dd/eb/4dddeb746d98fe9cfc6ee9db66750c1c.jpg",
    },
    {
      title: "How to Improve Your Loan Eligibility",
      desc: "Get practical advice on boosting your credit score, managing debt, and preparing financially to qualify for better loan terms.",
      img: "https://i.pinimg.com/736x/02/72/75/027275f295fce9a83a23836cae3ab888.jpg",
    },
    {
      title: "Fixed vs Floating Interest Rates",
      desc: "Discover the key differences between fixed and floating interest rates to make informed decisions when choosing your loan.",
      img: "https://i.pinimg.com/736x/a7/88/0a/a7880a14f8b382a9927defd0909e898f.jpg",
    },
    {
      title: "Education Loans: Investing in Your Future",
      desc: "Find out how education loans work, what to consider before applying, and how to manage repayments after graduation.",
      img: "https://i.pinimg.com/736x/5a/1e/79/5a1e79476d78d2d0424f3457774d5869.jpg",
    },
    {
      title: "Business Loans for Startups",
      desc: "Explore funding options for startups, how to prepare a loan application, and what banks look for in new businesses.",
      img: "https://i.pinimg.com/736x/de/d8/9f/ded89f130fe39f2f3e821adad131fbd7.jpg",
    },
  ];

  const openModal = (blog) => setSelectedBlog(blog);
  const closeModal = () => setSelectedBlog(null);

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8 py-5 bg-amber-50 font-serif ">Our Blogs</h1>

      {/* Blog Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div key={index} className="border bg-[#15201d] rounded-lg shadow hover:shadow-lg transition">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-white mb-4">
                  {post.desc.length > 100 ? post.desc.substring(0, 100) + "..." : post.desc}
                </p>
                <button
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
                  onClick={() => openModal(post)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
            <img
              src={selectedBlog.img}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-700 whitespace-pre-wrap">{selectedBlog.desc}</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
