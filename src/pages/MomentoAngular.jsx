import React from 'react'
import { Accordion } from 'react-bootstrap'

export const MomentoAngular = () => {
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
                <iframe src="https://phet.colorado.edu/sims/cheerpj/rotation/latest/rotation.html?simulation=torque&locale=es" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
                </div>
                <div className="col-6 gx-0 texto">
                  <span>Momento angular</span>
                  El momento angular o momento cinético es una magnitud física, equivalente rotacional del momento lineal y representa la cantidad de movimiento de rotación de un objeto. Es una cantidad vectorial que caracteriza las propiedades de inercia de un cuerpo, que gira en relación con cierto punto.

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
                      <b>Dos esferas iguales de masas 6 kg y 20 cm de radio están montadas, y pueden deslizar a lo largo de una varilla delgada de 3 kg de masa y 2 m de longitud. El conjunto gira libremente con una velocidad angular de 120 rpm respecto a un eje vertical que pasa por el centro del sistema.</b> <br />
                        Inicialmente los centros de las esferas se encuentran fijos a 0.5 m del eje de giro. Se sueltan las esferas y las esferas deslizan por la barra hasta que salen por los extremos. Calcular: <br />

                        La velocidad angular de rotación cuando los centros de las esferas se encuentran en los extremos de la varilla. <br />I 1 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 0.5 2 ) <br /> ω 1 = 120·2π 60 =4π rad/s I 2 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 1 2 ) I 1 ω 1 = I 2 ω 2  ω 2 =1.27π rad/s <br />

                        <b>Variación de la energía cinética </b> <br />

                        E k1 = 1 2 I 1 ω 1 2 =330.99 J E k2 = 1 2 I 2 ω 2 2 =105.20 J <br />
                        Hallar la energía cinética del sistema en los dos casos. <br />

                        <b>Conservación del momento angular</b> <br />

                        I 1 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 0.5 2 ) <br /> ω 1 = 120·2π 60 =4π rad/s I 2 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 1 2 ) I 1 ω 1 = I 2 ω 2 <br /> ω 2 =1.27π rad/s <br />

                        <b>Variación de la energía cinética</b> <br />

                        E k1 = 1 2 I 1 ω 1 2 =330.99 J E k2 = 1 2 I 2 ω 2 2 =105.20 J
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-6 mt-5">
                  <img className='img-fluid rounded-2' src="https://media.discordapp.net/attachments/1026213110941483018/1042996233230360626/unknown.png?width=901&height=676" alt="Momento lineal" />
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
                <span>Momento angular</span>
                <br />
                El momento angular o momento cinético es una magnitud física, equivalente rotacional del momento lineal y representa la cantidad de movimiento de rotación de un objeto. Es una cantidad vectorial que caracteriza las propiedades de inercia de un cuerpo, que gira en relación con cierto punto.

              </div>
              <div className="col-12 gx-0 imagen" style={{ height: '45%' }}>
              <a href="https://phet.colorado.edu/sims/cheerpj/rotation/latest/rotation.html?simulation=torque&locale=es" target="_blank" rel="noopener noreferrer" className='btn btn-success w-100' id='trabajo-cinetica' style={{ fontSize: '1.3rem' }}>Ir a módelo</a>
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
                    <b>Dos esferas iguales de masas 6 kg y 20 cm de radio están montadas, y pueden deslizar a lo largo de una varilla delgada de 3 kg de masa y 2 m de longitud. El conjunto gira libremente con una velocidad angular de 120 rpm respecto a un eje vertical que pasa por el centro del sistema.</b> <br />
                        Inicialmente los centros de las esferas se encuentran fijos a 0.5 m del eje de giro. Se sueltan las esferas y las esferas deslizan por la barra hasta que salen por los extremos. Calcular: <br />

                        La velocidad angular de rotación cuando los centros de las esferas se encuentran en los extremos de la varilla. <br />I 1 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 0.5 2 ) <br /> ω 1 = 120·2π 60 =4π rad/s I 2 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 1 2 ) I 1 ω 1 = I 2 ω 2  ω 2 =1.27π rad/s <br />

                        <b>Variación de la energía cinética </b> <br />

                        E k1 = 1 2 I 1 ω 1 2 =330.99 J E k2 = 1 2 I 2 ω 2 2 =105.20 J <br />
                        Hallar la energía cinética del sistema en los dos casos. <br />

                        <b>Conservación del momento angular</b> <br />

                        I 1 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 0.5 2 ) <br /> ω 1 = 120·2π 60 =4π rad/s I 2 = 1 12 3· 2 2 +2( 2 5 6· 0.2 2 +6· 1 2 ) I 1 ω 1 = I 2 ω 2 <br /> ω 2 =1.27π rad/s <br />

                        <b>Variación de la energía cinética</b> <br />

                        E k1 = 1 2 I 1 ω 1 2 =330.99 J E k2 = 1 2 I 2 ω 2 2 =105.20 J
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-12 mt-5 d-flex justify-content-center">
                  <img className='rounded-2' style={{ height: '12rem', objectFit: 'scale-down' }} src="https://media.discordapp.net/attachments/1026213110941483018/1042996233230360626/unknown.png?width=901&height=676" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
    }
    </>
  )
}
