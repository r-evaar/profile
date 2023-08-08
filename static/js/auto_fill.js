function getTag(text, character) {
    const firstIndex = text.indexOf(character);
    
    if (firstIndex !== -1) {
      const secondIndex = text.indexOf(character, firstIndex + 1);
      return [text.substring(firstIndex+1, secondIndex), secondIndex+1];
    } else {
        throw "Invalid note format"
    }
}

function processParagraphForTags(paragraph) {
    // Define a map of special characters and their corresponding HTML entities
    const tags = {
      'B': 'subtitle',
      'P': 'postscript',
      'A': 'author'
    };

    const firstChar = paragraph[0];
    const element = document.createElement('p');

    var processedParagraph = "";
    if (firstChar != '~'){
        processedParagraph = paragraph;
    } else {
        const res = getTag(paragraph, '~');
        const tag = res[0];
        const idx = res[1];
        processedParagraph = paragraph.slice(idx)
        element.classList.add(tags[tag])
    }

    element.textContent = processedParagraph;
    return element;
  }

// Function to load and display paragraphs from a text file
async function loadParagraphsFromFile(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to load file: ${response.statusText}`);
      }
  
      const text = await response.text();
      const paragraphs = text.split('\n'); // Assuming paragraphs are separated by two newline characters
  
      const paragraphsContainer = document.getElementById('note-text');
      paragraphs.forEach(paragraph => {
        paragraphElement = processParagraphForTags(paragraph);
        paragraphsContainer.appendChild(paragraphElement);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
fetch('static/assets/note/config.json')
  .then(response => response.json())
  .then(data => {
    const anchor = document.querySelector('#paper > header > h2');
    anchor.textContent = data['title'];
    loadParagraphsFromFile('static/assets/note/note.txt');
  })
  .catch(error => {
    // throw error;
    console.log('Note unavailable');
});

