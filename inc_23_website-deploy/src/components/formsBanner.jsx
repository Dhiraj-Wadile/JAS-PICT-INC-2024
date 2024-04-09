function FormsBanner(props) {
    return (
        <header className="flex space-x-5 shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border border-light_blue items-center p-4 md:p-8 md:mx-20 mx-5 mt-10">
            <div className="w-20 h-auto shadow-white">
                <img src={props.logo} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <h1 className="text-xl md:text-3xl font-poppins text-gold font-bold tracking-wider underline underline-offset-4 decoration-1 decoration-light_blue uppercase">{props.eventName}</h1>
                {props.eventDescription && (
                    <h2
                        className="text-lg md:text-xl border-l-2 border-gold md:font-light list-disc md:leading-6 pl-2"
                        dangerouslySetInnerHTML={{ __html: props.eventDescription }}
                    />
                )}
            </div>
        </header>
    );
}

export default FormsBanner;