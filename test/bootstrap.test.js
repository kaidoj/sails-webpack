const _ = require('lodash');
const Sails = require('sails');
const path = require('path');
const hookConfig = require('../config/webpack');
let sails;

before(function (done) {
  this.timeout(30000);

  var config = {
    port: 12345,
    appPath: path.resolve(__dirname, '..'),
    hooks: {
      grunt: false
    },
    log: {
      level: 'error'
    },
    webpack: {
      options: {
        entry: {
          app: './index.js'
        }
      }
    }
  }

  Sails.lift(config, (err, server) => {
    if (err) return done(err);

    global.sails = server;
    done(err, sails);
  });

});

after(function(done) {
  global.sails.lower(done);
});
