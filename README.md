# Project 4 - Natural Language Processing (NLP) based Emotions Analysis 

# Team Members
* Daniel Greener
* Denisse Ogata
* Jayashree Kotte
* Kelvin Ramos
* Maryam Najiarani

## Project Overview
The Emotion Classification dataset has been created to support investigations and explorations within the realm of natural language processing and the analysis of emotions. It encompasses a wide array of text samples, with each one tagged according to the emotion it expresses, spanning across emotions such as joy, enthusiasm, frustration, sorrow, and beyond.

The intention with this data is to build and train a model, to analyze text samples for various emotions and use them in many scenarios as listed below.

Usage Scenarios:
* Sentiment analysis
* Emotion classification
* Emotion-aware applications
* Customer feedback analysis
* Social media sentiment monitoring
* Chatbot and virtual assistant training

## Dataset 
The format of our dataset is a wide array of text samples and the emotions associated with each comment/text in csv file format. The data comprises of more than 5900 rows.

## Predictions 
1. Words associated with emotions 
2. How many times each word repeats with respect to different emotions
3. Words that can be associated with more than one emotion simultaneously

## Visualizations
Display data into different emotions and visualize them by percentages.

## Approaches: 
 classic approach:  Analyze and study the data based on the NLP tool decision tree/ngram that would be the prediction model to predict sentiment based on the given comments. This is going to be our classical approach. Which will show accuracy of the model and f1. Visualization : association between words and sentiments, word frequency.

 If it is possible (google Colab since it needs a large GPU to run) Train/fit a very small language model(BERT/T5) to learn the classification of sentiments using language models.

Openai approach: using Openai API to create without training language Model to make predictions. 

 Live Demo: Evaluation Testing the approaches live. User input → predict sentiments in a live mode and compare the performances. 
