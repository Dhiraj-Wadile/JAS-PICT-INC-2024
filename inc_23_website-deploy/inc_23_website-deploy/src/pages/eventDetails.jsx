// import './styles/eventDetails.css';
// import EventCards from '../components/eventCards';
import impetus_logo from "../assets/images/impetus_logo.png";
import concepts_logo from "../assets/images/concepts_logo.png";
import pradnya_logo from "../assets/images/pradnya_logo.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PradnyaRuleBook from "../assets/rulebooks/PradnyaRuleBook.pdf";
import ImpetusRuleBook from "../assets/rulebooks/ImpetusRuleBook.pdf";
import ConceptsRuleBook from "../assets/rulebooks/ConceptsRuleBook.pdf";
import { toast } from "../components/index.js";
import { FaDownload } from "react-icons/fa";

function EventDetails(props) {
  const [eventDetail, setEventDetail] = useState("");
  const eventsData = {
    impetus: {
      logo: impetus_logo,
      criteria:
        "First, Second and Third Year Students enrolled in any BE/BTech, BSc, BCA, Diploma Degree.",
      main_name: "IMPETUS",
      name: "Impetus",
      short_desc: "International Level Project Exhibition and Competition ",

      desc: ["Impetus is an intercollegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, CSI, were closely associated with this event. During the 3 day event, first year, second year and third year students from various colleges across India and abroad showcase their projects in domains like", <br />, `🔹Application Development `, <br />, `🔹 Communication, Networking, Security `, <br />, `🔹 git Learning, Pattern Recognition, Artificial Intelligence`, <br />, `🔹 Embedded systems, VLSI, IoT, Remote Sensing`, <br />, `🔹 Blockchain, Cloud Computing`, <br />, `🔹Others`],


      domains: [
        {
          domain: "APPLICATION DEVELOPMENT",
          sub_domains:
            "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
        },
        {
          domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
          sub_domains:
            "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
        },
        {
          domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
          sub_domains:
            "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
        },
        {
          domain: "EMBEDDED/VLSI SYSTEMS",
          sub_domains:
            "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
        },
      ],
      registrations: {
        fees: [
          `🔹 For National Entries: ₹100 /-`, <br />,
          `🔹 For International Entries: Free`,
        ],
        team_size: "max 5",
      },
      prizes: `Cash prize worth ₹7 Lakh.`,
      rules: [
        `🔹Judge's decision will be final.`,
        <br />,
        `🔹Project status must be in "Ready to Use".`,
        <br />,
        `🔹Already registered candidates need not register again.`,
      ],
      note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded ₹1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "5th 6th & 7th of April",
    },
    concepts: {
      logo: concepts_logo,
      criteria: "Final year students enrolled in BE/ BTech degree.",
      schedule: "5th 6th & 7th of April",
      main_name: "CONCEPTS",
      name: "Concepts",
      notices: [
        "1. The Participants should be present on campus and the labs during the time period allocated.",
        "2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.",
        "3. The judging criteria includes the following points :- ", <p>i. Innovative Ideas Involved.</p>, <p>ii. Approach to Exploit Ideas.</p>, <p> iii. Approach towards Implementing the system and Future Applications.</p>, <p> iv. Implementation of engineering Principles. </p>, <p>v. Presentation and Q & A</p>,
        "4. We request all the group members to visit the stalls put up in the campus.",
        "5. For any judging related queries contact the lab coordinator associated with the respective lab only. Their contact details are written on each lab white board.",
      ],
      short_desc:
        "The most grand project exhibition event Concepts for final year student",
      desc: "Concepts is an inter-collegiate international-level competition and has been attracting corporate giants for not only sponsorship but also  for guiding and mentoring the participants for their Quality products/projects and providing on spot job offers & internships. It offers Patent registration fees for Innovative and Patentable projects. During the 3 day event, Final Year students from various colleges across India and abroad showcase their projects.",
      domains: [
        {
          domain: "APPLICATION DEVELOPMENT",
          sub_domains:
            "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
        },
        {
          domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
          sub_domains:
            "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
        },
        {
          domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
          sub_domains:
            "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
        },
        {
          domain: "EMBEDDED/VLSI SYSTEMS",
          sub_domains:
            "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
        },
      ],
      registrations: {
        fees: ['🔹For National Entries :    ₹300/- ', <br />,
          '🔹For International Entries : Free entry'],

        team_size: "max 5",
      },
      prizes: "Cash prize worth ₹7 Lakh.",
      note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded ₹ 1 Lakh Cash Prize from PICT.`,

      rules: [

        <p> 🔹Judge's decision will be final.</p>,
        <p>🔹Project status must be in "Ready to Use"</p>,
        <p>🔹Already registered candidates need not register again.</p>,
      ],
      button_link: "https://pictinc.org/register/events/concepts",
    },
    pradnya: {
      // contact: [
      //   "Pratik 9145439727",
      //   "Neha 9579678142"
      // ],
      prizes: "Cash prize worth ₹7 Lakh",
      note1: `🔹Judge's decision will be final.`,
      note3: `🔹Already registered candidatess need not register again.`,
      schedule: "5th 6th & 7th of April",
      criteria: [`Junior Level - This category is open for all students who are pursuing first or second year of any undergraduate  degree/course.`, <br />,
        `Senior Level - Third year engineering, final year engineering of any undergraduate degree/course.`],
      logo: pradnya_logo,
      main_name: "PRADNYA",
      name: "Pradnya",
      short_desc: "Competitive Programming",
      desc: "PRADNYA is a one of a kind programming event meticulously forged by our finest, catering to rookies and veterans alike, from all over the world. This Contest puts the programmer’s logical thinking and Problem solving skills to the test using programming languages, which guarantees to appraise their skills as a programmer.",
      eligibility: [
        { tag: "Number of members in team", details: "maximum 2 members" },
        {
          tag: "Junior Level",
          details:
            "First year engineering, Second year engineering, other background students such as BCS etc.",
        },
        {
          tag: "Senior Level",
          details:
            "Third year engineering, final year engineering, and PG students.",
        },
      ],
      rounds: [
        {
          name: "Wild Card Round",
          details:
            "The wildcard round is open to both junior and senior teams, and the top 5 teams from each category will enter directly into the programming round (Round 2). This round will be conducted online on the coding platform. The wildcard round will include programming questions where the participants can code using any programming language they prefer.",
        },
        {
          name: ["Round 1 : MCQ Round [ Day 1 ] ",

          ],

          details:
            "In this event the participants are given multiple-choice and short-answer questions. This round is conducted for both levels using a web platform specially designed by the PICT Pradnya team. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 2: Programming Round [ Day 2 ]",
          details:
            "Winners in the MCQ-based round and wild card winners are eligible for the programming contest. Five problem statements are allotted to each level, i.e., the junior and senior levels.  This round is held on an online programming platform. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 3: Judges Round  [ Day 2 ]",
          details:
            "In the final round, the top 5 teams qualified for round 2 will enter the judging round. Esteemed industry professionals are invited to serve as judges for this competition stage. During the judging round, the judges will evaluate the five teams based on their solutions from round 2. The judges will then select the top three winning teams.",
        },
      ],
      registrations: {
        fees: ["🔹 For National Entries : ₹ 100/-", <br />,
          "🔹 For International Entries : Free entry"
        ],
        team_size: 2,
      },
      rules: [
        "All students whose colleges are located within the Pune district are required to attend this round in person at the PICT Campus. For students residing outside of the Pune district, there is an option to take the round in hybrid mode.",
      ],
      button_link: "https://pictinc.org/register/events/pradnya",
      rule_book: ""
    },


  };

  let { eventName } = useParams();
  const _404Navigator = useNavigate();
  const fetchName = () => {
    // console.log(eventName);

    if (eventName === "impetus") setEventDetail(eventsData.impetus);
    else if (eventName === "pradnya") setEventDetail(eventsData.pradnya);
    else if (eventName === "concepts") setEventDetail(eventsData.concepts);
    else _404Navigator("/404");
  };
  // eslint-disable-next-line


  const handleDownload = (eventName) => {
    // Create a dummy link element
    const link = document.createElement('a');
    // Set the href attribute to the PDF file path
    if (eventName === "CONCEPTS") {
      link.href = ConceptsRuleBook;
      link.setAttribute('download', 'ConceptsRuleBook.pdf');
    } else if (eventName === "IMPETUS") {
      link.href = ImpetusRuleBook;
      link.setAttribute('download', 'ImpetusRuleBook.pdf');
    } else {
      link.href = PradnyaRuleBook;
      link.setAttribute('download', 'PradnyaRuleBook.pdf');
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`${eventName.toLowerCase()} Rulebook successfully downloaded`)
  };

  useEffect(() => fetchName(), []);

  return (
    <>
      <div className="text-justify">
        {eventDetail !== "" ? (
          <div className="grid lg:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl mt-5">
            <div className=" text-center  text-white  px-4   ">
              <div className="w-[50%] md:w-[35%]  mx-auto">
                <img
                  src={eventDetail.logo}
                  alt="event-logo"
                  className="event-logo"
                />
              </div>
              <div className="py-3 text-5xl md:text-6xl mx-auto font-bold text-gold  bg-clip-text  ">
                {eventDetail.main_name}
              </div>
              <div className=" border-b border-gray-500"></div>
              <div className="font-light text-gray-400 justify py-4 justify-center">
                {eventDetail.short_desc}

              </div>
              <div className="event-fees text-blue-400 text-lg flex flex-col xl:flex-row font-bold text-left xl:space-x-28 items-center md:justify-center">
                <div>
                  <span className="text-gray-200 font-thin">Fees: </span> <br />
                  <span>{eventDetail.registrations.fees}</span>
                  <br />
                  <br />

                  <div className="flex space-x-2">
                    <div className="text-gray-200 font-thin">Team Size : </div>
                    <div>{eventDetail.registrations.team_size} members</div>
                  </div>
                  <br />
                </div>

                <div className="flex flex-col ">
                  <button className=" h-18 px-5 font-xl md:px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10">
                    <a href={eventDetail.button_link}>Register</a>
                  </button>

                  <button
                    className="h-18 mt-5 px-5 font-xl md:px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10"
                    onClick={() => handleDownload(eventDetail.main_name)}
                  >
                    <span className="flex justify-center items-center"> <FaDownload className="mr-2" /> Rule Book</span>
                  </button>
                </div>


              </div>


              {/* <p className="text-red-400 font-medium event-register-buttons disabled">
                        Registrations closed! Try with other events.
                      </p>           */}
            </div>
            {/* event details description */}
            <div className="space-y-4  p-8 md:h-[80%]  overflow-auto bg-black/20 shadow-lg bg-light_blue/30 rounded-xl  border-light_blue shadow-light_blue/20 hover:bg-light_blue/10 border  md:max-h-screen font-thin ">
              <div className="text-4xl text-gold font-bold mb-8 border-b border-white pb-2">
                Description
              </div>
              <div className=" grid md:grid-cols-2 gap-4">
                <div className="">
                  <div className="text-2xl text-gold font-bold pb-2 bg-clip-text  space-x-2">
                    <label>Prizes</label>{" "}
                    <i class="fa fa-trophy yellow-color" />
                  </div>
                  <div className="border-t pt-2 border-slate-600">
                    {eventDetail.prizes}
                    {/* <ol className="text-gray-300 font-thin  "> */}
                    {/* {eventData?.prizes?.length ? (
                              eventData?.prizes?.map((data, idex) =>
                                data?.label !== "" ? (
                                  <li>
                                    {data?.position} {data?.position && ": "}
                                    {data?.prize && "Rs."} {data?.prize} (
                                    {data?.label && data.label})
                                  </li>
                                ) : (
                                  <li>
                                    {data?.position} : Rs. {data?.prize}
                                  </li>
                                )
                              )
                            ) : (
                              <div>Coming Soon...</div>
                            )} */}
                    {/* <li>
                                position 1: Rs 400
                            </li>
                            <li>
                                position 2:Rs 200
                            </li>
                            <li>
                                position 3: Rs 100
                            </li> */}
                    {/* </ol> */}
                  </div>
                </div>

                <div className="">
                  <div className="text-2xl font-bold pb-2 text-gold bg-clip-text  space-x-2">
                    <label>Schedule</label>
                    <i class="far fa-calendar"></i>
                  </div>
                  <div className="border-t pt-2 border-slate-600">
                    <ol className="text-gray-300 font-thin list-disc list-inside">
                      {
                        /* {
                              eventData?.schedule?.map((data) => (
                                <li>
                                  Round {data.round} : {data.datetime !== "" ? <a href="https://www.pcsbxenia.com/schedule">{data.datetime}</a> : <a href="https://www.pcsbxenia.com/schedule">Check Schedule Page</a>}
                                </li>
                              ))} */
                        eventDetail.schedule
                      }
                    </ol>
                  </div>
                </div>
                <>
                  {eventDetail.notices ? (
                    <div className="col-span-2">
                      <div className="text-2xl text-gold font-bold bg-clip-text">
                        {/* Platforms :MCQ */}
                        Instructions to participants for Concepts
                        <div className="mt-2 text-base pt-1 text-white font-light text-blue-200 border-t border-slate-600">
                          <div>
                            <ul>
                              {eventDetail.notices.map((notice, index) => (
                                <li classNames="text-xl" key={index}>
                                  {notice}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>

                <div className="space-y-2 col-span-2">
                  <>
                    {eventDetail.note ? (
                      <div>
                        <div className="text-2xl font-bold  bg-clip-text text-gold space-x-2">
                          <label>Event prize</label>
                          {/* <i class="far fa-phone"></i> */}
                        </div>
                        <div className="border-t pt-2 pb-2 border-slate-600">
                          {eventDetail.note}
                          <br />
                          {eventDetail.note1}
                          <br />
                          {eventDetail.note2}
                          <br />
                          {eventDetail.note3}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </>

                  <div className="text-2xl font-bold text-gold bg-clip-text  space-x-2">
                    <label>Criteria</label>
                    <i class="far fa-phone"></i>
                  </div>
                  <div className="border-t pt-2 pb-2 border-slate-600">
                    {eventDetail.criteria}
                  </div>
                  <div className="text-2xl font-bold  bg-clip-text text-gold space-x-2">
                    <label>Rules</label>
                    <i class="far fa-phone"></i>
                  </div>
                  <div className="border-t pt-2 pb-2 border-slate-600">
                    {eventDetail.rules}
                  </div>

                  <div className="text-2xl text-gold font-bold  bg-clip-text ">
                    {eventDetail.name}
                  </div>
                  <div className="border-t pt-2 border-slate-600">
                    {eventDetail.desc}
                    {/* <ul className="text-white list-disc list-inside">
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat a inventore, quidem unde voluptatibus delectus, esse odio non veniam velit magnam optio ipsum. Reiciendis nesciunt error possimus repudiandae accusantium, tempora voluptatibus?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, exercitationem vitae officia quam omnis consequuntur rerum aperiam dolorem nobis aliquid.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque perspiciatis porro eligendi temporibus optio, unde exercitationem tempore quaerat harum incidunt quos, dolorem blanditiis animi voluptas sapiente sequi!</li>

                              </ul> */}
                  </div>
                </div>
                <>
                  {eventDetail.rounds ? (
                    <div className="col-span-2">
                      <div className="text-2xl text-gold font-bold bg-clip-text">
                        {/* Platforms :MCQ */}
                        Rounds
                        <div className="mt-2 pt-1 text-white font-light text-blue-200 border-t border-slate-600">
                          {eventDetail.rounds.map((data) => (
                            <div>
                              <ul className="text-white list-disc  list-inside">
                                <li className="font-bold font-xl">
                                  {/* <p > */}
                                  {data.name}
                                  {/* </p> */}
                                </li>
                              </ul>
                              <p className="text-base">{data.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>

                <div className="col-span-2">
                  {/* <div className="text-2xl text-gold font-bold pb-2 mt-5 bg-clip-text ">
                      Contact Help
                    </div> */}
                  <div className="border-t pt-2 border-slate-600">
                    {eventDetail?.contact?.map((data) => (
                      <div>
                        <span className="text-blue-300 px-3">
                          {data?.split(" ")?.[0] || " "}
                          {" : "}
                        </span>
                        <p className="inline-block text-blue-300  font-bold font-xl">
                          📞 {data?.split(" ")?.[1] || ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default EventDetails;
