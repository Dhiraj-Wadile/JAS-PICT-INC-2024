import { useCallback } from 'react';

function Checkboxes({ label, options, name, state, setState, required, error }) {
    const handleCheckboxChange = useCallback((e) => {
        const { value } = e.target
        setState(prevState => {
            let newState = { ...prevState }
            if (!newState[name].includes(value)) {
                newState[name] = [...newState[name], value] || []
            } else {
                newState[name] = newState[name].filter(item => item !== value)
            }
            return newState
        })
    }, [setState, state])

    return (
        <div className='input-box-radio w-full mb-4 relative'>
            <label htmlFor={name} className={`input-label font-medium mb-3 text-white text-lg ${required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{label}</label>
            <div className='flex flex-wrap w-full items-center gap-4'>
                {options.map(option => {
                    return (
                        <div className='inline-flex rounded-xl justify-center items-center' key={option?.value + '_' + name}>
                            <input type='checkbox' name={name} id={option?.value + '_' + name} value={option?.value} checked={state[name].includes(option?.value)} onChange={handleCheckboxChange} required={option?.required ? 'required' : ''} className='opacity-0 absolute' />
                            <label htmlFor={option?.value + '_' + name} className={`label text-center text-base self-center bg-faint_blue/30 font-gilroy text-white text-lg py-2 px-4 outline-0 border-2 border-transparent rounded-xl cursor-pointer transition-all duration-300 hover:border-light_blue hover:bg-faint_blue/20 ${option?.className || ''}`}>{option?.label}</label>
                        </div>
                    )
                })}

            </div>
            {error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 -mt-4'>{error}</span>}
        </div>
    )
}

export default Checkboxes;