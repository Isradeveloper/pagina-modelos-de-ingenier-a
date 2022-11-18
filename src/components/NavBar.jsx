import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { OffCanvas } from './OffCanvas'

export const NavBar = () => {
  return (
    <Navbar expand={'md'} className="navbar">
      <Container fluid>
        <Link to={'home'}>
          <img src="https://www.cuc.edu.co/wp-content/uploads/2022/05/Recurso-4.png" alt="logo-home" style={{ width: '14rem' }}/>
        </Link>
        <OffCanvas/>
      </Container>
    </Navbar>
  )
}
