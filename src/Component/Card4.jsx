import Icon from '../assets/images/icon.svg';
import Icon1 from '../assets/images/icon2.svg';
import '../assets/css/card2.css';
const Card4 = () => {
  return (
    <div className="cardxx cardxxx ">
      <div className="cardbody">
        <div className="cardhead">
          <div className="card-heading1">
          Upcoming Schedule
          </div>
          <div className="card-date">
            <div>
              <img src={Icon} alt="icon" />
            </div>
          </div>
        </div>
        <div className='prio'>Priority</div>
        <div className="card-contentx"style={{marginTop:"0%"}}>
          <div>
            <div className="cardcontethead">Review candidate applications</div>
            <div className="cardpara"><p>5 Minutes ago</p></div>
          </div>
          <div>
            <div> 
              <img src={Icon1} alt="icon" />
            </div>
          </div>
        </div>
        <div className='prio'>Other</div>
        <div className="card-contentx "style={{marginTop:"0%"}}>
          <div>
            <div className="cardcontethead">Interview with candidates</div>
            <div className="cardpara"><p>Today - 10.30 AM</p></div>
          </div>
          <div>
            <div> 
              <img src={Icon1} alt="icon" />
            </div>
          </div>
        </div>
        <div className="card-contentx">
          <div>
            <div className="cardcontethead">Short meeting with product designer from IT Departement</div>
            <div className="cardpara"><p>Today - 09.15 AM</p></div>
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
  )
}

export default Card4
