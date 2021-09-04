'use strict';

let shownStoriesMax = 5;
let storedStories = localStorage.getItem('storyText');
console.log(storedStories);
let storyArray = JSON.parse(localStorage.getItem('storyText'));

function displayStory(storyArray) {
  for (let i = 0; i < storyArray.length; i++) {
    if (i === shownStoriesMax) {
      break;
    }
    else {
      let table = document.getElementById('pastStories');
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = storyArray[i];
      tr.appendChild(td);
      table.appendChild(tr);
    }
  }
}

displayStory(storyArray);
