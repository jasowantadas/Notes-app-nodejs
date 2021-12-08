const validator = require("validator");
const fs = require("fs");
const Notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");
//Add Note
yargs.command({
  command: "add",
  describe: "It Adds a note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    Notes.addNotes(argv.title, argv.body);
  },
});
//Delete Note
yargs.command({
  command: "remove",
  describe: "It removes a note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    Notes.delNotes(argv.title);
  },
});
//Listing Notes
yargs.command({
  command: "list",
  describe: "It Lists the node ",
  //builder: {},
  handler: function (argv) {
    Notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read the node ",
  builder: {
    title: {
      describe: "Title of which you want to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    Notes.readNotes(argv.title);
  },
});
yargs.parse();
