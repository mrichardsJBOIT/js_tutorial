// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}



function emailParts(email) {
  return email.split("@")
}


//define a Phrase Object
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  //Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }

  this.louder = function louder() {
    return this.processedContent().toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

}

// defines a transalted object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
