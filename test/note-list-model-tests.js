(function(exports) {
  function testReturnsList() {
    var notelist = new NoteList();

    if (notelist.list.length !== 0) {
      throw new Error("List is not correct");
    }
    else {
      console.log("Returns List: Clear")
    }
  };

  testReturnsList();
})(this);
