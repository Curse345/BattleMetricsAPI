# BattleMetricsAPI

BattleMeticsAPI is an easy and open source NPM Package that allows you to do a variety of functions within BattleMetrics but much easier!

# Getting Started!

## Installation

This is a  [Node.js](https://nodejs.org/en/)  module.

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

``` js
const Battlemetric = require('battlemetricsapi')
```

``` 
npm i battlemetricsapi --save
```

## Getting your API Key

You must generate an API Key from [Battlemetrics](https://www.battlemetrics.com/developers).
Then you must call the following function:

``` js
Battlemetrics.login({
    token: 'Bearer Token'
})
```

## Example Usage

``` js
const BattleMetrics = require("battlemetricsapi");

BattleMetrics.getServerInfoByName("Raid Simulator", "rust").then(res => {
    console.log(res)
});

BattleMetrics.getBanInfo("BanID").then(res => {
    console.log(res)
});

BattleMetrics.login({
    token: 'Bearer Token'
})
```
