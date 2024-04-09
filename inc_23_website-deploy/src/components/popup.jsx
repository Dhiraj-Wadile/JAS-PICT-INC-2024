import React from 'react';
import { Link } from 'react-router-dom';
import { MdNotificationImportant } from "react-icons/md";

const Popup = ({ handleClose }) => {
  return (
    <div className="fixed h-screen z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center py-5 px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <div className="bg-gold flex  justify-center items-center animate-pulse text-black text-lg font-bold px-4 py-2 rounded-t-lg mb-4">

                <MdNotificationImportant className='text-2xl mr-2' /> Important Notice for Concepts 2024
              </div>
              <Link to="/schedule" className="text-xl font-bold text-gold mb-4">Check Schedule for latest updates!!</Link>
              <p className="text-lg text-white mb-4 text-justify">
                1. The Participants should be present on campus and the allocated labs during the time period indicated.
                <br />
                <br />
                2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.
                <br />
                {/* <br /> */}
                {/* 3. The judging criteria includes the following points.
              <br />
              i. Innovative Ideas Involved
              <br />
              ii. Approach to Exploit Ideas
              <br />
              iii. Approach towards Implementing the system and Future Applications
              <br />
              iv. Implementation of engineering Principles
              <br />
              v. Presentation and Q & A
              <br /> */}
                <br />
                4. We request all the group members to visit the stalls put up in the campus.
                <br />
                <br />
                5. For any judging related queries contact the student organizer associated with the respective lab only. Their contact details are written on each lab white board.
              </p>
              <button type="button" className="mt-5 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-faint_blue/50 text-base font-medium text-white hover:bg-light_blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold sm:text-sm" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
