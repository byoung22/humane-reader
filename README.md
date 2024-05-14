# Humane Reader Chrome Extension
The Humane Reader Chrome Extension is an AI-powered tool that generates natural-sounding speech from text using state-of-the-art text-to-speech technology. With this extension, you can easily grab text from any webpage and convert it into high-quality audio, making it convenient for users who prefer listening to content rather than reading it.

## Features

* Seamless text extraction from webpages: Simply click the "Grab Text from Page" button, and the extension will automatically extract the main article text from the current webpage.
* Wide range of AI-generated voices: Choose from a diverse selection of male and female voices across different languages and accents to personalize your listening experience.
* Real-time audio generation: Once you have selected the desired voice and confirmed the text, the extension generates the audio file on the fly using a Flask server and advanced text-to-speech models.
* Easy-to-use interface: The extension provides a user-friendly popup interface where you can select the voice, view the extracted text, and generate the audio with just a few clicks.

### Technologies Used

* Chrome Extension API: The extension leverages the Chrome Extension API to interact with the browser, extract text from webpages, and provide a seamless user experience.
* Flask: The backend server is built using Flask, a lightweight web framework for Python, to handle the audio generation requests from the extension.
* TTS (Text-to-Speech) Library: The extension utilizes the TTS library, which offers a collection of pre-trained text-to-speech models capable of generating natural-sounding speech in multiple languages and voices.
* HTML/CSS/JavaScript: The extension's user interface is built using HTML, CSS, and JavaScript, providing an intuitive and responsive experience for users.

# Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yourusername/humane-reader.git
   ```
2. Install the required dependencies for the Flask server
   ```sh
   pip install TTS
   ```
3. Run the Flask server: python server.py
   ```sh
   python server.py
   ```
4. Load the extension in Chrome
5. Open the Chrome browser and navigate to chrome://extensions.
6. Enable the "Developer mode" toggle switch located in the top right corner.
7. Click on the "Load unpacked" button and select the directory containing the extension files.
   
The Humane Reader extension should now be available in your Chrome browser.

## Usage

1. Navigate to a webpage containing the text you want to convert to speech.
2. Click on the Humane Reader extension icon in the Chrome toolbar to open the popup.
3. Click the "Grab Text from Page" button to extract the main article text from the webpage or copy and paste your own text.
4. Select the desired voice from the dropdown menu.
5. Click the "Generate Sound" button to initiate the audio generation process.
6. Once the audio is generated, it will automatically start playing in the extension popup.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
## License
This project is licensed under the MIT License.
## Contact
For any inquiries or feedback, please contact baileywyoung@gmail.com
