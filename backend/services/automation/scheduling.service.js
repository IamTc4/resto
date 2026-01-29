class SchedulingService {
    scheduleTask(task, cronTime) {
        console.log(`Task scheduled for ${cronTime}`);
    }
}

module.exports = new SchedulingService();
