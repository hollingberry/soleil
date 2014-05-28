# Soleil

Sunrise/sunset times from the terminal. Soleil uses your current location (using OSX CoreLocation) to calculate sunrise/sunset times. Soleil requires OSX.

## Usage

```bash
$ soleil
Dawn: Today at 7:18 AM (7 hours ago)
Sunrise: Today at 7:42 AM (7 hours ago)
Sunset: Today at 6:58 PM (in 4 hours)
Dusk: Today at 7:22 PM (in 5 hours)
Moon Phase: Waning
```

## Installation

```bash
$ npm install -g soleil
```

## Todo

- Improve lunar information
    - Better description ("Waxing Crescent" instead of "Waxing")
    - Add unicode moon phase symbol to output
    - New/full moon info ("4 days until the next new moon" or "Full moon tonight")

## Acknowledgements

Soleil uses [suncalc](https://github.com/mourner/suncalc) for sunrise/sunset calculations and [node-corelocation](https://github.com/tmcw/node-corelocation) for lat/long data. Suncalc is licensed under the BSD-2 Clause:

```
Copyright (c) 2014, Vladimir Agafonkin
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
