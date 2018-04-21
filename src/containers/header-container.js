import React from 'react'
import './header-container.css'
import { connect } from 'react-redux'

const Header = ({ username }) => (
  <div className='header-container'>
    <a className='title' href='#title'>Mockout</a>
    <a className='signin' href='#signin'>{ username !== null ? username : 'Sign In' }</a>
    <a href='#logout'>{ username !== null ? 'Logout' : '' }</a>
  </div>
)

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(Header)
