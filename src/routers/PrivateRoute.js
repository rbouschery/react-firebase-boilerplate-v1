import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/header-footer/Header'
import Footer  from '../components/header-footer/Footer'

export const PrivateRoute = ({state, component: Component, ...rest}) => {
  const isAuthenticated = !!state.auth.uid
  return (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <div className="main-content">
          <Component {...props}/>
        </div>
        <Footer />
      </div>
    ) : (
      <Redirect to="/" />
    )
    )}/>
  )
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(PrivateRoute);