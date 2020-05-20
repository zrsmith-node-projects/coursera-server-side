#!/usr/bin/env node

"use strict";
const util = require("util");
const path = require("path");
const fs = require("fs");
const getStdin = require("get-stdin");

let args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  // let filepath = path.resolve(args.file)
  // console.log(__dirname);
  // console.log(filepath);
  processFile(path.resolve(args.file));
} else {
  error("Incorrect usage.", true);
}

// **************

function processFile(filepath) {
  // let contents = fs.readFileSync(filepath); // can use (filepath, 'utf8') if we want a string to return
  fs.readFile(filepath, (err, contents) => {
    if (err) {
      error(err.toString());
    } else {
      contents = contents.toString().toUpperCase();
      process.stdout.write(contents);
    }
  });
  // console.log(contents);
  // process.stdout.write(contents);
}

function error(msg, includesHelp = false) {
  console.error(msg);
  if (includesHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex01 usage:");
  console.log("  ex01.js --file={FILENAME");
  console.log("");
  console.log("--help             print this help");
  console.log("--file={FILENAME}  process the file");
  console.log("");
}
