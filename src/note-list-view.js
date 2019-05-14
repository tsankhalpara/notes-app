(function(exports) {
  function NoteListView(notelist = new NoteList()) {
    this.notelist = notelist;
  };

  NoteListView.prototype.printHTML = function () {
    var html = "<ul>"
    this.notelist.seeList().forEach(function(note) {
      html += "<li><div>" + note + "</div></li>"
    })
    html += "</ul>"
    return html
  };

  exports.NoteListView = NoteListView;
})(this);
