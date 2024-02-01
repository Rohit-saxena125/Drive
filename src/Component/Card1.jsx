import '../assets/css/card1.css'
import PropTypes from 'prop-types';
const Card1 = (props) => {
  return (
    <div className="cardx">
        <div className="card-content1">
            <div className="card1">
                {props.card1}
            </div>
            <div className="card2">
                {props.card2}
            </div>
            <div className="card3">
                {props.card3}
            </div>
            <div className="card4">
                {props.card4}
            </div>
        </div>
        <div className="card-content2">
            <div className="card5">
            <img src={props.cardsvg} alt="graph" />
            </div>
            
        </div>
        

    </div>
  )
}

Card1.propTypes = {
    card1: PropTypes.string.isRequired,
    card2: PropTypes.string.isRequired,
    card3: PropTypes.string.isRequired,
    card4: PropTypes.string.isRequired,
    cardsvg: PropTypes.string.isRequired
};
export default Card1
