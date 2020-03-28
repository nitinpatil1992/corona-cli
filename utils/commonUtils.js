const chalk = require('chalk');
const sym = require('log-symbols');

const dim = chalk.dim;
const red = chalk.red;
const DATE_CHAR = 8;

let validateDateFormat = function(inputDate) {
    var inputDateLength = inputDate.length
    if (inputDateLength != DATE_CHAR) {
        return false
    }
    for(index=0; index<inputDateLength; index++) {
         if (inputDate[index] < '0' ||  inputDate[index] > '9') {
            return false
         }
    }
    return true
}

let throwError = function(error) {
    switch(error.type) {
        case "OPTIONS_VALIDATION":
            console.log(
                `${red(
                    `${sym.error} Options validation failed.${error.message}`
                )}\n`
            );
            break;
        default:
            console.log(
                `${sym.info} ${dim(
                    `Error format is wrong`
                )}`
            ); 
    }
}

module.exports.validateDateFormat = validateDateFormat
module.exports.throwError = throwError