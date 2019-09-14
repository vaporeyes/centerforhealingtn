import React from 'react'
import PropTypes from 'prop-types'


const Header = ({timeout, onOpenArticle}) => (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-heart"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Center for Healing</h1>
                <h3>Therapy provided by Nicolette Tomaszewski, LPC-MHSP</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => {onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {onOpenArticle('training')}}>Training</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
