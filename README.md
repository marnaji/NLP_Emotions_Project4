# Project 4 - Natural Language Processing (NLP) based Emotions Analysis 

# Team Members
* Daniel Greener
* Denisse Ogata
* Jayashree Kotte
* Kelvin Ramos
* Maryam Najiarani

## Project Overview
The Emotion Classification dataset has been created to support investigations and explorations within the realm of natural language processing(NLP) and the analysis of emotions. It encompasses a wide array of text samples, with each one tagged according to the emotion it expresses, spanning across emotions such as joy, enthusiasm, frustration, sorrow, and beyond.

The intention with this data is to build and train a model, to analyze text samples for various emotions and use them in many scenarios as listed below.

Usage Scenarios:
* Sentiment analysis
* Psychological Prediction based on Patient Comments
* Customer Satisfaction Analysis (eg. Amazon reviews)
* Social Media Sentiment Monitoring
* Chatbot and Virtual Assistant Training

## Dataset 
The format of our dataset is a wide array of text samples and the emotions associated with each comment/text in csv file format. The data comprises of more than 5900 rows , and The sentiment data is distributed as follows: Fear 32.6%, Anger 33.7%, and Joy 33.7%.

!['DataDistribution'](/images/DataSet.png)

## Approaches: 
**Classic approach**: Decision tree
**Fine Tuning**: BERT 
**Pretrained Model** : OpenAI
**Live Demo**

## Predictions 
1. Does OpenAI can predict sentiment based on the user input? 
2. What words have high frequency in our data?  
3. BERT Model prediction rate to compare with our data. 
4. OpenAI with or without prompt engineeering prediction rate.
5. Which word classifies as what kind of sentiment? 

## Visualizations
Display data into different emotions and visualize them by percentages.
Display Decision Tree.
Display confusion Matrix for all the models.
Visulize the BERT's Model epoch vs Average test loss.
Display Clasification Report for all the Models.

!['DecisionTree']()

!['ClassificationReportDT']()

!['Confusion MatrixBert'](/images/BertConsusionMatrix.png)

!['ClassificationReportBert'](/images/BERTReport.png)


## Report 
**Decision Tree**:





**BERT**:
* BERT had a highest accuracy score 97%
* Average test loss is about 0.11%
* Model demonstrates strong performance across various metrics.
* Effectively classifies instances in fear, joy, and anger classes.
* High precision, Recall, anf F1-Score across all classes.
* Both macro-average and weighted-average metrics are 0.97 that , emphasizes consistency in model performance across all classes, considering both equal and weighted contributions.
* After loss value at the end of each epoch converged to stable point we stopped training to avoid overfitting.
* From First epoch to the second epoch there is a steep line, and that is becuase our model have not been trained yet. 
**Summary**:
The model performs exceptionally well, achieving high precision, recall, and F1-scores across all classes, resulting in an impressive overall accuracy of 97%. The macro and weighted averages also reflect consistent and balanced performance across the classes.


**OpenAI(gpt3.5 turbo)**: 
The model was run both without prompt engineering and with prompt engineering. 
* The accuracy changed from first run to second run from 0.68% to 0.71%. 
* Precion: 
    * Generally higher in the second run across all classes.
* Recall:
    * Generally higher in the second report, particularly for "Joy" and "Fear."
* F1-Score:
    * Slightly higher in the second report for all classes.
* F1-Score:
    * Slightly higher in the second report for all classes.

**Summary**: 
The prompt engineering classification report generally exhibits better performance metrics, with higher precision, recall, and F1-scores, resulting in a higher overall accuracy. The improvements are particularly notable for the "Joy" and "Fear" classes.

!['OpenAIPrompt'](/images/AIpropmtEngineering.png)

!['OpenAINoPrompt'](/images/NopromptEngineerAI.png)