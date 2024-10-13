import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/building.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Building & Construction",
  },
  {
    imgUrl: "src/assets/images/category/testing2.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Electronics & Electrical",
  },
  {
    imgUrl: "src/assets/images/category/drg2.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Drugs & Pharma",
  },
  {
    imgUrl: "src/assets/images/category/industry.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Industrial Machinery",
  },
  {
    imgUrl: "src/assets/images/category/sup2.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Industrial Supplies",
  },
  {
    imgUrl: "src/assets/images/category/agricu.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Food & Agriculture",
  },
];

const HomeCategory = () => {
  return <div className="category-section style-4 padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
             <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                {
                    categoryList.map((val,i)=>(<div key={i} className="col">
                        <Link to="/shop" className="category-item">
                        <div className="category-inner">
                            <div className="category-thumb">
                                <img src={val.imgUrl} alt="" />
                            </div>
                            <div className="category-content">
                                <div className="cate-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <Link to="/shop"><h6>{val.title}</h6></Link>
                            </div>
                        </div>
                        </Link>
                    </div>))
                }
             </div>
             <div className="text-center mt-5">
                <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
             </div>
        </div>
    </div>

  </div>;
};

export default HomeCategory;
