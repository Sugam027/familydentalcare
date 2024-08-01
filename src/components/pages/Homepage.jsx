import React from 'react'
import { Link } from 'react-router-dom'
import CoverSection from '../CoverSectionComponent'
import HomeServicesComponent from '../HomeServicesComponent'

const Home = () => {
  const data ={
    name: 'homepage',
    title: 'Welcome to Best Dental Care In Your City',
    slogan: 'We’re your dental defenders.',
  }

  let cards = [
    {title: 'Opening Hour', image: '../icons/clock.png', description: 'Sunday - Friday 12:00 pm - 8:00 pm', moreBtn: '', link: '#'},
    {title: 'Appointment', image: '../icons/appointment.png', description: 'At Family Dental Care, we\'re here when you need us most. That\'s why we\'re bringing you more ways to get the care you need than ever before.', moreBtn: 'Requests', link: '#appointment-table'},
    {title: 'Urgent Care', image: '../icons/dentist.png', description: 'Search for a care facility near you to find the shortest wait and get in line ahead of time.', moreBtn: 'Search', link: '#'},
    {title: 'Find Location', image: '../icons/location.png', description: 'We’re located in the heart of the beautiful Hattigauda area.', moreBtn: 'Visits', link: './contact#map'},
  ]

  let specialities =[
    {image: '../icons/qualified-dentist.png', title:'Qualified Dentsists'},
    {image: '../icons/emergency.png', title:'Emergency Services'},
    {image: '../icons/accurate.png', title:'Accurate Testing'},
  ]

  let teams = ['../images/teams/our-dentist1.jpg','../images/teams/our-dentist2.jpg','../images/teams/our-dentist3.jpg','../images/teams/our-dentist4.jpg', '../images/teams/our-dentist1.jpg','../images/teams/our-dentist2.jpg','../images/teams/our-dentist3.jpg','../images/teams/our-dentist4.jpg']

  return (
    <>
    {/* <section className="background">
            <img src="../images/brushing.webp" />
    </section> */}

    <CoverSection {...data}/>

    {/* table section starts  */}

    <section className="table-background">
        <div className="container">
            <div className="table">
              {cards && cards.map((card, index) =>{
                return(
                    <div className="card" key={index}>
                        <div className="card-header">
                            <h3 className="card-title">{card.title}</h3>
                            <img src={card.image} alt=""/>
                        </div>
                        <p>{card.description}</p>
                        <a className="learn-more" href={card.link}>{card.moreBtn}</a>
                    </div>
                )
              })}
            </div>
        </div>
    </section>

    {/* table section ends  */}

    {/* about us section starts */}

    <section className="about-background">
        <div className="container">
            <div className="about-us">
                <div className="about-us-image">
                    <img src="images/aboutus.jpg" alt="" width="100%" />
                </div>
                <div className="about-us-content">
                    <h1 className="about-us-title">About us</h1>
                    <h3>Best Medical Care For<br /> Yourself and Your Family</h3>
                    <p>Welcome to Family Dental Care, where you’ll find high-quality dental care for your whole family. From your dentists, Drs. Chad Bowles and Brad Higgerson, to your hygienist and front office team, everyone here is committed to exceeding your expectations.<br />
                    You’ll feel right at home in our convenient Overland Park family dentist office thanks to our focus on your comfort, health, and happiness.</p>
                    <Link to="/about" className="btn learn-more">Learn more</Link>
                    
                    <div className="about-us-detail">
                      {specialities && specialities.map((speciality,index) =>{
                        return(
                          <div className="about-us-detail-circle" key={index}>
                            <img src={speciality.image} alt="" />
                            <p>{speciality.title}</p>
                            <span></span>
                          </div>
                        )
                      })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* about us section ends  */}

    {/* quote section starts */}

    {/* <section className="quote-background">
        
        <div className="container">
            <p>BRUSH 2X’S A DAY TO KEEP BACTERIA AWAY</p>
        </div>
    </section> */}
    <section className="quote-background">
        <div className="background-image"></div>
        <div className="quote-content">
            <p>BRUSH 2X’S A DAY TO KEEP BACTERIA AWAY</p>
        </div>
    </section>
    {/* quote section ends */}

    {/* services section starts */}

    <section className="services-background">
        <div className="container">
            <div className="services">
                <div className="services-header">
                    <h1 className="services-title">Services</h1>
                    <h3>Our Dental Services</h3>
                </div>
                <div className="services-content">
                    <div className="services-detail-left">
                        <HomeServicesComponent />
                    </div>
                    <div className="services-detail-right">
                        <div className="services-detail-image">
                            <img src="../images/services/orthodontic.jpg" alt="" width="100%" />
                        </div>
                        <div className="services-detail-description">
                            <h3>Orthodontic Treatment - Correction of Irregular Teeth</h3>
                            <p>Orthodontics is a dental specialty focused on aligning your bite. Orthodontic treatments include traditional braces, clear aligners and removable retainers. Clear braces work the same as traditional metal braces, but they’re less noticeable. They consist of clear ceramic brackets and tooth-colored wire. Braces can correct a wide range of dental issues, including crooked, gapped, rotated or crowded teeth.</p>
                            <Link to="/orthodontic-treatment" className="learn-more">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    {/* services section ends */}

    {/* team section starts */}

    <section className="dentist-background">
      <div className="our-dentist">
      {teams && teams.map((team, index) =>{
        return(
          <div className="our-dentist-images" key={index}>
            <img src={team} alt="" key={index}/>
          </div>
        )
      })}
      </div>
      <div className="our-dentist-content">
        <p>Excelency dentistry, from Family Dental</p>
        <a href="#" className="btn">Meet the Team</a>
      </div>
    </section>

    {/* team section ends */}

    <div className="patients-say-background">
      <div className="container">
        <div className="patients-say">
          <p className='title'>What Our Patients say</p>
          <div className="patients-word">
            <p>They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
            <a href='tel:+977-9742487088' className='btn'>Call for an Appointment</a>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default Home