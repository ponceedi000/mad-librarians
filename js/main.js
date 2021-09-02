'use strict';

let section = document.querySelector('section');

function chosenStory(event) {
  let storyName = event.target.getAttribute('id');
  console.log(storyName);
  storeAStory(storyName);
}

function storeAStory(storyName) {
  localStorage.setItem('chosenStory', storyName);
}

section.addEventListener('click', chosenStory);