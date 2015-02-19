#!/usr/bin/env node

var suncalc = require('suncalc');
var cl = require('corelocation');
var chalk = require('chalk');
var moment = require('moment');
var _ref = cl.getLocation();
var longitude = _ref[0];
var latitude = _ref[1];
var _ref2 = suncalc.getTimes(new Date(), latitude, longitude);
var dawn = _ref2.dawn;
var sunrise = _ref2.sunrise;
var sunset = _ref2.sunset;
var dusk = _ref2.dusk;

function output(description, time) {
  title = chalk.yellow(description);
  clockTime = moment(time).format('h:mm a');
  relativeTime = chalk.cyan(moment(time).fromNow());
  console.log("" + title + ": " + clockTime + " (" + relativeTime + ")");
}

output('Now', new Date());
output('Dawn', dawn);
output('Sunrise', sunrise);
output('Sunset', sunset);
output('Dusk', dusk);

