#!/usr/bin/env node

import * as suncalc from 'suncalc';
import * as cl from 'corelocation';
import * as chalk from 'chalk';
import * as moment from 'moment';

var [ longitude, latitude ] = cl.getLocation();
var { dawn, sunrise, sunset, dusk } = suncalc.getTimes(new Date(), latitude, longitude);

function output(description, time) {
  title = chalk.yellow(description);
  clockTime = moment(time).format('h:mm a');
  relativeTime = chalk.cyan(moment(time).fromNow());
  console.log(`${title}: ${clockTime} (${relativeTime})`);
}

output('Now', new Date());
output('Dawn', dawn);
output('Sunrise', sunrise);
output('Sunset', sunset);
output('Dusk', dusk);
