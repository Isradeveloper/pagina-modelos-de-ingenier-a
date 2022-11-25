import React from 'react'
import { Accordion } from 'react-bootstrap'

export const ConservacionEnergia = () => {
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
                <iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
                </div>
                <div className="col-6 gx-0 texto">
                  <span>Conservación de la energía</span>
                  La ley de la conservación de la energía afirma que la cantidad total de energía en cualquier sistema físico aislado permanece invariable con el tiempo, aunque dicha energía puede transformarse en otra forma de energía.

                </div>
              </div>
            </div>
            <div className="modelo d-flex flex-column justify-content-center align-items-center">
              <h1 className='mt-4'>Modelo</h1>
              <iframe src="https://isra-conservacion-energia.netlify.app/" frameBorder="0" style={{ width: '80%', height: '100%' }}></iframe>
            </div>
            <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-75'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                      <b>Un péndulo simple está formado por un hilo inextensible y de masa despreciable de 0.5 m de longitud del que cuelga una masa puntual de 2 kg.</b>  <br />
                      Si se separa de la posición de equilibrio 10º y se suelta, calcular la tensión del hilo cuando el péndulo pasa de nuevo por la posición vertical. Tomar g=9.8 m/s2.
                      Aplicamos el principio de conservación de la energía y a continuación, la dinámica del movimiento circular uniforme <br />

                      mgh= 1 2 m v 2 h=r−r·cos⁡θ T−mg=m v 2 r <br />

                      Con los datos: r=0.5 m, m=2 kg, θ=10º, obtenemos v=0.38 m/s, T=20.2 N <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-6 mt-5">
                  <img className='img-fluid rounded-2' src="https://media.discordapp.net/attachments/1026213110941483018/1042995535642120293/unknown.png?width=1202&height=676" alt="Momento lineal" />
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
                <span>Conservación de la energía</span>
                <br />
                La ley de la conservación de la energía afirma que la cantidad total de energía en cualquier sistema físico aislado permanece invariable con el tiempo, aunque dicha energía puede transformarse en otra forma de energía.

              </div>
              <div className="col-12 gx-0 imagen">
              <iframe src="https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html" className='w-100 h-100'
                  allowFullScreen>
                </iframe>
              </div>

            </div>
          </div>
          <div className="modelo d-flex flex-column justify-content-center align-items-center">
              <h1 className='mt-4'>Modelo</h1>
              <iframe src="https://isra-conservacion-energia.netlify.app/" frameBorder="0" style={{ width: '80%', height: '100%' }}></iframe>
            </div>
          <div className="ejemplos">
              <div className="row d-flex flex-column align-items-center">
                <h1>Ejercicios</h1>
                <Accordion className='mt-5 w-100'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ejercicio #1</Accordion.Header>
                    <Accordion.Body>
                    <b>Un péndulo simple está formado por un hilo inextensible y de masa despreciable de 0.5 m de longitud del que cuelga una masa puntual de 2 kg.</b>  <br />
                      Si se separa de la posición de equilibrio 10º y se suelta, calcular la tensión del hilo cuando el péndulo pasa de nuevo por la posición vertical. Tomar g=9.8 m/s2.
                      Aplicamos el principio de conservación de la energía y a continuación, la dinámica del movimiento circular uniforme <br />

                      mgh= 1 2 m v 2 h=r−r·cos⁡θ T−mg=m v 2 r <br />

                      Con los datos: r=0.5 m, m=2 kg, θ=10º, obtenemos v=0.38 m/s, T=20.2 N <br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="col-12 mt-5 d-flex justify-content-center">
                  <img className='rounded-2' style={{ height: '12rem', objectFit: 'scale-down' }} src="https://media.discordapp.net/attachments/1026213110941483018/1042995535642120293/unknown.png?width=1202&height=676" alt="Momento lineal" />
                </div>
              </div>
            </div>
          </>
          )
    }
    </>
  )
}
