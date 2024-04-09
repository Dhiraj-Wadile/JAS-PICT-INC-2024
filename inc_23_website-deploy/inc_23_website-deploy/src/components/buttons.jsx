import './styles/buttons.css';

function Buttons({ value, type, onClick, className, disabled, loading }) {
    onClick = onClick || function () { console.error('Error: No onClick event listener function passed to <Buttons /> , Expected <Buttons onClick={someFunction} />') };

    return (
        <button
            className={`px-2 md:px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10 ${loading && 'cursor-no-drop'} ${className}`}
            onClick={(e) => onClick(e)}
            value={value}
            disabled={disabled || loading}
            type={type || 'button'}
        >
            {loading ?
                <>
                    <svg className='inline spin_loader -ml-2 mr-2 h-6 w-6 text-white will-change-transform' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='#2563eb' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='#f2a30f' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Processing...
                </>
                : value
            }
        </button>
    );
}

export default Buttons;