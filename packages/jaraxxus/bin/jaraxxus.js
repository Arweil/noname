#!/usr/bin/env node

const program = require('commander')

program
  .version('3.1.2')

program
  .command(`init`)
  .action(function (env, options) {
    console.log(`init`)
  })

program
  .command(`start`)
  .action(function (env, options) {
    require(`../webpack/webpack.dev.conf`)
  })

program
  .command(`build`)
  .action(function (env, options) {
    require(`../webpack/build`)
  })

program.parse(process.argv)
