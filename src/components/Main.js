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
          <p>Trauma-informed counseling focused on helping people heal following rape, sexual assault, childhood sexual abuse, or other traumatic incidents.  LGBTQIA+ friendly.<br></br>I provide therapy through a person centered, attachment focused, and feminist theory orientation. I utilize several evidence-based, trauma informed modalities to help create space for clients to choose various mediums to facilitate, explore, express, and achieve their healing process.</p>
          {close}
        </article>
        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services and Information</h2>
          <p>
          <li>Counseling services for children, teens, and adults</li>
          <li>16 year old and up may sign their own consent to treatment</li>
          <li>Standard rate $150 per 50 minute session</li>
          <li>Cash, check, and credit cards accepted</li>
          <li>Insurance is not accepted at this time</li>
          </p>
          {close}
        </article>
        <article id="training" className={`${this.props.article === 'training' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Training and Credentials</h2>
          <p>Trained in play therapy, Attachment, Self-Regulation, and Competency (ARC), Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Cognitive Processing Therapy (CPT), and I am Level 1 and 2 trained in Eye Movement Desensitization and Reprocessing (EMDR).</p>
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
            <li><a href="tel:19313209683" className="icon fa-phone"><span className="label">Phone</span></a>  (931) 320-9683</li><br></br><br></br>
            <li><a href="https://instagram.com/centerforhealingtn" className="icon fa-instagram"><span className="label">Instagram</span></a>  https://instagram.com/centerforhealingtn</li><br></br><br></br>
            <li><a href="mailto:centerforhealingtn@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a>  centerforhealingtn@gmail.com</li>
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