// src/index.js

import { getRandomActivity } from './activity.js';

async function updateActivity() {
    const activityElement = document.getElementById('activity');
    const activity = await getRandomActivity();
    activityElement.textContent = activity;
}

// Initial call to update activity
updateActivity();

// Update activity every minute
setInterval(updateActivity, 60000);
