from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this line

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all routes

@app.route('/bfhl', methods=['POST'])
def post_endpoint():
    data = request.get_json()
    if not data or 'data' not in data:
        return jsonify({"is_success": False, "message": "Invalid input"}), 400

    data_list = data['data']

    numbers = [item for item in data_list if item.isdigit()]
    alphabets = [item for item in data_list if item.isalpha()]
    highest_lowercase_alphabet = []

    lowercase_alphabets = [ch for ch in alphabets if ch.islower()]
    if lowercase_alphabets:
        highest_lowercase_alphabet = [max(lowercase_alphabets)]

    return jsonify({
        "is_success": True,
        "user_id": "sayan__280",
        "email": "sayan.sahu2021@vitstudent.ac.in",
        "roll_number": "21BCE0547",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highest_lowercase_alphabet
    })






@app.route('/bfhl', methods=['GET'])
def get_endpoint():
    return jsonify({
        "operation_code": 1
    })

if __name__ == '__main__':
    app.run(debug=True)
