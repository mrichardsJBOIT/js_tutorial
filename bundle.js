(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mrichardsjboit-palindrome");

let string = prompt("Please enter a string for palindrome testing:");


let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome!`);
}

},{"mrichardsjboit-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//Add reverse to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Add a blank check to each string
String.prototype.blank = function blank() {
  if ( this.length === 0 || this.match(/^\s+$/gm)) {
    return true;
  }
  return false;
}

//Add a last to arrays
Array.prototype.last = function last() {
  return this.slice(-1);
}

function emailParts(email) {
  return email.split("@")
}

//define a Phrase Object
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  //Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // returns letters of the contents
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.louder = function louder() {
    return this.processedContent().toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

}

},{}]},{},[1]);
