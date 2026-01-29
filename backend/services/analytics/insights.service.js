class InsightsService {
    generateDailyInsights() {
        return [
            "Orders peak at 7 PM.",
            "Butter Chicken is the top seller today."
        ];
    }
}

module.exports = new InsightsService();
