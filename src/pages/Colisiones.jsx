import React from 'react'
import { Accordion } from 'react-bootstrap'

export const Colisiones = () => {
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
                  <span>Colisiones</span>
                  Cuando dos o más cuerpos se aproximan entre sí, entre ellos actúan fuerzas internas que hacen que su momento lineal y su energía varíen, produciéndose un intercambio entre ellos de ambas magnitudes. En este caso se dice que entre los cuerpos se ha producido una colisión o choque. Para que se produzca una colisión, no es necesario que los cuerpos haya estado físicamente en contacto en un sentido microscópico; basta que se aproximen lo suficiente como para que haya habido interacción entre ellos.                </div>
              </div>
            </div>
            <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejemplos</h1>
                <Accordion className='mt-5 w-75'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejemplo #1</Accordion.Header>
                    <Accordion.Body>
                    Un ejemplo típico de colisión elástica lo constituye el choque de las bolas de billar. Puesto que éstas son ríqidas no cambian de forma, y por tanto las fuerzas internas no hacen trabajo.

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-6 mt-5 d-flex justify-content-center">
                  <img className='img-fluid rounded-2' src="https://media.discordapp.net/attachments/1026213110941483018/1042997786385326081/unknown.png" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
        : (
          <>
          <div className="teoria-others" style={{ height: 'auto' }}>
            <div className="row d-flex align-center justify-content-center">
            <div className="col-12 gx-0 texto" >
                <span>Colisiones</span>
                <br />
                Cuando dos o más cuerpos se aproximan entre sí, entre ellos actúan fuerzas internas que hacen que su momento lineal y su energía varíen, produciéndose un intercambio entre ellos de ambas magnitudes. En este caso se dice que entre los cuerpos se ha producido una colisión o choque. Para que se produzca una colisión, no es necesario que los cuerpos haya estado físicamente en contacto en un sentido microscópico; basta que se aproximen lo suficiente como para que haya habido interacción entre ellos.
              </div>
              <div className="col-12 gx-0 imagen mb-2" style={{ height: '20rem' }}>
              <iframe src="https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_es.html" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
              </div>

            </div>
          </div>
          <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejemplos</h1>
                <Accordion className='mt-5 w-100'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejemplo #1</Accordion.Header>
                    <Accordion.Body>
                    Un ejemplo típico de colisión elástica lo constituye el choque de las bolas de billar. Puesto que éstas son ríqidas no cambian de forma, y por tanto las fuerzas internas no hacen trabajo.

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-12 mt-5  d-flex justify-content-center">
                  <img className='img-fluid rounded-2' style={{ height: '12rem', objectFit: 'scale-down' }} src="https://media.discordapp.net/attachments/1026213110941483018/1042997786385326081/unknown.png" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
    }
    </>
  )
}
