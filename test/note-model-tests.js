(function(exports) {
  function testSavesTextToVariable() {
    var note = new Note("It is a test note");

    if (note.text !== "It is a test note") {
      throw new Error("Error: Does not match");
    }
    else {
      console.log("Saves text to variable: Clear")
    }
  };

  function testReturnsText() {
    var note = new Note("My favourite language is JavaScript");

    if (note.print() !== "My favourite language is JavaScript") {
      throw new Error("Text is not correct");
    }
    else {
      console.log("Returns Text: Clear")
    }
  };

  testSavesTextToVariable();
  testReturnsText();
})(this);
