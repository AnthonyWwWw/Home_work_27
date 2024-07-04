function ContactCard() {
  return (
      <div className='container'>
          <div className='contacts-container'>
              <div className='contact-item'>
                  <i className='contact-icon fas fa-phone-alt'></i>
                  <span className='contact-text'>+123 456 7890</span>
              </div>
              <div className='contact-item'>
                  <i className='contact-icon fas fa-envelope'></i>
                  <span className='contact-text'>email@example.com</span>
              </div>
              <div className='contact-item'>
                  <i className='contact-icon fas fa-map-marker-alt'></i>
                  <span className='contact-text'>1234 Street Name, City, Country</span>
              </div>
              <div className='contact-item'>
                  <i className='contact-icon fas fa-globe'></i>
                  <span className='contact-text'>www.example.com</span>
              </div>
          </div>
      </div>
  );
}

export default ContactCard;
