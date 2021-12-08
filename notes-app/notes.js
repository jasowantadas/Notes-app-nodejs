const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((x) => x.title === title);
  const duplicateNotes = notes.find((x) => x.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Note Added !");
  } else {
    console.log("Note title already exist !!");
  }
  console.log(notes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const delNotes = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((x) => x.title !== title);
  if (newNotes.length === notes.length) {
    console.log("Note doesnt exist");
  } else {
    saveNotes(newNotes);
    console.log("Note deleted");
  }
};

const listNotes = () => {
  console.log("Your Notes");
  const notes = loadNotes();

  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((x) => x.title === title);
  if (duplicateNotes) {
    console.log(`TITLE : ${duplicateNotes.title}`);
    console.log(duplicateNotes.body);
  } else {
    console.log("Notes doesnt exist!!");
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNote,
  delNotes: delNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
