function NoteBox({ title, text }) {
    return (
        <article className='w-full rounded-lg outline-dashed outline-2 outline-offset-[3px] outline-light_blue px-4 py-2 bg-faint_blue/10 mb-3'>
            <span className='font-bold text-faint_blue/80 italic pr-2'>{title}{' :'}</span>
            <span className='text-white/70'>{text}</span>
        </article>
    );
}

export default NoteBox;