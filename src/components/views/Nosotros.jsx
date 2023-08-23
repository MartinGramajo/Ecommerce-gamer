const Nosotros = () => {
  return (
    <section className="fondo-crear text-white">
      <div className="container">
        <h1 className="text-center">Nosotros</h1>
        <p className="text-center">
          Nosotros somos alumnos de Rolling code, a los cuales se le encomendo
          la tarea de hacer un Ecommerce.
        </p>
        <p className="text-center">
          Acercar el cursor y en mobile hace un touch para conocer a cada uno de
          los integrantes del grupo.
        </p>
        <div className="d-flex justify-content-center py-5">
          <div className="wrap">
            <article>
              <div className="tarjeta-wrap">
                <div className="tarjeta">
                  <div className="adelante card1"></div>
                  <div className="atras">
                    <img
                      className="imagen-carta py-5"
                      src="https://w7.pngwing.com/pngs/465/803/png-transparent-princess-peach-super-mario-bros-princess-peach-princess-daisy-peach-super-mario-bros-video-game-cartoon-thumbnail.png"
                      alt="Daniela"
                    />
                    <h6>Nombre y Apellido: Geronimo Daniela</h6>
                    <p>Cargo en el equipo: Developer</p>
                  </div>
                </div>
              </div>
              <div className="tarjeta-wrap">
                <div className="tarjeta">
                  <div className="adelante card2"></div>
                  <div className="atras">
                    <img
                      className="imagen-carta py-5"
                      src="https://w7.pngwing.com/pngs/270/842/png-transparent-new-super-mario-bros-u-yoshi-game-super-mario-bros-nintendo-thumbnail.png"
                      alt="Martin"
                    />
                    <h6>Nombre y Apellido: Martin Gramajo</h6>
                    <p>Cargo en el equipo: Developer</p>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="tarjeta-wrap">
                <div className="tarjeta">
                  <div className="adelante card3"></div>
                  <div className="atras">
                    <img
                      className="imagen-carta py-5"
                      src="https://w7.pngwing.com/pngs/206/895/png-transparent-bowser-super-mario-bros-princess-peach-bowser-super-mario-bros-nintendo-video-game-thumbnail.png"
                      alt="Lucas"
                    />
                    <h6>Nombre y Apellido: Lucas Anachuri</h6>
                    <p>Cargo en el equipo: Scrum Master</p>
                  </div>
                </div>
              </div>
              <div className="tarjeta-wrap">
                <div className="tarjeta">
                  <div className="adelante card4"></div>
                  <div className="atras">
                    <img
                      className="imagen-carta py-5"
                      src="https://w7.pngwing.com/pngs/357/417/png-transparent-super-mario-mushroom-character-super-mario-bros-toad-bowser-mario-bros-child-super-mario-bros-hand-thumbnail.png"
                      alt="Hector"
                    />
                    <h6>Nombre y Apellido: Andrada Hector</h6>
                    <p>Cargo en el equipo: Developer</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
