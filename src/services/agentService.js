

export const getAllAgents = () => fetch('api.json')
    .then(res => {
        return res.json()
    })

