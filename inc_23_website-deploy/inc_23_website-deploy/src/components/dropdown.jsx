import { useCallback } from 'react';

function Dropdown({ label, options, state, setState, name, required, error }) {
  const handleDropdownChange = useCallback((e) => {
    const { value } = e.target;
    setState((prevState) => {
      let newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  }, [setState, name]);

  return (
    <div className="input-box-dropdown w-full mb-4 relative">
      <label htmlFor={name} className={`input-label font-medium mb-3 text-white text-lg ${required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{label}</label>
      <div className="relative inline-block w-full">
        <select
          name={name}
          id={name}
          value={state[name]}
          onChange={handleDropdownChange}
          required={required ? 'required' : ''}
          className={`w-full h-10 pl-3 pr-8 bg-[#0B1E47] text-base text-gold placeholder-gray-500 border rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue ${error && 'border-red-500'} ${options.className || ''}`}
        >
          {options.map(option => (
            <option key={option?.value} disabled={option?.disabled} value={option?.value} className={`py-1 bg-[#0B1E47] ${option?.className || ''}`}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 -mt-4'>{error}</span>}
    </div>
  );
}

export default Dropdown;
