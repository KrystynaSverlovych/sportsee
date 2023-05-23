import * as MOCKED_DATA from "../datamock/datamocked";
import axios from "axios";

/**
 * @description function to get user's details
 * @property {Function} getUser fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getUser(id, switcher) {
    return await getURL(id, switcher, "");
}

/**
 * @description function to get user's activity report
 * @property {Function} getActivity fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getActivity(id, switcher) {
    return await getURL(id, switcher, "activity");
}

/**
 * @description function to get user's average sessions report
 * @property {Function} getAverageSessions fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getAverageSessions(id, switcher) {
    return await getURL(id, switcher, "average-sessions");
}

/**
 * @description function to get User's performance report
 * @property {Function} getPerformance fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getPerformance(id, switcher) {
    return await getURL(id, switcher, "performance");
}

/**
 * @description function to fetch the data from the API and switch between API and mocked user
 * @property {Function} getUser
 * @param { number } id - The Id of the user
 * @param { string } userswitch - The Id of the user
 * @param { string } uri - The Id of the user
 * @returns Object
 */
async function getURL(id, switcher, uri) {
    if (switcher === "user") {
        try {
            const response = await axios.get(`http://localhost:3000/${switcher}/${id}/${uri}`);
            return response.data.data;
        } catch (error) {
            console.error(error);
        }
    } else if (switcher === "mock") {
        switch (uri) {
            case "":
                return MOCKED_DATA.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
            case "activity":
                return MOCKED_DATA.USER_ACTIVITY.find((user) => user.userId === parseInt(id));
            case "average-sessions":
                return MOCKED_DATA.USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(id));
            case "performance":
                return MOCKED_DATA.USER_PERFORMANCE.find((user) => user.userId === parseInt(id));
            default:
                break;
        }
    }
}


export {getUser, getActivity, getPerformance, getAverageSessions};