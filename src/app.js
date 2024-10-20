/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  window.onload = function() {
    let pronoun = ["the", "our", "his"];
    let adj = ["great", "big", "small", "kind"];
    let noun = ["jogger", "racoon", "tiger", "man"];
    let dom = [".com", ".org", ".es", ".io"];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            console.log(pronoun[i] + adj[j] + noun[k] + dom[l]);
          }
        }
      }
    }
  };
};
