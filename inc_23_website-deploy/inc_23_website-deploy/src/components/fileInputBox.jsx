
function FileInputBox({ label,name,accept,type, placeholder, inputRef, onChange , classNames, required, error }) {
    return (
        <div className='input-box w-full mb-3 relative'>
                    <label htmlFor={label.toLowerCase().replace(/ /g, "_")} className={`input-label font-medium  text-white text-lg before: ${required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{label}</label>
            {/* <label htmlFor={label.toLowerCase().replace(/ /g, "_")} className='input-label font-medium mb-3 text-white text-lg '>{label}</label> */}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={inputRef}
                accept={accept}
                onChange = {onChange}
                className={`block w-full font-medium mb-3 text-white text-lg dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-faint_blue focus:outline-none dark:bg-faint_blue dark:border-gray-600 dark:placeholder-gray-400 ${classNames}`}
                autoComplete='off'
                required={required}
            />
            {error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 mt-10'>{error}</span>}
        </div>
    );
}

export default FileInputBox;