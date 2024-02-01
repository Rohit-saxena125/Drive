import '../assets/css/card.css'
import PropTypes from 'prop-types';
const Card = (props) => {
    return (
        <div className='card' style={{ backgroundColor: props.color }}>
            <div className='card-content'>
                <div className='card-heading'>
                    {props.heading}
                </div>
                <div className='card-body'>
                    {props.countnum}
                </div>
                <div className='card-footer' style={{color:props.foocolor}}>
                    {props.foo}
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    heading: PropTypes.string.isRequired,
    countnum: PropTypes.number.isRequired,
    foo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    foocolor: PropTypes.string.isRequired
};

export default Card;

