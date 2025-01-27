import PropTypes from 'prop-types';

const Button = ({ text = 'Click Me', onClick = () => {}, type = 'button' }) => {  
    const baseStyle = 'w-[280px] h-[45px] lg:w-[300px] lg:h-[50px] px-6 py-2 rounded-full text-base lg:text-lg font-semibold focus:outline-none transition-all duration-300';
    const outlineHoverStyle = 'border border-red-600 text-white hover:bg-red-600 hover:text-secundary';

    return (
        <button className={`${baseStyle} ${outlineHoverStyle}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

export default Button;
