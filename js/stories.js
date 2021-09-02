'use strict';

function Story(storyName, termsArray) {
  this.storyName = storyName;
  this.termsArray = termsArray;

}

let pirateStory = new Story (
  'pirates',
  ['adjective','object','noun','body sense', 'verb ending in s', 'verb', 'verb', 'adjective','verb', 'object']
);

console.log (pirateStory);