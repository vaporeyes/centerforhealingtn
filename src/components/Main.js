import React from 'react'
import PropTypes from 'prop-types'

import quote_michelle_rosenthall from '../images/quote_michelle_rosenthall.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <span className="image main"><img src={quote_michelle_rosenthall} alt=""></img></span>
          <p>Licensed play therapist providing services in the Clarksville area</p>
          {close}
        </article>
        <article id="training" className={`${this.props.article === 'training' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Training</h2>
          <p>Licensed play therapist providing services in the Clarksville area</p>
          {close}
        </article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true">
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
          </form>
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