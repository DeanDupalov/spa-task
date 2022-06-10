import './App.css';
import Data from './assets/api.json'

import { useState, useEffect } from 'react';
import * as agentService from './services/agentService'
import AgentsList from './components/AgentsList';

function App() {
    const [agents, setAgents] = useState([]);
    const [query, setQuery] = useState('');

    const keys = ["firstName", "lastName", "phone", "email", "location"];
   
    const search = (data) => {
        return data.filter((agent) => keys.some((key) => agent[key] ? agent[key].toLowerCase().includes(query): null));
    }
   
   
    useEffect(() => {
        setAgents(search(Data));

    }, [query]);


    return (
        <div id="container">
            <header>
                <nav className="nav">
                    <div className="search-container" >
                        <input type="text" placeholder="Search..." name="search" onChange={e => setQuery(e.target.value)} />
                    </div>
                </nav>
            </header>

            <AgentsList agents={agents} />

        </div>
    );
}

export default App;
