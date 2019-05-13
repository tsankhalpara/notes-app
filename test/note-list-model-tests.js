(function(exports) {
  function testInitializeList() {
    var notelist = new NoteList();

    if (notelist.list.length !== 0) {
      throw new Error("List is not correct");
    }
    else {
      console.log("Initialize List: Clear")
    }
  };

  function testAddNoteToList() {
    var notelist = new NoteList();
    notelist.addNote("Favourite drink: seltzer");
    if (notelist.list.includes("Favourite drink: seltzer" !== true) ) {
      throw new Error("Note not added to list");
    }
    else {
      console.log("Add note to list: Clear")
    }
  };

  function testSeeCurrentList() {
    var notelist = new NoteList();
    notelist.addNote("Favourite drink: seltzer");
    if (notelist.seeList() !== notelist.list) {
      throw new Error("List does not match");
    }
    else {
      console.log("See current list: Clear")
    }
  };

  testInitializeList();
  testAddNoteToList();
  testSeeCurrentList();
})(this);
