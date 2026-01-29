class IntentService {
    detectIntent(message) {
        const text = message.toLowerCase();
        if (text.includes('order') || text.includes('buy')) return 'ORDER';
        if (text.includes('menu')) return 'BROWSE_MENU';
        if (text.includes('track') || text.includes('where')) return 'TRACK_ORDER';
        if (text.includes('complaint') || text.includes('bad')) return 'COMPLAINT';
        return 'GENERAL_QUERY';
    }
}

module.exports = new IntentService();
