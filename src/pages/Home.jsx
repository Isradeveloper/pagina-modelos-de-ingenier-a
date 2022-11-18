import React from 'react'

export const Home = () => {
  const screen = window.screen.width

  return (
    <>
    <div className="home">
      <div className="titulo">
        Leyes de conservación
      </div>
      <div className="integrantes">
        <span>Israel Trujillo</span>
        <span>Eder Castro</span>
        <span>Moisés Cantillo</span>
      </div>
    </div>

    {
      (screen > 768)
        ? (
          <div className="teoria-home">
            <div className="row d-flex align-center justify-content-center">
              <div className="col-6 gx-0 imagen">
                <img src="https://media.discordapp.net/attachments/1026213110941483018/1042991845396975626/unknown.png?width=720&height=405" alt="imagen-home" />
              </div>
              <div className="col-6 gx-0 texto">
                <span>Leyes de conservación</span>
                Las leyes de conservación son las leyes físicas que postulan que durante la evolución temporal de un sistema aislado, ciertas magnitudes tienen un valor constante. Puesto que el universo entero constituye un sistema aislado, se le pueden aplicar diversas leyes de conservación.
              </div>
            </div>
          </div>
          )
        : (
          <div className="teoria-home">
            <div className="row d-flex align-center justify-content-center">
            <div className="col-12 gx-0 texto">
                <span>Leyes de conservación</span>
                <br />
                Las leyes de conservación son las leyes físicas que postulan que durante la evolución temporal de un sistema aislado, ciertas magnitudes tienen un valor constante. Puesto que el universo entero constituye un sistema aislado, se le pueden aplicar diversas leyes de conservación.
              </div>
              <div className="col-12 gx-0 imagen">
                <img src="https://media.discordapp.net/attachments/1026213110941483018/1042991845396975626/unknown.png?width=720&height=405" alt="imagen-home" />
              </div>

            </div>
          </div>
          )
    }
    </>
  )
}
