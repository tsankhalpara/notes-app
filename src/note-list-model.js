(function(exports) {
  function NoteList() {
    this.list = [];
  };

  exports.NoteList = NoteList;
})(this);

  NoteList.prototype.addNote = function (text) {
    this.list.push(text);
  };

  NoteList.prototype.seeList = function () {
    return this.list;
  };
