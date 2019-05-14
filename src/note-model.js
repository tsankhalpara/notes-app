(function(exports) {
  function Note(text) {
    this.text = text;
  };

  exports.Note = Note;
})(this);

Note.prototype.print = function () {
  return this.text;
};
