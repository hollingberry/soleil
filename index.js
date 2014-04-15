#!/usr/bin/env node

var suncalc = require('suncalc'),
    request = require('request'),
    moment = require('moment'),
    chalk = require('chalk'),
    geolocation_url = 'https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true';

request(geolocation_url, function (err, res, body) {
    if (err) {
        console.log(chalk.red('Geolocation request failed.\n' + err));
        return;
    }
    var geolocation_data = JSON.parse(body);
    display(geolocation_data.location);
});

function display (coords) {
    var sun_times = suncalc.getTimes(new Date(), coords.lat, coords.lng);
    var moon_illumination = suncalc.getMoonIllumination(new Date());
    output('Dawn', sun_times.dawn);
    output('Sunrise', sun_times.sunrise);
    output('Sunset', sun_times.sunset);
    output('Dusk', sun_times.dusk);
    console.log(chalk.blue('Moon Phase: ') + phase(moon_illumination.fraction, moon_illumination.angle));
}

function output (name, date) {
    console.log(chalk.yellow(name + ': ') + moment(date).calendar());
}

function phase (fraction, angle) {
    if (angle > 0) {
        return 'Waning';
    } else if (angle < 0) {
        return 'Waxing ';
    }
}
