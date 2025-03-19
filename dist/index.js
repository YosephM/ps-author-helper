"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorInfo = void 0;
exports.greet = greet;
exports.getAuthorContactInfo = getAuthorContactInfo;
exports.getModuleName = getModuleName;
function greet(name) {
    return 'Hi, ' + name + ' welcome to my course on declaration files!';
}
function getAuthorContactInfo() {
    return new AuthorInfo('Matthew', 'Kruczek', 'MCKRUZ');
}
function getModuleName(moduleNumber) {
    switch (moduleNumber) {
        case 1:
            return 'Introduction to My Course';
        case 2:
            return 'Declaration File Fundamentals';
        case 3:
            return 'Building a Declaration File';
        case 4:
            return 'Publishing Your Own Library';
        default:
            return 'No such module exists';
    }
}
class AuthorInfo {
    constructor(firstName, lastName, twitterHandle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.twitterHandle = twitterHandle;
    }
}
exports.AuthorInfo = AuthorInfo;
