import React from 'react'

function Header() {
    const headerContacts = [
        {
          'image': 'phone.png',
          'name': 'phone',
          'value': 9842085129,
        },
        {
          'image': 'mail.png',
          'name': 'email',
          'value': 'familydental@gmail.com',
        },
        {
          'image': 'clock.png',
          'name': 'schedule',
          'value': '12:00 pm - 8:00 pm',
        },
    ]
  return (
    <>
    <header>
        <div className="header-contact-section">
          <div className="container">
            <div className="header-contact">
              {headerContacts.map((contact) => (
                <div className="contact-item" key={contact.name}>
                  <img src={`/icons/${contact.image}`} alt=""  />
                  <p>{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header