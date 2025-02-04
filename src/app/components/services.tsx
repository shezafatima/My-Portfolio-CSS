

import React from "react";
import { FaPenNib, FaVideo } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { TbSeo } from "react-icons/tb";
import "../../styles/services.css"; 

const Services = () => {
  return (
    <div id="Services">
      <section className="services-section">
        <div className="services-container">
          <div className="services-title-container">
            <h1 className="services-title">
              Services
            </h1>
            <p className="services-description">
              Delivering tailored solutions to elevate your brand&apos;s online presence.
            </p>
          </div>
          <div className="services-grid">
            {/* Card 1 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "1.5rem", color: "#6B21A8" }}>
                    <FaPenNib />
                  </div>
                </div>
                <h2 className="services-card-title">
                  Graphic Designing
                </h2>
                <p className="services-card-text">
                  Our graphic design services bring your brand to life with visually stunning and effective designs that capture your audience&apos;s attention.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "1.5rem", color: "#6B21A8" }}>
                    <FaVideo />
                  </div>
                </div>
                <h2 className="services-card-title">
                  Video Editing
                </h2>
                <p className="services-card-text">
                  Expert Video Editing: Our video editing services craft engaging, high-quality videos that captivate your audience and elevate your brand.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "1.5rem", color: "#6B21A8" }}>
                    <FaBullhorn />
                  </div>
                </div>
                <h2 className="services-card-title">
                  Social Media Marketing
                </h2>
                <p className="services-card-text">
                  We craft tailored strategies to boost engagement, drive website traffic, and generate leads across Facebook, Instagram, and more.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "1.75rem", color: "#6B21A8" }}>
                    <SiNextdotjs />
                  </div>
                </div>
                <h2 className="services-card-title">
                  Next.js Website Development
                </h2>
                <p className="services-card-text">
                  Build lightning-fast, scalable, and secure websites with our Next.js development expertise.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "1.75rem", color: "#6B21A8" }}>
                    <BsStars />
                  </div>
                </div>
                <h2 className="services-card-title">
                  AI Image and Video Generation
                </h2>
                <p className="services-card-text">
                  Unlock the power of AI-driven image and video creation. Our expert services generate stunning, custom images and videos for you.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-icon-container">
                  <div className="icon" style={{ fontSize: "2rem", color: "#6B21A8" }}>
                    <TbSeo />
                  </div>
                </div>
                <h2 className="services-card-title">
                  Search Engine Optimization:
                </h2>
                <p className="services-card-text">
                  Our expert SEO services drive targeted traffic, increase conversions, and elevate your brand&apos;s online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
