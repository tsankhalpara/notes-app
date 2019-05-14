(function(exports) {

  function testReturnsHTML() {
    var notelistview = new NoteListView();
    notelistview.notelist.addNote("1");
    notelistview.notelist.addNote("2");
    var htmlString = "<ul><li><div>1</div></li><li><div>2</div></li></ul>"

    if (notelistview.printHTML() !== htmlString) {
      throw new Error("HTML is not correct");
    }
    else {
      console.log("Returns HTML: Clear")
    }
  };

  testReturnsHTML();
})(this);
