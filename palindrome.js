//Add revers to all strigs
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank() {
  if ( this.length === 0 || this.match(/^\s+$/gm)) {
    return true;
  }
  return false;
}

function emailParts(email) {
  return email.split("@")
}

Array.prototype.last = function last() {
  return this.slice(-1);
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
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder() {
    return this.processedContent().toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

}
