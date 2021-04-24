var franc = require("franc");
var langs = require("langs");
var colors = require("colors");

let userInput = process.argv[2];
let langCode = franc.all(userInput)[0][0];

// console.log(`your 3 digit is: ${langDigit}`);
// console.log(yourLang)

if (langCode === "und") {
    console.log("Could not match a language. Please try again with a larger sample".red)
} else {
    let yourLang = langs.where("3", langCode).name;
    console.log(`Our best guess is: ${yourLang.green}`);
}

