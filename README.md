# check-env-config
Checks whether all the required env-vars are set in the deployment environment

## Install

```sh
$ npm install --save check-env-config
```


## Usage

```js
var checkEnv = require('check-env-config');

checkEnv(['REQUIRED_VAR1', 'REQUIRED_VAR2'], (unsetVars, varsAndValues) => {
  console.log(unsetVars)
  console.log(varsAndValues)
});
```
