[![Build Status](https://travis-ci.org/stevegood/xwing-data-module.svg?branch=master)](https://travis-ci.org/stevegood/xwing-data-module)
[![npm version](https://badge.fury.io/js/xwing-data-module.svg)](https://badge.fury.io/js/xwing-data-module)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/855a3f9793b346f69d3dbf4dcfb0e23f)](https://www.codacy.com/app/sgood/xwing-data-module?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stevegood/xwing-data-module&amp;utm_campaign=Badge_Grade)

# xwing-data-module
xwing-data packaged as modules

This package creates a module accessible version of the data directory in the [xwing-data](https://github.com/guidokessels/xwing-data) package.

## Installation

_**Yarn:**_ `yarn add xwing-data-module`

_**NPM:**_ `npm install --save xwing-data-module`

## Usage

The following keys are available from the `xwing-data-module` package. They all contain arrays of objects.

```javascript
data, {                     // all sub-arrays
  conditions,               // conditions
  damageDeckCore,           // damage deck from the core set
  damageDeckCoreTFA,        // damage deck from the force awakens core set
  damageDeckRebelTransport, // damage deck from the rebel transport expansion
  pilots,                   // pilots
  referenceCards,           // reference cards
  ships,                    // ships
  sources,                  // expansions
  upgrades                  // upgrades
}
```

*Require:*

```javascript
var data = require('xwing-data-module')
```

_or_

```javascript
var ships = require('xwing-data-module').ships
```

*Import:*

```javascript
import data from 'xwing-data-module'
```

_or_

```javascript
import { ships } from 'xwing-data-module'
```

## Projects using the xwing-data-module package

- [Tython](https://github.com/stevegood/tython): Backend application for [Deep Core](https://github.com/stevegood/deep_core)
- (Add your project via a PR or submit an issue)