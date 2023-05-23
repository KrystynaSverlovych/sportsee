
class UserActivity {
    /**
     * Assign the user activity details.
     * @param {Object} averageSessions the value from the API.
     */
    constructor(data) {
        this._activities = data.sessions.map((session) => {
            return {
                name: this.initDate(session.day),
                ...session,
            };
        });
    }

    initDate = (date) => {
        const day = new Date(date);
        return day.getDate().toString();
    };

    get initActivity() {
        return this._activities;
    }
}

export default UserActivity;