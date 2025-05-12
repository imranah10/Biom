import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const association = [
  {
    url: "https://static.vecteezy.com/system/resources/previews/020/336/703/original/hdfc-logo-hdfc-icon-free-free-vector.jpg ",
    description: "HDFC Bank",
  },
  {
    url: "https://images.livemint.com/img/2023/03/21/1600x900/Axis_1674492335588_1679423507037_1679423507037.jpg",
    description: "Axis Bank",
  },
  {
    url: "https://www.constructionworld.in/assets/uploads/76a47a884ca29b8825b253d9a8cddf86.jpg",
    description: "Tata Capital",
  },
  {
    url: "https://www.equitybulls.com/equitybullsadmin/uploads/Bank%20of%20Maharashtra%20Limited%20Logo%202.jpg",
    description: "Bank of Maharashtra",
  },
  {
    url: "https://akm-img-a-in.tosshub.com/businesstoday/images/assets/202203/ezgif.com-gif-maker-2-sixteen_nine_0.jpg",
    description: "Bank of Baroda",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e5d300100349519.5f06f4619ce41.png",
    description: "Profectus Capital",
  },
  {
    url: "https://invoicebazaar.blog/wp-content/uploads/2021/11/jana-small-finance-bank-1024x579.jpg",
    description: "Jana Small Finance Bank",
  },
  {
    url: "https://companieslogo.com/img/orig/AUBANK.NS_BIG-6b40ea0b.png?t=1613441899",
    description: "AU Bank",
  },
  {
    url: "https://globalnewsonnetwork.com/wp-content/uploads/2023/11/IMG-20231121-WA0019-1024x722.jpg",
    description: "Utkarsh Small Finance Bank",
  },
  {
    url: "https://www.financialexpress.com/wp-content/uploads/2023/03/sriram-finance.jpg",
    description: "Shriram Finance",
  },
  {
    url: "https://www.nexton.com/media/9689223/2_true-homes-kipling-model-home-plan-exterior-view-from-afar.jpg?width=900&mode=min&quality=80&format=jpeg",
    description: "Truehome",
  },
  {
    url: "https://images.livemint.com/img/2022/01/24/600x338/83ad4bfe-56d4-11e9-b402-6d51be9407d0_1560510524133_1643001992490.jpg",
    description: "Bandhan Bank",
  },
  {
    url: "https://contents.housing.com/51/20/688/141989430.png",
    description: "Aditya Birla Housing Finance",
  },
  {
    url: "https://bankexamportal.com/sites/default/files/DCB-Bank.jpg",
    description: "DCB Bank",
  },
  {
    url: "https://seekvectors.com/files/download/77efe95923058694e7d948ab61a84367.jpg",
    description: "India Bulls Housing Finance",
  },
  {
    url: "https://bfsi.eletsonline.com/wp-content/uploads/2018/03/piramal.jpg",
    description: "Piramal Capital and Housing Finance Limited",
  },
  {
    url: "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/smstreet/media/media_files/6wVSXQ5Dt6rcIXtQxW1z.jpg",
    description: "Sammaan Capital",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const OurAssociation = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-6">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Our Associations
      </h1>
      {association.length > 0 ? (
        <Slider
          className=" p-6 bg-[#15201d] rounded-2xl shadow-2xl"
          {...sliderSettings}
        >
          {association.map((aso, idx) => (
            <div
              key={idx}
              className="px-2 transition duration-300 hover:scale-105 "
            >
              <img
                src={aso.url}
                alt={aso.description}
                className="w-full h-[300px] object-cover rounded-lg shadow-md border border-gray-200"
              />
              <p className="text-center my-2 text-sm text-white font-medium">
                {aso.description}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600">Loading association...</p>
      )}
    </div>
  );
};

export default OurAssociation;
