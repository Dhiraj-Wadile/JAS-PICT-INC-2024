import impetus_logo from "../assets/images/impetus_logo.png";
import concepts_logo from "../assets/images/concepts_logo.png";
import pradnya_logo from "../assets/images/pradnya_logo.png";
import concepts_bg from '../assets/images/32.jpeg';
import impetus_bg from '../assets/images/4.jpeg';
import pradnya_bg from '../assets/images/6.jpeg';
import { Cube } from "./index";
import { useEffect, useRef } from "react";
import "./styles/hero.css";

function Hero() {
  const titleRef = useRef(null);
  const factor = 2;

  useEffect(() => {
    const moveShadow = (e, title) => {
      var rXP = e.pageX - title.offsetLeft - title.style.width;
      var rYP = e.pageY - title.offsetTop - title.style.height;
      title.style.textShadow =
        "-" +
        rYP / (factor * 10) +
        "px " +
        rXP / (factor * 80) +
        "px 10px rgba(126, 188, 242, 0.2), " +
        rYP / (factor * 10) +
        "px -" +
        rXP / (factor * 60) +
        "px 10px rgba(242, 163, 15, 0.2), " +
        rXP / (factor * 70) +
        "px " +
        rYP / (factor * 12) +
        "px 10px rgba(162, 205, 242, 0.2)";
    };

    const removeShadow = (title) => {
      title.style.textShadow = "unset";
    };

    const title = titleRef.current;
    title.addEventListener("mousemove", (e) => moveShadow(e, title));
    title.addEventListener("mouseleave", (_) => removeShadow(title));

    return () => {
      title.removeEventListener("mousemove", (e) => moveShadow(e, title));
      title.removeEventListener("mouseleave", (_) => removeShadow(title));
    };
  }, []);

  return (
    <div id="home" className="hero ">
      <div className="hero-background">
        <span className="event">
          <span>
            Impetus
            <img src={impetus_logo} alt="impetus-logo" />
          </span>
          <img src={impetus_bg} alt="impetus-bg" />
        </span>
        <span className="event">
          <span>
            Concepts
            <img src={concepts_logo} alt="concepts-logo" />
          </span>
          <img src={concepts_bg} alt="concepts-bg" />
        </span>
        <span className="event">
          <span>
            Pradnya
            <img src={pradnya_logo} alt="pradnya-logo" />
          </span>
          <img src={pradnya_bg} alt="pradnya-bg" />
        </span>
      </div>
      <div className="flex justify-evenly" >
        <div className="hero-title">
          <h4 className="hero-lines m-2 md:text-2xl text-xl">
            SOCIETY FOR COMPUTER TECHNOLOGY AND RESEARCH'S
          </h4>
          <h3 className="hero-lines md:text-3xl text-lg">
            PUNE INSTITUTE OF COMPUTER TECHNOLOGY <br /> PRESENTS
          </h3>
          <div className="inc-title m-2 md:text-7xl text-4xl" ref={titleRef}>
            <h1>IMPETUS AND CONCEPTS</h1>
          </div>
        </div>
        <div className="hero-cube">
          <Cube className="scale-100" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
