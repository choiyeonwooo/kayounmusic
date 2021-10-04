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
                  We love the Web and the work we do.We work closely with our clients to deliver{" "}
                  <br /> the best possible solutions for their needs
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
