# Project 4 - Natural Language Processing (NLP) based Emotions Analysis 

# Team Members
* Daniel Greener
* Denisse Ogata
* Jayashree Kotte
* Kelvin Ramos
* Maryam Najiarani

## Project Overview
The Emotion Classification dataset is designed to facilitate research and exploration in natural language processing (NLP) and emotion analysis. It contains diverse text samples, each labeled with the specific emotion it conveys. The dataset covers a broad spectrum of emotions, including joy, enthusiasm, frustration, sorrow, and more.

The purpose of this data is to construct and train a model capable of analyzing text samples to detect and categorize various emotions. These categorized emotions can then be applied in numerous scenarios outlined below.

Potential Applications:

* Sentiment Analysis
* Predicting psychological aspects from patient feedback
* Analyzing customer satisfaction (e.g., Amazon reviews)
* Monitoring sentiment on social media platforms (e.g., TikTok, Instagram)
* Training chatbots and virtual assistants (e.g., AT&T virtual assistant)


## Dataset 
Our dataset contains a diverse collection of text samples paired with corresponding emotions, stored in CSV file format. With over 5900 rows, the sentiment distribution in the data is as follows: Fear 32.6%, Anger 33.7%, and Joy 33.7%.

!['DataDistribution'](/images/DataSet.png)

## Approaches: 
* **Classic approach**: Decision tree using TF-IDF Vectorizer
* **Fine Tuning**: BERT 
* **Pretrained Model** : OpenAI
* **Live Demo**

## Predictions 
* Can OpenAI predict sentiment from user input?
* Which words exhibit high frequency within our dataset?
* What is the prediction accuracy of the BERT Model compared to our dataset?
* What is the prediction accuracy of OpenAI with and without prompt engineering?
* How are individual words classified in terms of sentiment?

## Visualizations
* Present the data categorized by various emotions and illustrate them using percentages.
* Show the Decision Tree.
* Present the confusion matrix for all models.
* Visualize the BERT Model's epoch versus average test loss.
* Show the Classification Report for all models.
-----

**Decison Tree using TF-IDF Vectorizer Metrics**

!['CFM DecisionTree'](/images/DT_confusion_matrix.png)

!['ClassificationReportDT'](/images/DT_classification_report.png)

---
**BERT Model Metrics**

!['Confusion MatrixBert'](/images/BertConsusionMatrix.png)

!['ClassificationReportBert'](/images/BERTReport.png)

--- 

## Report 
**Decision Tree**:
* Using the Term Frequency Inverse Document Frequency (TF-IDF) vectorizer, a decision tree was constructed to perform sentiment analysis. 
* This decision tree model utilizes TF-IDF transformed text data to classify sentiment, capturing the importance of terms in the dataset for determining various sentiments such as joy, anger and fear.
* The model achieves an **accuracy score of 94%**, demonstrating its strong performance in sentiment prediction based on our dataset.
* The model exhibits an **average test loss of 6%**.
* **Precision, Recall, and F1 Score** for all three emotions range between **92 to 97%**.
* Consistent predictions across all classes are evident from the macro avg and weighted avg scores displayed in the classification report.

**Summary**
* The combination of this decision tree model with a vectorizer strongly implies its proficiency in sentiment prediction tasks.
* Employing TF-IDF, it categorizes words and their significance in text, demonstrating the nuanced language learning capabilities of this model.
* Considering all performance metrics, it is evident that this model is highly proficient in accurately predicting sentiments.

Snippet of the Decision Tree

![Decision Tree Predictions](/images/Decision_tree_predictions.png)

**BERT**:
* BERT had the **highest accuracy score of 97%**
* **Average test loss** is about **0.11%**
* Model demonstrates strong performance across various metrics.
* Effectively classifies instances of fear, joy, and anger classes.
* High precision, Recall, and F1-Score across all classes.
* Both macro-average and weighted-average metrics are 0.97, that emphasizes consistency in model performance across all classes, considering both equal and weighted contributions.
* After loss value at the end of each epoch converged to stable point we stopped training to avoid overfitting.
* From First epoch to the second epoch there is a steep line, and that is becuase our model has not been trained yet.

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


**Summary**: 
The prompt engineering classification report generally exhibits better performance metrics, with higher precision, recall, and F1-scores, resulting in a higher overall accuracy. The improvements are particularly notable for the "Joy" and "Fear" classes.

OpenAI Performance Without Prompt Engineering 
!['OpenAIPrompt'](/images/AIpropmtEngineering.png)

OpenAI Performance With Prompt Engineering
!['OpenAINoPrompt'](/images/NopromptEngineerAI.png)