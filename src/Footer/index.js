import React from 'react'
import './index.css'
function Footer() {
  return (
      <footer>
          <div className='resume'>
          <img className='image' src='https://img.icons8.com/glyph-neue/100/26e07f/man-with-dog.png' alt='nose'/>
              <ul className='resume__list'>
                  <li className='resume__element'>Inicio</li>
                  <li className='resume__element'>Planes</li>
                  <li className='resume__element'>Acerca de</li>
                  <li className='resume__element'>Personal</li>
              </ul>
          </div>

          <div className='contact'>

              <div className='contact__info'>
                  <img className='contact__info--image' src='https://img.icons8.com/ios-filled/40/26e07f/google-maps-new.png' alt='nose'/>
                  <p className='contact__info--text'>Cra. 17 #51 - 35, Bogotá</p>
              </div>

              <div className='contact__info'>
                  <img className='contact__info--image' src='https://img.icons8.com/ios-filled/40/26e07f/phone.png' alt='nose'/>
                  <p className='contact__info--text'>+57 3173812371</p>
              </div>

              <div className='contact__info'>
                  <img className='contact__info--image' src='https://img.icons8.com/material-rounded/40/26e07f/mail.png' alt='nose'/>
                  <p className='contact__info--text'>freedog@freedog.com</p>
              </div>
          </div>

          <div className='socialMedia'>
              <h2 className='socialMedia__title'>Redes sociales</h2>
              <div className='socialMedia__icons'>
                  <img className='socialMedia__icons--image' src='https://img.icons8.com/ios-glyphs/40/26e07f/facebook-new.png' alt='nose'/>
                  <img className='socialMedia__icons--image' src='https://img.icons8.com/ios-glyphs/40/26e07f/instagram-new.png' alt='nopse'/>
                  <img className='socialMedia__icons--image' src='https://img.icons8.com/ios-glyphs/40/26e07f/twitter--v1.png' alt='nse'/>
                  <img className='socialMedia__icons--image' src='https://img.icons8.com/ios-glyphs/40/26e07f/linkedin-circled--v1.pn' alt='nose'/>
              </div>
          </div>
      </footer>
    )
}

export {Footer}