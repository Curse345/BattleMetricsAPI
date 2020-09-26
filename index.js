const axios = require('axios');

function login(config) {
    axios.defaults.headers.common['Authorization'] = config.token
}

axios.defaults.baseURL = 'https://api.battlemetrics.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

async function getServerInfoByName(serverName, game) {
    let info = [];
    await axios.get(`/servers?filter[search]='${serverName}&filter[game]=${game}`).then(res => {
        res.data.data.forEach(el => {
            var attributes = el.attributes;

            let data = {
                Id: attributes.id,
                Name: attributes.name,
                Players: attributes.players,
                MaxPlayers: attributes.maxPlayers,
                Country: attributes.country,
                Rank: attributes.rank,
                Description: attributes.details.rust_description
            }
            info.push(data);
        });
    })
    return info;
}

async function getServerInfoById(serverId) {
    let info = [];
    await axios.get(`/servers/${serverId}`).then(res => {
        var attributes = res.data.data.attributes;

        let data = {
            Id: attributes.id,
            Name: attributes.name,
            Players: attributes.players,
            MaxPlayers: attributes.maxPlayers,
            Country: attributes.country,
            Rank: attributes.rank,
            Description: attributes.details.rust_description
        }

        info.push(data);
    })
    return info;
}

async function getGameInfo(game) {
    let info = [];
    await axios.get(`/games/${game}`).then(res => {
        var attributes = res.data.data.attributes;

        let data = {
            AppID: attributes.metadata.appid,
            Players: attributes.players,
            Servers: attributes.servers,
            MinPlayers24H: attributes.minPlayers24H,
            MaxPlayers24H: attributes.maxPlayers24H,
            MinPlayers7D: attributes.minPlayers7D,
            MaxPlayers7D: attributes.maxPlayers7D,
            MinPlayers30D: attributes.minPlayers30D,
            MaxPlayers30D: attributes.maxPlayers30D
        }
        info.push(data);
    })
    return info;
}

async function getServerID(serverName, game) {
    let info = [];
    await axios.get(`/servers?filter[search]='${serverName}&filter[game]=${game}`).then(res => {
        res.data.data.forEach(el => {
            var attributes = el.attributes;

            let data = {
                Id: attributes.id,
                Name: attributes.name,
            }
            info.push(data);
        });
    })
    return info;
}

async function getPlayTimeHistory(playerId, serverId, startTime, stopTime) {
    let info = [];
    await axios.get(`https://api.battlemetrics.com/players/${playerId}/time-played-history/${serverId}?start=${startTime}T12%3A00%3A00Z&stop=${stopTime}T12%3A00%3A00Z`).then(res => {
        info.push(res.data.data);
    })
    return info;
}

async function getServerPlayerInfo(playerId, serverId) {
    let info = [];
    await axios.get(`https://api.battlemetrics.com/players/${playerId}/servers/${serverId}`).then(res => {
        var attributes = res.data.data.attributes;

        let data = {
            FirstSeen: attributes.firstSeen,
            LastSeen: attributes.lastSeen,
            TimePlayed: attributes.timePlayed,
            Online: attributes.online
        }

        info.push(data)
    })
    return info;
}

async function getPlayerInfo(playerId) {
    let info = [];
    await axios.get(`https://api.battlemetrics.com/players/${playerId}`).then(res => {
        var attributes = res.data.data.attributes;

        let data = {
            Name: attributes.name,
            Private: attributes.private,
            PossitiveMatch: attributes.positiveMatch,
            CreatedAt: attributes.createdAt,
            UpdatedAt: attributes.updatedAt
        }
        info.push(data);
    })
    return servers;
}

async function getBanInfo(banid) {
    let info;
    await axios.get(`/bans/${banid}`).then(res => {
        let data = res.data.data;
        info = data;
    })
    return info;
}

async function getBans() {
    let info = [];
    await axios.get(`/bans`).then(res => {
        res.data.data.forEach(el => {
            info.push(el);
        })
    })
    return info;
}

module.exports.getGameInfo = getGameInfo;
module.exports.getServerInfoByName = getServerInfoByName;
module.exports.getServerInfoById = getServerInfoById;
module.exports.getServerID = getServerID;
module.exports.getPlayTimeHistory = getPlayTimeHistory;
module.exports.getServerPlayerInfo = getServerPlayerInfo;
module.exports.getPlayerInfo = getPlayerInfo;
module.exports.login = login;
module.exports.getBanInfo = getBanInfo;
module.exports.getBans = getBans;