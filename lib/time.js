const fetch = require("node-fetch");
const CONSTANTS = require("../utils/constants");

async function getTime(){
    const url = `${CONSTANTS.baseUrl}/time`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
        },
    });

    const unixResponse = await response.json();
    return unixResponse.time;
}

module.exports = getTime;