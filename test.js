/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
    'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
    'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
    'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
  ];
  
  function result(sentences) {
    // your code here
    let maximumWord = 0;
    
    //split the words using whitespace
    for (let sentence of sentences) {
  /*   	const wordCount = sentence.split('').length; */
      const wordCount = sentence.trim().split(/\s+/).length;
         // update maximumwiord if current sentench contain more words
      if (wordCount > maximumWord) {
          maximumWord = wordCount;
      }
    }
    return maximumWord;
  }
  
  console.log(result(sentences));