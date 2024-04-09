import React, { useState } from 'react'
import { FacultyTeam, WebTeam } from '../pages'
import InCTeamsSection from './incTeams';

import { useNavigate } from 'react-router-dom';
import UnderConstructionPopup from './UnderConstructionPopup';
import { Buttons } from '../components';
import './styles/incTeams.css';
import InCTeams from '../pages/incTeams';


const Committee = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState("web"); // Show the Web Committee by default

    const showTeam = (team) => {
        setShowPopup(team);
    }

    const closePopup = () => {
        setShowPopup("");
    }

    return (
        <>
            <div id="team" className='flex md:flex-row flex-col p-8 gap-2 w-full items-center inc-team-component'>
                <figure className='w-full md:w-3/5 md:p-6 p-2 border-l-4 border-[#f2a30f] leading-6 bg-blue-900/20'>
                    <blockquote className='italic md:text-4xl text-lg tracking-wide p-2'>The strength of the team is each individual member. The strength of each member is the team.</blockquote>
                    <figcaption className='md:text-xl'>- Phil Jackson</figcaption>
                </figure>
                <div className='w-full md:w-full  flex flex-wrap justify-center items-center gap-6 md:p-6'>
                    {/* <Buttons value={'Student Team'} onClick={() => navigate('/inc-teams')} /> */}
                    <Buttons value={'Web Committee'} onClick={() => showTeam('web')} />
                    <Buttons value={'Core Committee'} onClick={() => showTeam('core')} />
                    <Buttons value={'Faculty Committees'} onClick={() => showTeam('faculty')} />
                </div>

                
                
                {/* Render the UnderConstructionPopup if showPopup is not empty */}
                {/* {showPopup && (
                    <UnderConstructionPopup
                        title="Page Under Construction"
                        content="We are currently working on this page. Please check back later."
                        onClose={closePopup}
                    />
                )} */}
            </div>
            {showPopup === "web" && <WebTeam />}
            {showPopup === "core" && <InCTeams/>}
            {showPopup === "faculty" && <FacultyTeam />}
        </>
    )
}

export default Committee;
