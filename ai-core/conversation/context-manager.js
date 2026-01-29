class ContextManager {
    constructor() {
        this.contexts = new Map();
    }

    getContext(userId) {
        return this.contexts.get(userId) || {};
    }

    updateContext(userId, data) {
        const current = this.getContext(userId);
        this.contexts.set(userId, { ...current, ...data });
    }

    clearContext(userId) {
        this.contexts.delete(userId);
    }
}

module.exports = new ContextManager();
