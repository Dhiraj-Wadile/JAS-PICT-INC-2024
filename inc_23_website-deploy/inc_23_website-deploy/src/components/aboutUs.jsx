import { Fade } from "react-awesome-reveal";
import "./styles/AboutUs.css";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "INC",
  "Impetus",
  "Concepts",
  "Pradnya",
  "Project",
  "Presentation",
  "Embeded Systems",
  "Web Development",
  "IOT",
  "Hardware",
  "Application Development",
  "Project Management",
];
const DURATION = 15000;
const ROWS = 20;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span className="text-lg text-gold">#</span> {text}
  </div>
);

const AboutUs = () => (
  <div id="about">
    <Fade>
      <header className="header-about my-10">
        <h1 className="text-center">About Us</h1>
      </header>
      <div className="about-body relative overflow-hidden py-12">
        <div className="about-content text-justify w-[90%] md:w-8/12 z-10 p-8 md:px-12 text-md md:text-lg shadow-2xl shadow-light_blue/20 bg-[#000]/80 rounded-xl border border-light_blue/30">
          <p>
            Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT), Pune , which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.
          </p>
          <br />
          <br />
          <p>
            Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains ; Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains ; and Pradnya - An International Coding Competition.
          </p>
          <br />
          <br />
          <span className="">
            Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of<br />{" "}
            <span className="font-extrabold underline italic text-white">
              ₹ 1 Lakh Cash Prize
            </span>{" "}
            from PICT.
          </span>
        </div>


        <div className="tag-list w-full blur-sm hover:blur-none transition duration-300">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
    </Fade>
  </div>
);

export default AboutUs;
