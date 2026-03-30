"use strict";
async function getTeams(year, k) {
    console.log("Fetching...");
    let promises = [];
    let results = [];
    for (let page = 1; page <= 13; page++){
        promises.push(fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}&page=${page}`));
    }

    const responses = await Promise.all(promises);
    for (let response of responses){
        const data = await response.json();
        results = results.concat(data.data);
    }
    console.log(results);
}
getTeams(2012, 6);