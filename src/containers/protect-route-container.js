import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// <Route {...rest} render={(props) => <Component {...props} />} />

const ProtectRoute = ({ component: Component, ...rest }) => <Redirect to='/login' />

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(ProtectRoute)
