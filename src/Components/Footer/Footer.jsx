/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder='Enter Email Address'
              aria-label="Email Address"
            />
            <button
              data-aos="fade-up"
              className='btn flex'
              type='submit'
              aria-label="Send Email"
            >
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="javascript:void(0)" className='logo flex'>
                <MdTravelExplore className='icon' /> ExploreIndia
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              <p>
                © 2024 ExploreIndia. All rights reserved.
                {/* Explore360° is your go-to source for travel and tour guidance, offering expert advice, tips, and inspiration for your next adventure. */}
                Stay connected with us through our social media channels and subscribe to our newsletter for the latest updates and exclusive offers.
              </p>
              <p>
                For any inquiries or feedback, feel free to <a href="mailto:info@explore360.com">contact us</a>.
                Visit our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a> pages to learn more about how we protect your information and our terms of use.
              </p>
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <AiOutlineTwitter className="icon"/>
              </a>
              <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="Tripadvisor">
                <FaTripadvisor className="icon"/>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <AiFillYoutube className="icon"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiFillInstagram className="icon"/>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Hostelworld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Tripadvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="7000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - M NIKHIL 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;


