from flask import Flask, jsonify

app = Flask(__name__)

# Define a simple endpoint
@app.route('/greeting', methods=['GET'])
def get_greeting():
    return jsonify({'message': 'Hello, welcome to the API!'})

if __name__ == '__main__':
    # Run the application on http://127.0.0.1:5000/
    app.run(debug=True)
