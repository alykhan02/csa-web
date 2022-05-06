import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the CSA mailing list to receive news on our upcoming events
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" className="footer-input" placeholder="Your Email" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Mission</Link>
            <Link to='/'>Meet the Team</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Hiring</Link>
            <Link to='/'>Event Ideas</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Events</h2>
            <Link to='/'>Why Co-op?</Link>
            <Link to='/'>Case Comps</Link>
            <Link to='/'>Workshops</Link>
            <Link to='/'>Co-op Conference</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/uoftcsa/'>Instagram</Link>
            <Link to='https://www.facebook.com/utcsa/'>Facebook</Link>
            <Link to="https://www.linkedin.com/company/co-op-students'-association/">LinkedIn</Link>
            <Link to='/'>Email</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CSA UTSC
            </Link>
          </div>
          <small class='website-rights'>CSA UTSC © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Footer