import React, { useState } from "react";
import styles from "./carousel.module.css";
import logo2 from "../../assets/logo2.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Carousel(props) {
  const [slideVw, setSlideVw] = useState(0);

  console.log(slideVw);

  const handleBackward = () => {
    if (slideVw !== 0) {
      setSlideVw(slideVw + 20);
      console.log(slideVw);
    }
  };

  const handleForward = () => {
    if (slideVw >= -80) {
      setSlideVw(slideVw - 20);
      console.log(slideVw);
    }
  };

  return (
    <section className={styles.section}>
      <div
        className={styles.reel}
        style={{
          transform: `translateX(${slideVw}vw)`,
          transition: "0.5s ease",
        }}
      >
        {/* article 1 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic01"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 2 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 3 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 4 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 5 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 6 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic01"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 7 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 8 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 9 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>

        {/* article 10 */}
        <article className={styles.article}>
          <img className={styles.img} src={logo2} alt="pic02"></img>
          <div className="carousel__information">
            <h3 className={styles.h3}>Lorem ipsum dolor.</h3>
            <p className={styles.p}>
              Consectetur adipisicing elit expedita optio id aliquam suscipit.
            </p>
          </div>
        </article>
      </div>{" "}
      <span className={styles.backward} onClick={handleBackward}>
        <IoChevronBack className={styles.backwardIcon} />
      </span>
      <span className={styles.forward} onClick={handleForward}>
        <IoChevronForward className={styles.forwardIcon} />
      </span>
    </section>
  );
}

export default Carousel;
