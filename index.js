const axios = require('axios');

axios.defaults.baseURL = 'https://api.battlemetrics.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function serverInfo(serverName, game) {
    axios.get(`/servers?filter[search]='${serverName}&filter[game]=${game}`).then(async res => {
        let servers = [];
        res.data.data.forEach(el => {
            attributes = el.attributes;

            servers.push(new Promise(resolve => {
                resolve({
                    Id: attributes.id,
                    Name: attributes.name,
                    Population: attributes.players + "/" + attributes.maxPlayers,
                    Country: attributes.country,
                    Rank: attributes.rank,
                    Description: attributes.details.rust_description
                })
            }));
        });
        var totalservers = await Promise.all(servers);
        return totalservers;
    })
}

module.exports.serverInfo = serverInfo;