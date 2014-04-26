#!/usr/bin/env node

var suncalc = require('suncalc'),
    request = require('request'),
    moment = require('moment'),
    chalk = require('chalk'),
    cl = require('corelocation');

var location = cl.getLocation();
var coords = {
    lat: location[1],
    lng: location[0]
};

display(coords);

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
    var output = chalk.yellow(name + ': ') + moment(date).calendar() + chalk.cyan(' (' + moment(date).fromNow() + ')');
    console.log(output);
}

function phase (fraction, angle) {
    if (angle > 0) {
        return 'Waning';
    } else if (angle < 0) {
        return 'Waxing ';
    }
}
