import Icon from "../assets/images/icon.svg";
import "../assets/css/card2.css";
import Icon1 from '../assets/images/icon1.svg'
const Card2 = () => {
  return (
    <div className="cardxx">
      <div className="cardbody">
        <div className="cardhead">
          <div className="card-heading1">
            Announcement
          </div>
          <div className="card-date">
            <div>
              <img src={Icon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="card-contentx">
          <div>
            <div className="cardcontethead">Outing schedule for every departement</div>
            <div className="cardpara"><p>5 Minutes ago</p></div>
          </div>
          <div>
            <div> 
              <img src={Icon1} alt="icon" />
            </div>
          </div>
        </div>
        <div className="card-contentx">
          <div>
            <div className="cardcontethead">Meeting HR Department</div>
            <div className="cardpara"><p>Yesterday, 12:30 PM</p></div>
          </div>
          <div>
            <div> 
              <img src={Icon1} alt="icon" />
            </div>
          </div>
        </div>
        <div className="card-contentx">
          <div>
            <div className="cardcontethead">IT Department need two more talents for UX/UI Designer position</div>
            <div className="cardpara"><p>Yesterday, 09:15 AM</p></div>
          </div>
          <div>
            <div> 
              <img src={Icon1} alt="icon" />
            </div>
          </div>
        </div>
        <div className="buttonco">
            <div className="te">
            See All Announcement
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
