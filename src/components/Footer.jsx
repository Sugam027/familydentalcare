import React from 'react'

function Footer() {

    const contactInfo = [
        {name: 'contact', image: 'phone.png', value: '9843127392'},
        {name: 'mail', image: 'mail.png', value: 'familydental@gmail.com'},
    ]    
  return (
    <>
    <section className="footer-menu-background">
        <div className="container">
            <div className="footer-menu">
                <div className="footer-contact">
                    <h3>Contact Info</h3>
                    {contactInfo && contactInfo.map((info, index)=>{
                        return(
                            <div className={info.name} key={index}>
                                <img src={`../icons/${info.image}`} alt="" />
                                <p> {info.value}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="opening-hour">
                    <h3>Opening Hour</h3>
                    <p>Sunday - Friday <em>12:00 pm to 8:00 pm</em></p>
                    <p>Saturday <em>Closed</em></p>
                </div>
            </div>
        </div>
    </section>



    <footer>
        <div className="container">
            <div className="copyright">
                <p>Copyright &copy; 2023 <strong>Dental Care and RCT Center</strong></p>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer