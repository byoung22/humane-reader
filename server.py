import torch
from TTS.api import TTS
from flask import Flask, request, send_file
from io import BytesIO

app = Flask(__name__)

# Get device
device = "cuda" if torch.cuda.is_available() else "cpu"

# Init TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

@app.route('/generate-audio', methods=['POST'])
def generate_audio():
   text = request.form['text']
   speaker = request.form['speaker']
   language = request.form['language']

   # Create a BytesIO object to store the WAV data
   wav_file = BytesIO()
   tts.tts_to_file(text=text, speaker=speaker, language=language, file_path=wav_file)
   wav_file.seek(0)

   # Send the WAV file as a response
   return send_file(wav_file, mimetype='audio/wav')

if __name__ == '__main__':
   app.run()

# Text to speech to a file
# tts.tts_to_file(text="Hello world!", speaker="Annmarie Nele", language="en", file_path="output.wav")