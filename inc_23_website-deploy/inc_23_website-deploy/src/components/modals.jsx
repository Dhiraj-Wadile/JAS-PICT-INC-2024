import './styles/modals.css';

function Modals({ modalState, children, toggleModal }) {
    return (
        <>
            {modalState &&
                <div className='modals'>
                    {children}
                </div>
            }
        </>
    );
}

export default Modals;