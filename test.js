const expect = require('expect.js');
const checkEnv = require('./index');

describe('check-env', function() {
  before(function() {
    process.env.CONFIGURED_VAR = 'value';
  });

  it('should return the unset envs in callback', function() {
    checkEnv(['CONFIGURED_VAR', 'OTHER_VAR'], (unsetVars) => {
      expect(unsetVars).to.eql(['OTHER_VAR']);
    });
  });

  it('should return the vars and values in callback', function() {
    checkEnv(['CONFIGURED_VAR', 'OTHER_VAR'], (unsetVars, varsAndValues) => {
      expect(varsAndValues, [
        {'CONFIGURED_VAR': 'value'},
        {'OTHER_VAR': 'NOT_SET'},
      ]);
    });
  });
});
