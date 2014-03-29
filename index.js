#!/usr/bin/env node

var suncalc = require('suncalc'),
    request = require('request'),
    moment = require('moment'),
    chalk = require('chalk'),
    geolocation_url = 'https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true';

request(geolocation_url, function (err, res, body) {
    var geolocation_data = JSON.parse(body);
    var suncalc_data = suncalc.getTimes(new Date(), geolocation_data.location.lat, geolocation_data.location.lng);
    console.log(chalk.yellow('Dawn: ') + moment(suncalc_data.dawn).calendar());
    console.log(chalk.yellow('Sunrise: ') + moment(suncalc_data.sunrise).calendar());
    console.log(chalk.yellow('Sunset: ') + moment(suncalc_data.sunset).calendar());
    console.log(chalk.yellow('Dusk: ') + moment(suncalc_data.dusk).calendar());
});
