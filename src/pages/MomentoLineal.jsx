import React from 'react'
import { Accordion } from 'react-bootstrap'

export const MomentoLineal = () => {
  const screen = window.screen.width

  return (
    <>
    {
      (screen > 768)
        ? (
          <>
            <div className="teoria-others">
              <div className="row d-flex align-center justify-content-center">
              <div className="col-6 gx-0 imagen ms-2" style={{ width: 'calc(50% - 2rem)' }}>
                <iframe src="https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_es.html" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
                </div>
                <div className="col-6 gx-0 texto">
                  <span>Momento lineal</span>
                  La cantidad de movimiento, momento lineal, ímpetu, momentum o simplemente momento, es una magnitud física derivada de tipo vectorial que describe el movimiento de un cuerpo en cualquier teoría mecánica.

                </div>
              </div>
            </div>
            <div className="modelo d-flex flex-column justify-content-center align-items-center">
              <h1 className='mt-4'>Modelo</h1>
              <iframe src="https://isra-colisiones.netlify.app/" frameBorder="0" style={{ width: '80%', height: '100%' }}></iframe>
            </div>
            <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-75'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                      Una moto de 200 kg que va a una velocidad de 33,33 m/s tiene un momentum de p=m.v= 200kg.33, 33m/s = 6666 kgm/s.
                      Note que la unidad en que se mide el momentum es kgm/s o sea N.s,
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-6 mt-5">
                  <img className='img-fluid rounded-2' src="https://media.discordapp.net/attachments/1026213110941483018/1042993239722053663/unknown.png" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
        : (
          <>
          <div className="teoria-others">
            <div className="row d-flex align-center justify-content-center">
            <div className="col-12 gx-0 texto">
                <span>Momento lineal</span>
                La cantidad de movimiento, momento lineal, ímpetu, momentum o simplemente momento, es una magnitud física derivada de tipo vectorial que describe el movimiento de un cuerpo en cualquier teoría mecánica.
              </div>
              <div className="col-12 gx-0 imagen mb-2" style={{ height: '20rem' }}>
              <iframe src="https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_es.html" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
              </div>

            </div>
          </div>
          <div className="modelo">
              <h1>Modelo</h1>
              <iframe src="https://isra-colisiones.netlify.app/" frameBorder="0" style={{ width: '100%', height: '100%' }}></iframe>
            </div>
          <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-100'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                      Una moto de 200 kg que va a una velocidad de 33,33 m/s tiene un momentum de p=m.v= 200kg.33, 33m/s = 6666 kgm/s.
                      Note que la unidad en que se mide el momentum es kgm/s o sea N.s,
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-12 mt-5">
                  <img className='w-100 rounded-2' style={{ height: '12rem' }} src="https://media.discordapp.net/attachments/1026213110941483018/1042993239722053663/unknown.png" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
    }
    </>
  )
}
