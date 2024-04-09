import { useState } from 'react';
import { FormsBanner, Modals, Buttons } from '../components';
import TeamImpetus from '../components/forms/registrations/team_impetus';
import './styles/forms.css';
const implogo=require('../assets/images/impetus_logo.png')
function ImpetusForms() {
    const [showModal, setShowModal] = useState(false)
    function toggleInstructionsModal() {
        setShowModal(prevState => !prevState)
    }
    return (
        <div>
            
            <div className='flex justify-end'>
                <Buttons value="i" onClick={toggleInstructionsModal} classNames="rounded-full mr-24 my-5" />
            </div>
            <Modals modalState={showModal} toggleModal={toggleInstructionsModal}  >
                <>
                    <div className="flex justify-center items-center overflow-x-hidden text-black overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Instructions</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <ul>
                                        <li>Only after clicking add members, the member will be added</li>
                                        <li>Each step will be completed only after clicking on next step</li>
                                        
                                    </ul>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Modals>
             <TeamImpetus />
        </div>
    );
}
export default ImpetusForms;