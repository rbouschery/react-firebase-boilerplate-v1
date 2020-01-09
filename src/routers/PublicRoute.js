import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header-footer/Header';
import Footer  from '../components/header-footer/Footer'

export const PublicRoute = ({state, component: Component, reroute, headerFooter, ...rest}) => {
  const isAuthenticated = !!state.auth.uid
  if (reroute === false) {
    if (headerFooter === false) {
      return (
        <Route {...rest} component={Component}/>
      )
    } else {
      return (
        <Route {...rest} component={(props) => (
          
            <div>
              <Header />
              <div className="main-content">
              <Component {...props}/>
              </div>
              <Footer />
            </div>
          )
        }/>
      )
    }
    
  } else {
    return (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <div>
            <Header />
            <div className="main-content">
            <Component {...props}/>
            </div>
            <Footer />
          </div>
        )
    )}/>
    )
  }
  
}



const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(PublicRoute);