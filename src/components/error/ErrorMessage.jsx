import PropTypes from 'prop-types';

const ErrorMessage = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative flex flex-col items-center justify-center p-8 space-y-6 rounded-lg shadow-lg bg-background">
                <button 
                    onClick={onClose} 
                    className="absolute text-2xl text-white top-4 right-4 focus:outline-none"
                >
                    &times;
                </button>

                <h1 className="text-4xl text-white font-protest">Error</h1>
                <p className="text-lg text-center text-secondary">
                    {message || 'An error occurred while searching for characters.'}
                </p>
                <div className="relative">
                    <img
                        src="/assets/images/characters/marvel/deadpool2.webp"
                        alt="Under construction"
                        className="w-64 h-auto mx-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 p-2 text-xs font-bold text-white rounded-full bg-primary">
                        Oops!
                    </div>
                </div>
            </div>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired, 
};

export default ErrorMessage;
