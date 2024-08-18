import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.webp'
import img8 from '../../Assets/img8.jpeg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa6";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = 
[
  {
    id: 1,
    imgSrc: img,
    destTitle: "Varanasi",
    location: "Uttar Pradesh, India",
    grade: "Spiritual & cultural Experience",
    fees: "₹33,000",
    description: "This place is well-known for its spiritual significance, Varanasi is famous for its ghats along the Ganges River, where rituals and ceremonies take place daily."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Hampi",
    location: "Karnataka, India",
    grade: "Historical & ancient wonder.",
    fees: "₹15,000",
    description: "This ancient city is renowned for its spectacular ruins and temples, including the majestic Virupaksha Temple and the monuments of Achutaraya."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Taj Mahal",
    location: "Agra, Uttar Pradesh, India",
    grade: "Architectural masterpiece.",
    fees: "₹29,000",
    description: "This UNESCO World Heritage Site is a symbol of eternal love and an architectural masterpiece built by Mughal emperor Shah Jahan."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Jaipur",
    location: "Rajasthan, India",
    grade: "Royal heritage & Capital.",
    fees: "₹32,000",
    description: "The Pink City is a tourist paradise with its majestic forts, grand palaces, and colorful bazaars. Notable sites include the Amber Fort, City Palace, and the Hawa Mahal."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Backwaters of Kerala",
    location: "Kerala, India",
    grade: "Serene waterways.",
    fees: "₹28,000",
    description: "A unique experience of sailing through tranquil backwaters in a traditional houseboat, exploring picturesque villages and lush paddy fields."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Ladakh",
    location: "Jammu and Kashmir, India",
    grade: "Majestic landscape.",
    fees: "₹56,000",
    description: "Famous for its monasteries, rugged landscapes, and desert valleys, Ladakh offers a unique cultural and adventurous experience."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Khajuraho",
    location: "Madhya Pradesh, India",
    grade: "Erotic sculptures.",
    fees: "₹30,000",
    description: "Known for its stunning temples adorned with intricate erotic sculptures, Khajuraho is a testament to medieval art and architecture."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Ooty",
    location: "Tamil Nadu, India",
    grade: "Charming Hill Station",
    fees: "₹25,000",
    description: "A charming hill station known for its tea plantations & scenic landscapes. Popular attractions like Ooty Lake, Doddabetta Peak"
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Mysore",
    location: "Karnataka, India",
    grade: "Royal city & Capital",
    fees: "₹29,000",
    description: "The royal city is known for the opulent Mysore Palace and its vibrant Dussehra festival celebrating local culture."
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <FaClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      
    </section>
  )
}

export default Main