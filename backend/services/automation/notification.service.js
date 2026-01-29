class NotificationService {
    sendSMS(to, text) {
        console.log(`Sending SMS to ${to}: ${text}`);
    }

    sendEmail(to, subject, body) {
        console.log(`Sending Email to ${to}: ${subject}`);
    }
}

module.exports = new NotificationService();
