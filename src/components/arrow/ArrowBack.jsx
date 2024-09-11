import PropTypes from 'prop-types';

const ArrowBack = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-secondary">
            <svg
                width="40"  
                height="60" 
                viewBox="0 0 31 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-14"  
            >
                <path
                    d="M13.5 17.7933L4 26.5823L13.5 35.314"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M24 26.3073H4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

ArrowBack.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ArrowBack;
