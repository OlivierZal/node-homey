'use strict';

const open = require('open');
const colors = require('colors');
const { Log } = require('../..');

exports.desc = 'Open Homey Developer Tools';
exports.handler = async yargs => {
  try {
    const url = 'https://tools.developer.homey.app';
    Log(colors.green(`✓ Opening URL: ${url}`));
    await open(url);
    process.exit(0);
  } catch (err) {
    Log(colors.red(err.message));
    process.exit(1);
  }
};
