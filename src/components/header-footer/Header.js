import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { firebase } from '../../firebase/firebase'


// React Bootstrap Imports
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

export const Header = () => {

    return (
      <Navbar>
      <Container>
        <Link className="navbar-brand" to="/">
          Boilerplate
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="float-right">
            <Nav.Item><Link className="nav-link" to="/login">Login</Link></Nav.Item>
            <Nav.Item><Link to="/signup"><Button>Sign Up</Button></Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )  
}

export default connect()(Header)


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { startLogout } from '../../actions/auth'

// import { firebase } from '../../firebase/firebase'


// // React Bootstrap Imports
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Nav from 'react-bootstrap/Nav'

// export const Header = ({ startLogout, auth }) => {

//   const user = firebase.auth().currentUser

//   if (auth.uid) {
//     return (
//       <Navbar bg="white" expand="md" >
//       <Container>
//           <Link className="navbar-brand" to="/">
//              Boilerplate
//           </Link>
//           <Navbar.Toggle aria-controls="main-navbar-nav" />
//           <Navbar.Collapse id="main-navbar-nav">
//             <Nav className="mr-auto">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               <Link className="nav-link" to="/create_timer">New Timer</Link>
//             </Nav>
//             <Nav className="mr-sm-2">
//               <NavDropdown  title={user.displayName} id="user-nav-dropdown">
//                 <NavDropdown.Item className="text-right" onClick={startLogout}>Logout</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//           </Container>
//       </Navbar>
//     )
//   } else {
//     return (
//       <Navbar>
//       <Container>
//         <Link className="navbar-brand" to="/">
//           Boilerplate
//         </Link>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav className="float-right">
//             <Nav.Item><Link className="nav-link" to="/login">Login</Link></Nav.Item>
//             <Nav.Item><Link to="/signup"><Button>Sign Up</Button></Link></Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
//   }
  
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Header)