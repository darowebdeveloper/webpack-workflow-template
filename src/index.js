// Get the file and run the file but does not share variable scope in the imported file...
// To do we need to export the variables so the importing file can access
// import './dom';
import {styleBody, addTitle, contact } from './dom';
// When import defautl no need curly braces {  } and with any name
import users, { getPremUsers } from "./data";

console.log('index.js file')
addTitle("Learning webpack from dom.js file");
addTitle('Test');

styleBody();
console.log(contact);
console.log(users);
console.log(getPremUsers(users));