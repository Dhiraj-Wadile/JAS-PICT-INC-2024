import { NoteBox } from '../components';

function CloseMessage() {
    return (
        <div className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl  items-center p-4 md:p-8 border border-light_blue w-full'>
            <p className='text-2xl text-center text-[#ff0000] font-bold mb-3'>Registrations are Closed</p>
            <p className='text-xl text-center text-gold font-bold mb-3'>Thank you all who registered.</p>
            <NoteBox
                title='Note'
                text='Payment will be verified and will be informed by email for pending registrations.'
            />
        </div>
    )
}

export default CloseMessage;