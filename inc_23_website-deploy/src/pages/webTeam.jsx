import './styles/incTeams.css';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import test_image from '../assets/images/Web Team/abhishek1.jpeg';
import test_image1 from '../assets/images/Web Team/Viraj.jpeg';
import test_image2 from '../assets/images/Web Team/om.jpeg';
import test_image3 from '../assets/images/Web Team/parth.jpg';
import test_image4 from '../assets/images/Web Team/sarthak.jpeg';
import test_image5 from '../assets/images/Web Team/manasi1.jpeg';
import test_image6 from '../assets/images/Web Team/siddhi1.jpeg';
import test_image7 from '../assets/images/Web Team/manas.jpeg';
import test_image8 from '../assets/images/Web Team/SairajMane.png';
import member_bg from '../assets/images/member_bg.jpg';
import { EmailIcon, LinkedinIcon, GithubIcon } from '../assets/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
function WebTeam() {
  useEffect(() => {
    scrollToTop();
    //Teams
    //Changes
  }, [])
  const teamData = [
    {
      team: 'Support & Guide', members: [
        { name: 'Abhishek Jadhav', post: 'Support & Guide', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://www.linkedin.com/in/AbhishekJadhav2002/', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Manas Kshatriya', post: 'Support & Guide', email: 'manaskshatriya01@gmail.com', linkedin: 'https://www.linkedin.com/in/manas-kshatriya/', github: 'https://github.com/manaskshatriya', photo: test_image7 }
      ],


    },
    {
      team: 'Web Head', members: [
        { name: 'Viraj Sonawane', post: 'Web Head', email: 'virajssonawane324@gmail.com', linkedin: 'https://www.linkedin.com/in/viraj-sonawane-5518851a7/', github: 'https://github.com/Viraj324/', photo: test_image1 },
        { name: 'Om Panchwate', post: 'Web Head', email: 'ompanchwate2003@gmail.com', linkedin: 'https://linkedin.com/in/om-panchwate-a80a88233/', github: 'https://github.com/ompanchwate', photo: test_image2 },

      ]
    },
    {
      team: 'Web Team', members: [
        { name: 'Parth Sali', post: 'Web Team', email: 'parthsali04@gmail.com', linkedin: 'https://www.linkedin.com/in/parthsali/', github: ' https://github.com/parthsali', photo: test_image3 },
        { name: 'Sairaj Mane', post: 'Web Team', email: 'sairajmane.pict@gmail.com', linkedin: 'https://www.linkedin.com/in/sairaj-mane-263490188/', github: 'https://github.com/SairajMane', photo: test_image8 },
        { name: 'Manasi Lavekar', post: 'Web Team', email: 'manasilavekar1@gmail.com', linkedin: 'https://www.linkedin.com/in/manasi-lavekar-b3213922b/', github: 'https://github.com/Manasi-Lavekar', photo: test_image5 },
        { name: 'Siddhi Ove', post: 'Web Team', email: 'siddhiove0407@gmail.com', linkedin: 'https://www.linkedin.com/in/siddhi-ove-304596250/', github: 'https://github.com/sid040703', photo: test_image6 },
        { name: 'Sarthak Chaudhari', post: 'Web Team', email: 'Sarthakchaudhari401@gmail.com', linkedin: 'https://www.linkedin.com/in/sarthak-chaudhari-0b920722a/', github: 'https://github.com/JusticeChaudhari', photo: test_image4 }
      ]
    }

  ]

  function openEmailClient(email) {
    window.open(`mailto:${email}`);
  }
  return (
    <div className='inc-teams flex flex-col justify-center gap-14'>
      {teamData.map(team => (
        <div className='team ' key={team.team}>
          <h2 className='team-name md:before:w-96 before:w-60 before:h-12 md:before:h-[3.4rem]'>{team.team}</h2>
          <div className='members w-[100%]  flex flex-col md:flex-row items-center'>
            {team.members.map(member => (
              <div className='member w-[100%] md:w-[60%] ' key={member.name}>
                <div className='apple'>
                  <div className='apple-inner'>
                    <img
                      className='circle'
                      src={member_bg}
                      loading='lazy'
                      alt='member_bg'
                    />
                    <img
                      className='img img1'
                      src={member.photo}
                      loading='lazy'
                      alt='member'
                    />
                  </div>
                </div>
                <hr className='divider'></hr>
                <div className='name'>{member.name}</div>
                <div className='post'>{member.post}</div>
                <div className='member-icons'>
                <CopyToClipboard text={member.email} onCopy={()=>{
                  toast.success("Email Copied!!");
                }}>
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
                  <a href={member.linkedin} target='_blank' className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><LinkedinIcon className='w-12 h-12' /></a>
                  <a href={member.github} target='_blank' className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><GithubIcon className='w-12 h-12' /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );




}
export default WebTeam;
