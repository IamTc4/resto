class RecommendationService {
    getRecommendations(customerProfile, context) {
        // Mock logic
        if (context.weather === 'rainy') {
            return ['Hot Soup', 'Masala Chai'];
        }
        if (customerProfile && customerProfile.isVegetarian) {
            return ['Paneer Tikka', 'Veg Biryani'];
        }
        return ['Butter Chicken', 'Garlic Naan']; // Default bestsellers
    }
}

module.exports = new RecommendationService();
