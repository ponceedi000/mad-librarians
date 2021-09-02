'use strict';

function Story(storyName, termsArray) {
  this.storyName = storyName;
  this.termsArray = termsArray;

}

let pirateStory = new Story (
  'pirates',
  ['Adjective','Object','Noun','Body Sense', 'Verb Ending In S', 'Verb', 'Verb', 'Adjective','Verb', 'Object']
);

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

formBuilder(pirateStory.name, pirateStory.termsArray);