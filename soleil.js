#!/usr/bin/env node

import { getTimes } from 'suncalc';
import { getLocation } from 'corelocation';
import * as chalk from 'chalk';
import * as moment from 'moment';

var { longitude, latitude } = getLocation();
var { dawn, sunrise, sunset, dusk } = getTimes(new Date(), latitude, longitude);

function output(description, time) {
  description = chalk.yellow(description);
  time = moment(time).format('h:mm a');
  relativeTime = chalk.cyan(moment(time).fromNow());
  console.log(`${description}: ${time} (${relativeTime})`);
}

output('Now', new Date());
output('Dawn', dawn);
output('Sunrise', sunrise);
output('Sunset', sunset);
output('Dusk', dusk);
