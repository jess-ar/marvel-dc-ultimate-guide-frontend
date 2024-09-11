import PropTypes from 'prop-types';

const Placeholder = ({ text, width, height, borderRadius }) => {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        backgroundColor: '#F0F0F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#AA9999', 
        fontSize: '14px',
    };

    return (
        <div style={style}>
            {text}
        </div>
    );
};

Placeholder.propTypes = {
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    borderRadius: PropTypes.number,
};

Placeholder.defaultProps = {
    text: 'Placeholder',
    width: 300,
    height: 50,
    borderRadius: 25,
};

export default Placeholder;
