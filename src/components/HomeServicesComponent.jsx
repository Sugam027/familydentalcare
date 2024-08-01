import React from 'react'
import { Link } from 'react-router-dom'
import services from './datas/ServiceHomeData'

function HomeServicesComponent() {
  return (
    <>
        {services && services.map((service,index)=>{
            if(service.icon != ""){
                return(
                
                    <div className="card" key={index}>
                        <Link to={`/${service.slug}`}>
                            <div className="card-image">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <p>{service.title}</p>
                        </Link>
                        </div>
                )
            }
        })}
    </>
  )
}

export default HomeServicesComponent