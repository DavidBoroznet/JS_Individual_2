// src/activity.js

/**
 * Fetches a random activity from the Bored API.
 * @returns {Promise<string>} A promise that resolves to a random activity string.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/slack');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data.attachments[0].text;
    } catch (error) {
        console.error('Error fetching activity:', error);
        return 'К сожалению, произошла ошибка';
    }
}
