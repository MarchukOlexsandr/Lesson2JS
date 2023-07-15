const isFriend = true;
const isOnline = true;
const inDnd = false;

const canOnenChat = isFriend && isOnline && inDnd ;
console.log("Можна відкрити чат?", canOnenChat);