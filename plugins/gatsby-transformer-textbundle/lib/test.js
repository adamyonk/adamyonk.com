"use strict";

/* eslint-disable no-console */
const {
  parse
} = require("./parse");

const run = async () => {
  const test = "/Users/adam/Library/Mobile Documents/X5AZV975AG~com~soulmen~ulysses3/Documents/Library/Groups-ulgroup/9386d9bf431241cb83264fb6d665e795-ulgroup/65a7ffe4ec0f4021b7d5626f9f98a1b3.ulysses";
  console.log((await parse(test)));
};

run();