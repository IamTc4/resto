class SentimentService {
    analyze(text) {
        // Mock simple sentiment analysis
        const negativeWords = ['bad', 'slow', 'wrong', 'late', 'angry'];
        const positiveWords = ['good', 'great', 'fast', 'tasty', 'love'];

        const lower = text.toLowerCase();
        if (negativeWords.some(w => lower.includes(w))) return 'NEGATIVE';
        if (positiveWords.some(w => lower.includes(w))) return 'POSITIVE';
        return 'NEUTRAL';
    }
}

module.exports = new SentimentService();
