from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

# Configure your Gemini API key
genai.configure(api_key="YOUR_GEMINI_API_KEY")

app = Flask(__name__)
CORS(app) # This allows your frontend to connect

# Set up the Gemini model
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

@app.route('/api/chat', methods=['POST'])
def chat_with_gemini():
    data = request.json
    user_message = data.get('message')

    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    try:
        response = chat.send_message(user_message)
        # You may need to access the text property of the response
        chatbot_response = response.text
        return jsonify({'response': chatbot_response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)