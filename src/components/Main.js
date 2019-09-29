import React from 'react'
import PropTypes from 'prop-types'

import quote_michelle_rosenthall from '../images/quote_michelle_rosenthall.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={quote_michelle_rosenthall} alt=""></img></span>
          <p>Licensed Professional Counselor specializing in trauma-informed treatment for childhood sexual abuse, sexual assault/rape, and other traumatic incidents. I also provide therapy for clients struggling with anxiety, depression and other concerns. Experience working with military members and their families.<br></br><br></br>
I utilize several evidence-based, trauma informed modalities to help create space for clients to choose various mediums to facilitate, explore, express, and achieve their healing process.
Safe space for all ages, LGBTQIA+, and alternative lifestyle groups.<br></br><br></br>I have provided therapy for more than five years in a variety of settings and now offer individual 
counseling, play therapy, family counseling, couple counseling, and group counseling services in my private practice office.</p>
          {close}
        </article>
        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services and Info</h2>
          <p>
          <li>Counseling services for children, teens, and adults</li>
          <li>16 year old and up may sign their own consent to treatment</li>
          <li>Standard rate $100 per 50 minute session</li>
          <li>Cash, check, and credit cards accepted</li>
          <li>Insurance is not accepted at this time</li>
          </p>
          {close}
        </article>
        <article id="training" className={`${this.props.article === 'training' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Training and Credentials</h2>
          <p>I provide therapy through a person centered, attachment focused, and feminist theory orientation.<br></br><br></br>Trained in play therapy, Attachment, Self-Regulation, and Competency (ARC), Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Cognitive Processing Therapy (CPT), Internal Family Systems Therapy (IFS), and I am Level 1 and 2 trained in Eye Movement Desensitization and Reprocessing (EMDR).</p>
          {/* <ul className="icons">
            <li>Resume <a href="../images/quote_michelle_rosenthall.jpg" className="icon fa-file-text-o"><span className="label">Resume</span></a></li>
          </ul> */}
          {close}
        </article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          {/* <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
            <p>
              <label>NAME: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>EMAIL: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>MESSAGE: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form> */}
          <ul className="icons">
            <li><a href="https://goo.gl/maps/6gUpF3FE1JrLeTrz6" className="icon fa-map-marker"><span className="label">Phone</span></a>  119 North 3rd St. Suite 21, Clarksville, TN 37040</li><br></br><br></br>
            <li><a href="tel:19313209683" className="icon fa-phone"><span className="label">Phone</span></a>  (931) 320-9683</li><br></br><br></br>
            <li><a href="https://instagram.com/centerforhealingtn" className="icon fa-instagram"><span className="label">Instagram</span></a>  https://instagram.com/centerforhealingtn</li><br></br><br></br>
            <li><a href="mailto:centerforhealingtn@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a>  centerforhealingtn@gmail.com</li><br></br><br></br>
            <li><a href="https://www.psychologytoday.com/profile/486791" className="icon fa-address-card"><span className="label">Profile</span></a>  Psychology Today Profile</li>
          </ul> 
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
