'use strict';

let stories = [];

if (localStorage.getItem('storyText')) {
  stories = JSON.parse(localStorage.getItem('storyText'));
}


let storyText = '';
let storedTerms = localStorage.getItem('storyTerms');
let termsArray = JSON.parse(storedTerms);
console.log(termsArray);

function createStarWarsStory(array) {
  let storyText = `The Power of the Force\n  The Force is a mystical ${array[0]} power. As Jedi Master, Obi-Wan Kenobi once said, “The Force is an energy field, created by all living ${array[1]}, that surrounds us, penetrates us, and binds the ${array[2]} together.” Using the power of the force, a Jedi can do many ${array[3]} things, like using the Force to exercise ${array[4]} control over ${array[5]}-minded ${array[6]}. A jedi can also use the Force to move objects with his or her ${array[7]}. It doesn’t matter how ${array[8]} these objects are; it only matters how ${array[9]} the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke ${array[10]}.`;
  stories.unshift(storyText);
  return storyText;
}

function createMonsterIncStory(array) {
  let storyText = `After years of using screams to fuel power creation, Monster, Inc. has decided to switch to ${array[0]}. Mike and Sully, the top scarers of Monsters, Inc. are having a hard time with this transition. Mike has tried ${array[1]} on ${array[2]} while holding a ${array[3]} to get the children ${array[4]} but it just wouldn't work. Mike was ${array[5]} to try something new. He only knew how to get children to scream with his ${array[6]} ${array[7]}. After ${array[8]}, Mike and Sully were able to create the fuel needed to run their ${array[9]}.`;
  stories.unshift(storyText);
  return storyText;
}

function createHorrorStory(array) {
  let storyText = `Yesterday, I was ${array[0]} on the street. I saw a ${array[1]} house with ${array[2]} windows. I went inside. Suddenly, the door blasted open! I was very ${array[3]}. Then, a masked ${array[4]} ${array[5]} me! I ${array[6]} the masked figure in the ${array[7]}. I ${array[8]} the masked figure and ran outside......until he ${array[9]} me....Am I dead or alive?`;
  stories.unshift(storyText);
  return storyText;
}

function createHarryPotterStory(array) {
  let storyText = `Once there was a young ${array[0]} named Harry Potter. Harry lived with his aunt, uncle and his ${array[1]} cousin Dudley on Pivot Drive. One day, a ${array[2]} came with a letter for Harry which read "Dear Mr. Potter, we are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardry. Please find an enclosed list of all necessary books and equipment." Harry was ${array[3]} and his suspicions were true, he really was a ${array[4]} wizard after all!
  Harry read on to the second page with requirements, which says: First-year students will require:\n
  1. Three sets of plain work ${array[5]}.\n 2. One ${array[6]} hat for day wear.\n 3. One pair of protective ${array[7]}.\n 4. One winter cloak (black, with silver fastenings).\n\n Please note that all pupil's clothes should carry ${array[8]} tags. Harry couldn't wait to learn ${array[9]} magic.`;
  stories.unshift(storyText);
  return storyText;
}

function createAvengersStory(array) {
  let storyText = `With a sudden jolt, the Avengers' meeting location turned upside down! Captain America gave a startled ${array[0]} and grabbed for his shield. "Everyone find something to hold on to," Iron Man said, firing his ${array[1]} jets. The Black Widow wrapped her arms around a/an ${array[2]}, and Hawkeye shot a suction-cup ${array[3]} and rope at the wall. "I feel sick to my ${array[4]}," Thor said with a loud groan. "Yeah, my ${array[5]} doesn't feel so great," the Black Widow said. "I feel it, too, but it seems the room is ${array[6]}!" said Iron Man. Thor cried out, "This seems like my ${array[7]} brother Loki's doing!" And with that, the god of ${array[8]} slammed his hammer on the ground. There was a loud crash and a bright light, and suddenly the room went back to normal. "We must always be on guard against Loki's ${array[9]} magic!" Thor warned.`;
  stories.unshift(storyText);
  return storyText;
}

function createPiratesStory(array) {
  let storyText = `Yarrrrrg. The seas are ${array[0]} this sunny morning. There is ${array[1]}, ripe for the taking. Pirates are free to ${array[2]} what they want from whoever they ${array[3]}. Anyone who ${array[4]} to ${array[5]}, will ${array[6]} the plank. The pirate's life has no room for ${array[7]} people. Now ${array[8]} the sails and raise the ${array[9]}. We're off on an adventure!`;
  stories.unshift(storyText);
  return storyText;
}

function renderStory(id, text) {
  let container = document.getElementById(id);
  let p = document.createElement('p');
  p.textContent = text;
  container.appendChild(p);
}

if (localStorage.getItem('chosenStory') === 'starwars'){
  storyText = createStarWarsStory(termsArray);
  renderStory('story', storyText);
} else if (localStorage.getItem('chosenStory') === 'monstersInc') {
  storyText = createMonsterIncStory(termsArray);
  renderStory('story', storyText);
} else if (localStorage.getItem('chosenStory') === 'horror') {
  storyText = createHorrorStory(termsArray);
  renderStory('story', storyText);
} else if (localStorage.getItem('chosenStory') === 'harryPotter') {
  storyText = createHarryPotterStory(termsArray);
  renderStory('story', storyText);
} else if (localStorage.getItem('chosenStory') === 'avengers') {
  storyText = createAvengersStory(termsArray);
  renderStory('story', storyText);
} else if (localStorage.getItem('chosenStory') === 'pirates') {
  storyText = createPiratesStory(termsArray);
  renderStory('story', storyText);
}

let section = document.querySelector('section');

function storedStory(event){
  console.log('hello world');
  let stringifyStories = JSON.stringify(stories);
  localStorage.setItem('storyText', stringifyStories);
}

section.addEventListener('click', storedStory);
