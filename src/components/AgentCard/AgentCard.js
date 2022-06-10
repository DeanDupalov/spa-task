import './AgentCard.css'

import availableSvg from '../../assets/icon-available.svg';
import busySvg from '../../assets/icon-busy.svg';
import avatar from '../../assets/avatar.png';


const AgentCard = ({
    agent
}) => {

    return (
        <div className="card">
            <div className="parent">
                <img src={agent.image ? agent.image : avatar} />
                <img className="over-img" src={agent.available ? availableSvg : busySvg} />
            </div>
            <div className="info">
                <h2>{agent.firstName} {agent.lastName}</h2>
                <p>{agent.location}</p>
                <p>phone: {agent.phone}</p>
                <p>email: {agent.email}</p>
            </div>

        </div>

    )
}

export default AgentCard;