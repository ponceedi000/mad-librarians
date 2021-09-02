'use strict';

let storyToRender = null;

let stories = [];

function Story(storyName, termsArray) {
  this.storyName = storyName;
  this.termsArray = termsArray;

}

stories.push(new Story (
  'pirates',
  ['Adjective','Object','Noun','Body Sense', 'Verb Ending In S', 'Verb', 'Verb', 'Adjective','Verb', 'Object']
));

stories.push(new Story (
  'starwars',
  ['Adjective','Plural Noun', 'Noun', 'Adjective', 'Part of the Body', 'Adjective', 'Plural Noun', 'Part of the Body', 'Adjective', 'Adverb', 'Noun']
));

stories.push(new Story (
  'monstersInc',
  ['Noise Made With Your Body', 'Verb Ending in -ing', 'Noun', 'Noun', 'Noise Made With Your Body', 'Feeling', 'Adjective','Part of the Body','Period of Time', 'Object']
));

stories.push(new Story (
  'avengers',
  ['Verb','Noun','Noun','Noun','Part of Body','Part of Body','Adjective', 'Adjective', 'Noun', 'Adjective']
));

stories.push(new Story (
  'harryPotter',
  ['Noun', 'Adjective', 'Animal', 'Adjective', 'Adjective', 'Noun', 'Noun', 'Noun', 'Noun', 'Noun']
));

stories.push(new Story (
  'horror',
  ['Verb Ending in -ing', 'Adjective', 'Adjective', 'Adjective', 'Noun', 'Verb Ending in -ed', 'Verb Ending in -ed', 'Part of Body', 'Verb Ending in -ed', 'Verb Ending in -ed']
));
//console.log (pirateStory);

function formBuilder(name, termsArray) {
  let form = document.getElementById('storyForm');
  let label = document.createElement('label');
  label.textContent = name;
  form.appendChild(label);

  for (let i = 0; i < termsArray.length; i++) {
    let label = document.createElement('label');
    label.setAttribute('for', termsArray[i]);
    label.textContent = termsArray[i];
    form.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', termsArray[i]);
    input.setAttribute('name', termsArray[i]);
    form.appendChild(input);
  }
  let button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.textContent = 'Create Story';
  form.appendChild(button);
}

let storyChosen = localStorage.getItem('chosenStory');

for (let i=0; i < stories.length; i++) {
  if (stories[i].storyName === storyChosen) {
    storyToRender = stories[i];
  }
}

formBuilder(storyToRender.name, storyToRender.termsArray);
