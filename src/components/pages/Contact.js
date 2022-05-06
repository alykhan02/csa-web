import React from 'react'
import '../../App.css'
import Footer from '../footer'
import '../../contact.css'

function Contact() {
    return (
        <>
            <h2 className='about'>Contact</h2>
            <div class="container">
            <form>
            <label for="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Email Address" />
                <label for="message">Message</label>
                <textarea id="message" cols="30" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Submit" />
            </form>        
            </div>
            <Footer />
        </>
    )
}

export default Contact;