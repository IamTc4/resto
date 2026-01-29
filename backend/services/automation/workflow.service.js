class WorkflowService {
    triggerAbandonedCartFlow(userId) {
        console.log(`Triggered abandoned cart flow for ${userId}`);
    }
}

module.exports = new WorkflowService();
