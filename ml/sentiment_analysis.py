from transformers import pipeline

sentiment_analyzer = pipeline("sentiment-analysis")

def analyze_text(text):
    return sentiment_analyzer(text)
