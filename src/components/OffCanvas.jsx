import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'

export const OffCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {'as'}
      </Button> */}

      <Hamburger toggled={show} toggle={setShow} color={'#f5f5f5'}/>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton className='header'>
          <Offcanvas.Title className='titulo-sidebar w-75'>Temáticas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column gap-4 sidebar'>
          <Link to={'home'} onClick={(e) => { setShow(false) }}>Home</Link>
          <Link to={'momento-lineal'} onClick={(e) => { setShow(false) }}>Momento Lineal</Link>
          <Link to={'trabajo-energia-cinetica'} onClick={(e) => { setShow(false) }}>Trabajo y energía cinética</Link>
          <Link to={'conservacion-energia'} onClick={(e) => { setShow(false) }}>Conservación de la energía</Link>
          <Link to={'momento-angular'} onClick={(e) => { setShow(false) }}>Momento angular</Link>
          <Link to={'variacion-energia-cinetica'} onClick={(e) => { setShow(false) }}>Variación de la energía cinética</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
