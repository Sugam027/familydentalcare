import React from 'react'

const CoverSection = (props) => {
  return (
    <>
        <section className={`coverSection ${props.name}-background`}>
            <div className="container">
                <div className="coverpage">
                  <div>
                    <p>{props.info}</p>
                    <h3>{props.title}</h3>
                    <p className="slogan">{props.slogan}</p>
                    <p>{props.descrip}</p>
                    <div>
                      <a href="#appointment-table" className="btn btn-transparent">Appointment</a>
                      <a href="#" className="btn">Call or text +977 9823454159</a>
                    </div>
                  </div>
                </div>
            </div>
         </section>
    </>

  )
}

export default CoverSection