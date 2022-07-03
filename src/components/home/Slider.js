import { Animated } from "react-animated-css";

function Slider() {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <h1>
                  Ka Youn Yoo <br />
                  Music Composer
                </h1>
              </Animated>
              <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <p>
                  A passionate composer, producer, and orchestrator grown from a diverse cultural
                  background
                  <br className="d-none d-md-block" /> with a particular affection for film music
                </p>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
