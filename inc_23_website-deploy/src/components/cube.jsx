import './styles/cube.css';

function Cube({ className }) {
    return (
        <div className={`cube-wrapper ${className}`}>
            <div className='cube'>
                <div className='back-C'><p>C</p></div>
                <div className='top-I'><p>I</p></div>
                <div className='left-N'><p>n</p></div>
                <div className='bottom-I'><p>I</p></div>
                <div className='right-N'><p>n</p></div>
                <div className='front-C'><p>C</p></div>
            </div>
        </div>
    )
}

export default Cube;