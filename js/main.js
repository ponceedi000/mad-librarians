'use strict';

let main = document.querySelector('main');

function chosenStory(event) {
  let storyName = event.target.getAttribute('id');
  console.log(storyName);
  storeAStory(storyName);
}

function storeAStory(storyName) {
  localStorage.setItem('chosenStory', storyName);
}

main.addEventListener('click', chosenStory);
