const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const specialCases = {
  'stopPropagation': 'StopPropagation',
  'preventDefault' :'PreventDefault',
  'NaN': 'NaN'
};

function titleCased() {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');
    const titleCasedWords = words.map(word => {
      if (specialCases[word]) {
        return specialCases[word];
      } else if (word === word.toUpperCase()) {
        return word;
      } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    return titleCasedWords.join(' ');
  });
}