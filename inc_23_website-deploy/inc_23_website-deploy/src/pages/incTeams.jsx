import "./styles/incTeams.css";
import { useEffect } from "react";
import member_bg from "../assets/images/member_bg.jpg";
import { EmailIcon, LinkedinIcon, GithubIcon } from "../assets/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import scrollToTop from "../utils/scrollToTop";
import oc_1 from "../assets/images/Coordination Team/VineetKothari.jpg";
import oc_2 from "../assets/images/Coordination Team/GaurangMote.jpg";
import oc_3 from "../assets/images/Coordination Team/VedantBadade.png";
import op_1 from "../assets/images/Coordination Team/AdnanPatel.jpg";
import op_2 from "../assets/images/Coordination Team/RohanKashikar.jpg";
import c_1 from "../assets/images/Coordination Team/ShreyasSawarkar.jpg";
import c_2 from "../assets/images/Coordination Team/SrushtiKulkarni.png";
import c_3 from "../assets/images/Coordination Team/PranjalBhokare.jpg";
import c_4 from "../assets/images/Coordination Team/MitraBarve.jpg";
import p_1 from "../assets/images/Coordination Team/AtharvaBanasure.jpg";
import p_2 from "../assets/images/Coordination Team/ManaviKhopade.jpg";
import p_3 from "../assets/images/Coordination Team/TusharBirajdar.jpg";
import i_1 from "../assets/images/Coordination Team/NamanLabhsetwar.png";
import i_2 from "../assets/images/Coordination Team/AyushMohod.jpg";
import i_3 from "../assets/images/Coordination Team/VaishnaviMahale.jpg";
import i_4 from "../assets/images/Coordination Team/AdvaitKulkarni.jpg";
import marketing from "../assets/images/Coordination Team/RajMagdum.jpg";
import pt_1 from "../assets/images/Coordination Team/PremChikode.jpg";
import pt_2 from "../assets/images/Coordination Team/YojanGandhi.jpg";
import vl from "../assets/images/Coordination Team/OjasDeshpande.jpg";
import dt_1 from "../assets/images/Coordination Team/SahilTodsam.jpg";
import dt_2 from "../assets/images/Coordination Team/ShambhaviLute.jpg";
import dt_3 from "../assets/images/Coordination Team/ShlokBelgamwar.jpg";
import sm_1 from "../assets/images/Coordination Team/IshaVerma.jpg";
import sm_2 from '../assets/images/Coordination Team/ArohiKarhade.jpg';
// import i_4 from '';
function InCTeams() {
  useEffect(() => {
    scrollToTop();
  }, []);
  const teamsData = [
    {
      team: "Overall Co-ordinators",
      members: [
        {
          name: "Vineet Kothari",
          post: "Overall Co-ordinator",
          email: "vskothari11@gmail.com",
          linkedin: "https://www.linkedin.com/in/vineet-kothari13/",
          photo: oc_1,
        },
        {
          name: "Gaurang Mote ",
          post: "Overall Co-ordinator",
          email: "gaurang.mote8@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/gaurang-mote-349905230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: oc_2,
        },
        {
          name: "Vedant Badade ",
          post: "Overall Co-ordinator",
          email: "vedantbadade397@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/vedant-badade-b83707234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: oc_3,
        },
      ],
    },
    {
      team: "Operations Heads",
      members: [
        {
          name: "Adnan Patel",
          post: "Operations Head",
          email: "adnanrpatel03@gmail.com",
          linkedin: "https://www.linkedin.com/in/adnanrouf",
          photo: op_1,
        },
        {
          name: "Rohan Kashikar",
          post: "Operations Head",
          email: "rohankashikar777@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/rohan-kashikar-19b74819b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          photo: op_2,
        },
      ],
    },
    {
      team: "Concepts Heads",
      members: [
        {
          name: "Shreyash Sawarkar",
          post: "Concepts Head",
          email: "sawarkar.shreyash111@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shreyash-sawarkar-618745272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: c_1,
        },
        {
          name: "Srushti Kulkarni",
          post: "Concepts Head",
          email: "kulkarnisrushti100@gmail.com",
          linkedin: "https://www.linkedin.com/in/srushti-kulkarni-36060b249",
          photo: c_2,
        },
        {
          name: "Pranjal Bhokare",
          post: "Concepts Head",
          email: "pranjalbhokare27@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/pranjal-bhokare-3a6594201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: c_3,
        },
        {
          name: "Mitra Barve",
          post: "Concepts Head",
          email: "barve.mitra@gmail.com",
          linkedin: "https://www.linkedin.com/in/mitra-barve-894827228/",
          photo: c_4,
        },
      ],
    },
    {
      team: "Impetus Heads",
      members: [
        {
          name: "Naman Labhsetwar",
          post: "Impetus Head",
          email: "labhsetwarnaman@gmail.com",
          linkedin: "https://www.linkedin.com/in/naman-labhsetwar-01638022a",
          photo: i_1,
        },
        {
          name: "Aayush Mohod",
          post: "Impetus Head",
          email: "aayushmohod4@gmail.com",
          linkedin: "https://www.linkedin.com/in/aayush-mohod-05868022a/",
          photo: i_2,
        },
        {
          name: "Vaishnavi Mahale",
          post: "Impetus Head",
          email: "vaimahale74@gmail.com",
          linkedin: "https://linkedin.com/in/vaishnavimahale",
          photo: i_3,
        },
        {
          name: "Advait Kulkarni",
          post: "Impetus Head",
          email: "advaitkulkarni0102@gmail.com",
          linkedin: "https://www.linkedin.com/in/advait-kulkarni-ak12",
          photo: i_4,
        },
      ],
    },
    {
      team: "Pradnya Heads",
      members: [
        {
          name: "Atharva Banasure",
          post: "Pradnya Head",
          email: "atharvabanasure@gmail.com",
          linkedin: "https://www.linkedin.com/in/banasureatharva/",
          photo: p_1,
        },
        {
          name: "Manavi Khopade",
          post: "Pradnya Head",
          email: "manaviik.24@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/manavikhopade24?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: p_2,
        },
        {
          name: "Tushar Birajdar",
          post: "Pradnya Head",
          email: "tusharbirajdar2002@gmail.com",
          linkedin: "https://www.linkedin.com/in/tushar-birajdar-3a4754229/",
          photo: p_3,
        },
      ],
    },
    {
      team: "Marketing Head",
      members: [
        {
          name: "Raj Magdum",
          post: "Marketing Head",
          email: "rajsmagdum@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/rajvardhan-magdum-a53451239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: marketing,
        },
      ],
    },
    {
      team: "Publicity Heads",
      members: [
        {
          name: "Prem Chikode",
          post: "Publicity Head",
          email: "chikodeprem3004@gmail.com",
          linkedin: "https://linkedin.com/in/prem-chikode",
          photo: pt_1,
        },
        {
          name: "Yojan Gandhi",
          post: "Publicity Head",
          email: "yojangandhi24@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/yojan-gandhi-406106188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: pt_2,
        },
      ],
    },
    {
      team: "V&L Head",
      members: [
        {
          name: "Ojas Deshpande",
          post: "V&L Head",
          email: "ojasanni09@gmail.com",
          linkedin: "https://www.linkedin.com/in/ojas-deshpande-467963226",
          photo: vl,
        },
      ],
    },
    {
      team: "Design Team",
      members: [
        {
          name: "Sahil Todsam",
          post: "Design Head",
          email: "todsamsahil@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/sahil-todsam-5a8157229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          photo: dt_1,
        },
        {
          name: "Shambhavi Lute",
          post: "Design Head",
          email: "shambhavilute49@gmail.com",
          linkedin:
            "https://www.linkedin.com/in/shambhavi-lute-051987249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: dt_2,
        },
        {
          name: "Shlok Belgamwar",
          post: "Design Coordinator",
          email: "shlokbelgamwar3@gmail.com",
          linkedin: "https://www.linkedin.com/in/shlok-belgamwar/",
          photo: dt_3,
        },
      ],
    },
    {
      team: "Social Media Heads",
      members: [
        {
          name: "Isha Verma",
          post: "Social Media Head",
          email: "20.ishaverma@gmail.com",
          linkedin: "https://linkedin.com/in/isha-verma-0b8362229",
          photo: sm_1,
        },
        {
          name: "Arohi Karhade",
          post: "Social Media Head",
          email: "arohikarhade@gmail.com",
          linkedin: "https://www.linkedin.com/in/arohi-karhade-220589272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          photo: sm_2,
        },
      ],
    },
  ];

  function openEmailClient(email) {
    window.open(`mailto:${email}`);
  }
  return (
    <div className="inc-teams flex flex-col justify-center gap-14">
      {teamsData.map((team) => (
        <div className="team" key={team.team}>
          <h2 className="team-name3">{team.team}</h2>
          <div className="members ">
            {team.members.map((member) => (
              <div className="member w-[100%] md:w-[60%] " key={member.name}>
                <div className="apple">
                  <div className="apple-inner">
                    <img
                      className="circle"
                      src={member_bg}
                      loading="lazy"
                      alt="member_bg"
                    />
                    <img
                      className="img"
                      src={member.photo}
                      loading="lazy"
                      alt="member"
                    />
                  </div>
                </div>
                <hr className="divider"></hr>
                <div className="name">{member.name}</div>
                <div className="post">{member.post}</div>
                <div className="member-icons">
                  <CopyToClipboard
                    text={member.email}
                    onCopy={() => {
                      toast.success("Email Copied!!");
                    }}
                  >
                    <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openEmailClient(member.email);
                    }}
                    className="hover:bg-blue-900/60 hover:border-transparent hover:opacity-100"
                  >
                    <EmailIcon className="w-12 h-12" />
                  </a>
                  </CopyToClipboard>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="hover:bg-blue-900/60 hover:border-transparent hover:opacity-100"
                  >
                    <LinkedinIcon className="w-12 h-12" />
                  </a>
                  {/* <a href={member.github} className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><GithubIcon className='w-12 h-12' /></a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InCTeams;
