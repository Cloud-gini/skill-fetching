#from flask import Flask, request, jsonify
#from youtube_transcript_api import YouTubeTranscriptApi
#from flask_cors import CORS

#pp = Flask(__name__)
#CORS(app)  # Allow frontend to talk to backend

#@app.route('/get-skills', methods=['POST'])
#def get_skills():
 #   data = request.get_json()
  #  video_id = data.get('videoId')

#    try:
 #       transcript = YouTubeTranscriptApi.get_transcript(video_id)
  #      full_text = " ".join([entry['text'] for entry in transcript])

   #     subskills = ["variables", "lists", "tuples", "functions", "loops", "OOP", "recursion"]
    #    found = [skill for skill in subskills if skill.lower() in full_text.lower()]

     #   return jsonify({'skills': found})
    #except Exception as e:
     #   return jsonify({'error': str(e)}), 400

#if __name__ == '__main__':
 #   app.run(debug=True)

from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get-skills', methods=['POST'])
def get_skills():
    data = request.get_json()
    video_id = data.get('videoId')

    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        full_text = " ".join([entry['text'] for entry in transcript])

        subskills = [
    "variables", "lists", "tuples", "functions", "methods", "loops",
    "for loop", "while loop", "object oriented", "classes", "inheritance", "recursion"
]

        found = [skill for skill in subskills if skill.lower() in full_text.lower()]

        return jsonify({'skills': found})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# 🧨 THE MAGIC PIECE THAT’S LIKELY MISSING:
if __name__ == '__main__':
    print("Flask is running on http://127.0.0.1:5000/")
    app.run(debug=True)

