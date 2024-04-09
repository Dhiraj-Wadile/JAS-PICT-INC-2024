import "./styles/sponsors.css";
import imperial from "../assets/images/imperial.png"
import Aayan from "../assets/images/Aayan.png.jpg"
import intangle from "../assets/images/intangles.png.jpg"
import pict from "../assets/images/pict1997.jpg"
import cloudhedge from "../assets/images/CloudHedge.png"
import eQ from "../assets/images/eq_technologic_rectangle_logo.png"
import campusTimes from "../assets/images/CampusTimesPune.png"
const titleSponsors = [
  {
    name: "eQ Technologic",
    logo: eQ,
    website: "https://www.1eq.com/",
  },
  {
    name: "Sarvatra Technologies",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1677914537/logo_sarvatra_ww7sgb.png",
    website: "https://sarvatra.tech/",
  }


];

const coSponsors = [
 
];

const educationSponsors = [
  {
    name: "iMocha",
    logo: "https://res.cloudinary.com/dwhoc05ug/image/upload/v1681740341/iMocha_black_dj0jpu.png",
    website: "https://www.imocha.io/",
  },
  {
    name: "Ayaan",
    logo: Aayan,
    website: "http://ayaan.ai/",
  },
  {
    name: "Intangles",
    logo: intangle,
    website: "https://www.intangles.ai/",
  }

];

const eventSponsors = [
  {
    name: "AGCO",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1678885571/AGCO_logo_nfigrk.png",
    website: "https://www.agcocorp.com/",
  },
];
const specialprize = [
  {
    name:    <div>
    <span style={{ display: 'block' }}>Computer Engineering</span>
    <span style={{ display: 'block' }}>Batch of 1997</span>
  </div>,
    logo: pict,
    website: "https://pict.edu/",
  },
];
const eventSponsors2 = [
  {
    name: "Veritas",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1677914537/Veritas_Logo_RED_1000x197_wzcrl7.jpg",
    website: "https://www.veritas.com/",
  },
];

const Other = [
  {
    name: "Cloud Hedge",
    logo: cloudhedge,
    website: "https://cloudhedge.io/",
  },
  {
    name: "Imperial Overseas",
    logo: imperial,
    website: "https://www.imperial-overseas.com/",
  }
  // {
  //   name: "Zbyte",
  //   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaYFPO8ZH4KTkju3ki8oS9g3gZFCeA8YFeN4YYAKsng&s",
  //   website: "https://zbyte.io/",
  // },
  // {
  //   name: "AlgoAnalytics",
  //   logo: "https://res.cloudinary.com/job-kart/image/upload/v1677914536/AlgoAnalytics_Logo_1_j2xxp4.png",
  //   website: "https://www.algoanalytics.com/",
  // },
  // {
  //   name: "BNY MELLON",
  //   logo: "https://res.cloudinary.com/dsoid12mi/image/upload/v1680198601/bnym_logo_horiz_teal_rgb_3_q5npvc.png",
  //   website: "https://www.bnymellon.com/",
  // },
  // {
  //   name: "Diacto",
  //   logo: "https://res.cloudinary.com/dsoid12mi/image/upload/v1680201291/Screenshot_2023-03-31_000335_tvhbkj.png",
  //   website: "https://www.diacto.com/",
  // },
];

const onlineMedia=[
  {
    name: "Campus Times Pune",
    logo: campusTimes,
    website: "https://www.campustimespune.com/",
  }
];

const Association = [
  {
    name: "CSI",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1678885023/CSI_Logo_blue_rmxkvy.png",
    website: "https://www.pictcsi.com/",
  },
  {
    name: "IEEE",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1677914533/PISB_color_qbyv80.png",
    website: "https://pictieee.in/",
  },
  {
    name: "ACM",
    logo: "https://res.cloudinary.com/job-kart/image/upload/v1677914536/Pasc_gafhcj.png",
    website: "https://pict.acm.org/",
  }
 
];

const getList1 = (sponsorsArray) => {
  const list = sponsorsArray.map((sponsor) => {
    return (
      <div className="sponsor-card">
        {sponsor.website && (
          <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
            <div
              className="logo-container hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl"
              style={{ backgroundImage: `url(${sponsor.logo})` }}
            ></div>
          </a>
        )}

        <p className="sponsor-name">{sponsor.name}</p>
        <div className="sponsor-social">
          {/* {sponsor.website && (
            <a href={sponsor.website} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-globe'></i>
            </a>
          )} */}
          {sponsor.linkedin && (
            <a
              href={sponsor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          )}
          {sponsor.twitter && (
            <a href={sponsor.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          )}
          {sponsor.instagram && (
            <a
              href={sponsor.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          )}
          {sponsor.facebook && (
            <a
              href={sponsor.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          )}
          {sponsor.careers && (
            <a href={sponsor.careers} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-briefcase"></i>
            </a>
          )}
        </div>
      </div>
    );
  });
  return list;
};

const titleSponsorsList = getList1(titleSponsors);
const coSponsorsList = getList1(coSponsors);
const educationSponsorsList = getList1(educationSponsors);
const ImpetusSponsorsList = getList1(eventSponsors);
const PradnyaSponsorsList = getList1(eventSponsors2);
const OtherSponsorsList = getList1(Other);
const onlineMediaPartner = getList1(onlineMedia);
const AssociationSponsorsList = getList1(Association);
const specialprizeList=getList1(specialprize);
export default function Sponsors() {
  return (
    <div id="sponsors" className="sponsors mt-5">
      <div className="sm:text-6xl text-5xl  font-semibold text-center text-white pb-12">
        Our Sponsors
      </div>
      <h1 className="sponsors-head">Title Sponsors</h1>
      <div className="sponsors-list  title-sponsors">{titleSponsorsList}</div>
      {/* <div className="sponsors-head  title-sponsors">
       Co-Sponsors And Concept Sponsor
      </div> */}
      <div className="sponsors-list  title-sponsors">{coSponsorsList}</div>
      <div className="sponsors-head  title-sponsors">Co-Sponsors</div>
      <div className="sponsors-list title-cosponsors">
        {educationSponsorsList}
      </div>
      {/* <div className="sponsors-head">Impetus Sponsor</div> */}
      <div className="sponsors-list">{ImpetusSponsorsList}</div>
      <div className="sponsors-head">Pradnya Sponsor</div>
      <div className="sponsors-list">{PradnyaSponsorsList}</div>
      <div className="sponsors-head mt-5">Special Prize Sponsor</div>
      <div className="sponsors-list ">{specialprizeList}</div>

      <div className="sponsors-head">Other Sponsors</div>
      <div className="sponsors-list">{OtherSponsorsList}</div>
      <div className="sponsors-head">Online Media Partner</div>
      <div className="sponsors-list">{onlineMediaPartner}</div>
      <div className="sponsors-head">In Association With</div>
      <div className="sponsors-list">{AssociationSponsorsList}</div>
    </div>
  );
}