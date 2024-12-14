import {addUser} from "./userManager.js";
import {removeUser} from "./userManager.js";
import {findUser} from "./userManager.js";

let uzytkownicy = [];

addUser(uzytkownicy, "adamMlysz")
addUser(uzytkownicy, "JanPawel")
addUser(uzytkownicy, "kacperK")
addUser(uzytkownicy, "adamMlysz")
console.log(uzytkownicy);
removeUser(uzytkownicy,2)
console.log(uzytkownicy);
findUser(uzytkownicy,1)
