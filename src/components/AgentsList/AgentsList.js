import AgentCard from "../AgentCard";

const AgentsList = ({
    agents
}) => {
    return (
        <>
            {agents.length > 0
                ? (
                    <section className="basic-grid">
                        {agents.map(x => <AgentCard key={x.phone} agent={x} />)}

                    </section>
                )
                : <p>No Agents in Database.</p>
            }

        </>

    )
}

export default AgentsList;