import React from 'react'
import { Accordion } from 'react-bootstrap'

export const TrabajoEnergiaCinetica = () => {
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
                <a href="https://modelo-trabajo-cinetica.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn btn-success w-50' id='trabajo-cinetica'>Ir a módelo</a>
                </div>
                <div className="col-6 gx-0 texto">
                  <span>Trabajo y energía cinética</span>
                  El trabajo de dicha fuerza es igual a la diferencia entre el valor final y el valor inicial de la energía cinética de la partícula. En la primera línea hemos aplicado la segunda ley de Newton; la componente tangencial de la fuerza es igual a la masa por la aceleración tangencial.
                </div>
              </div>
            </div>
            <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-75'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                      <b>Un automóvil de 860kg se desplaza a 50 km/h. ¿Cuál será su energía cinética?</b>  <br />

                      Primero transformamos los 50 km/h a m/s = 13,9 m/s y aplicamos la fórmula de cálculo: <br />

                      Ec = ½ * 860 kg  * ( 13,9 m/s )2 = 83.000 J.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-6 mt-5">
                  <img className='img-fluid rounded-2' src="https://media.discordapp.net/attachments/1026213110941483018/1042994338537410570/unknown.png?width=1202&height=676" alt="Momento lineal" />
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
                <span>Trabajo y energía cinética</span>
                <br />
                El trabajo de dicha fuerza es igual a la diferencia entre el valor final y el valor inicial de la energía cinética de la partícula. En la primera línea hemos aplicado la segunda ley de Newton; la componente tangencial de la fuerza es igual a la masa por la aceleración tangencial.
              </div>
              <div className="col-12 gx-0 imagen">
              <a href="https://modelo-trabajo-cinetica.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn btn-success w-100' id='trabajo-cinetica' style={{ fontSize: '1.3rem' }}>Ir a módelo</a>
              </div>

            </div>
          </div>
          <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-100'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                    <b>Un automóvil de 860kg se desplaza a 50 km/h. ¿Cuál será su energía cinética?</b>  <br />

                      Primero transformamos los 50 km/h a m/s = 13,9 m/s y aplicamos la fórmula de cálculo: <br />

                      Ec = ½ * 860 kg  * ( 13,9 m/s )2 = 83.000 J.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-12 mt-5 d-flex justify-content-center">
                  <img className='rounded-2' style={{ height: '12rem', objectFit: 'scale-down' }} src="https://media.discordapp.net/attachments/1026213110941483018/1042994338537410570/unknown.png?width=1202&height=676" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
    }
    </>
  )
}
