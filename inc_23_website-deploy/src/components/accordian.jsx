import { useState } from "react";

function Accordian({ value, names }) {
    const [open, setOpen] = useState(false);
    function toggleAccordian() {
        setOpen(prevState => !prevState)
    }
    return (
        <>
            <div onClick={toggleAccordian} className="mx-5 md:mx-10 mt-5 flex justify-between rounded-lg pl-2 md:pl-10 md:pr-5 pr-2 py-4 bg-faint_blue ">
                <label className="overflow-clip w-[80%]">{value}</label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-1.5em ">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </div>
            {open && (
                <>
                    <div class="">
                        {names.map(name => {
                            return (
                                <div className="bg-light_blue block mx-10">
                                    <h1 className="text-gold pl-4">{name.value}</h1>
                                </div>
                            )
                        })}
                    </div>
                </>)}


        </>
    );
}
export default Accordian;