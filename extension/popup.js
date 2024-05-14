document.addEventListener('DOMContentLoaded', function () {
   const grabTextBtn = document.getElementById('grabTextBtn');
   const confirmTextBtn = document.getElementById('confirmTextBtn');
   const pasteTextArea = document.getElementById('pasteTextArea');
   const speakerSelection = document.getElementById('speaker');

   grabTextBtn.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
         chrome.scripting.executeScript(
            {
               target: { tabId: tabs[0].id },
               function: readMainArticle,
            },
            function (results) {
               if (chrome.runtime.lastError) {
                  console.error('Error: ' + chrome.runtime.lastError.message);
               } else {
                  pasteTextArea.value = results[0].result;
               }
            }
         );
      });
   });

   confirmTextBtn.addEventListener('click', function () {
      const text = pasteTextArea.value;
      const speaker = speakerSelection.value;
      const language = 'en'; // Replace with the desired language

      fetch('http://localhost:5000/generate-audio', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: `text=${encodeURIComponent(text)}&speaker=${encodeURIComponent(speaker)}&language=${encodeURIComponent(language)}`,
      })
         .then(response => response.blob())
         .then(blob => {
            const audioUrl = URL.createObjectURL(blob);
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = audioUrl;
            audioPlayer.play();
         })
         .catch(error => {
            console.error('Error:', error);
         });
   });
});

function readMainArticle() {
   const articleElement = document.querySelector('article, main, .article, .main-content');
   let mainArticleText = '';

   if (articleElement) {
      const textElements = articleElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, dt, dd');
      for (const textElement of textElements) {
         mainArticleText += textElement.innerText + '\n';
      }
   }

   if (mainArticleText.trim() !== '') {
      return mainArticleText;
   } else {
      return 'No main article text found.';
   }
} 