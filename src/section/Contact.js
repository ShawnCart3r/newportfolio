import React, { Component } from 'react'
class Contact extends Component {
    state = {};
    render() {
        return <div className="contact-section" id="contact"> 
        <h2>Contact</h2>
        <p>
        I live in Vermont. <b/>
When I'm not practicing my front end skills, I spend my free time at the gym, playing Warhammer 40k, Magic: The Gathering, and <br/>
writing short stories.

If you'd like to see my <a href="./image/Resume- Shawn Carter.pdf" download>CV</a> or feel free to get in touch. <br/>
<a href="https://github.com/ShawnCart3r?tab=repositories" class="text-dark">My Github</a> <br/>
Email me at: shawncar3r@gmail.com 
        </p>
        </div>
    }
}

export default Contact;