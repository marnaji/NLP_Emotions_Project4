#dependencies
from flask import Flask, request, render_template, jsonify
from openAIkey import openAI_key
from openai import OpenAI

# Create an OpenAI client by providing an API key
client = OpenAI(
    # Defaults to os.environ.get("OPENAI_API_KEY")
     api_key=openAI_key
)

def getSentiment(user_input):
    # Construct a prompt for sentiment classification and explanation generation
    prompt= f"Please classify the sentiment in the following text as either 'fear', 'anger' or 'joy' and provide some explanation. return the sentiment on the first line and its explanation on the second line.\n\n{user_input}'\n\nSentiment: "
    # Use the OpenAI GPT-3.5 Turbo model to generate a response based on the prompt
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": prompt}
    
            ]
        )

    return response.choices[0].message.content  
# Initialize a Flask application
app = Flask(__name__)

# Define a route for the home page ('/')
# Supports both GET and POST methods
@app.route('/', methods=['GET', 'POST'])
def index():
    # Render the 'index.html' template
    return render_template('index.html')

# Define a route for sentiment analysis
# Supports only POST method
@app.route('/sentiment', methods=['POST'])
def analyze_sentiment():
    user_input = request.form['user_input']
    sentiment =getSentiment(user_input)
    print("inside sentiment endpoint", sentiment)
    return jsonify({'sentiment': sentiment})

# Function to initialize OpenAI (currently empty)
def initOpenAI():
    pass

# Main entry point
if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
