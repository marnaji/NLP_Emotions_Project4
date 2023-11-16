// script.js

$(document).ready(function() {
    $('#comment-form').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        const userInput = $('#user-input').val();

        if (userInput==""){
            const responseText = document.getElementById("response-text");
            responseText.textContent= 'Error No Comment was provided' 

            const sentimentExplanation = document.getElementById("sentiment-explanation");
            sentimentExplanation.textContent= ''

            const sentimentResponse = $('#sentiment-response');
            sentimentResponse.find('span').hide(); // Hide all emojis

        }
        else

        // Send the user input to the server for sentiment analysis
        $.post('/sentiment', { user_input: userInput }, function(data) {
            
            console.log(data.sentiment)
            
            // Split the response text into sentiment and explanation
            const responseParts = data.sentiment.split('\n');
            console.log(responseParts)
            
            let sentiment=''
            let explanation = ''            

            if (responseParts.length === 2) {
                sentiment = responseParts[0]
                explanation = responseParts[1]

                const responseText = document.getElementById("response-text");
                responseText.textContent= 'sentiment : ' + sentiment

                const sentimentExplanation = document.getElementById("sentiment-explanation");
                sentimentExplanation.textContent= explanation

                 
            } else {
                const responseText = document.getElementById("response-text");
                responseText.textContent= 'Error No Comment was provided' 

            }
           
            
            
            const sentimentResponse = $('#sentiment-response');
            sentimentResponse.find('span').hide(); // Hide all emojis

           
            if (sentiment == 'joy') {
                // Show the joy emoji
                $('#joy-emoji').show();
            } else if (sentiment == 'anger') {
                // Show the anger emoji
                $('#anger-emoji').show();
            } else {
                // Show the fear emoji
                $('#fear-emoji').show();
            }
            
            
        });
    });
});
