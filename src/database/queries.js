const users = [];

export function insertTeam(chatId) {
  if (users.find((user) => user.user === chatId)) return;
  users.push({
    user: chatId,
    matches: [],
  });
}
export function insertMatch(chatId, matchId) {
  const user = users.find((user) => user.user === chatId);
  user.matches.push(matchId);
}

export function readTeamsFromDB() {
  return users;
}

export function CheckMatches(chatId, matchId) {
  const user = users.find((user) => user.user === chatId);
  return user.matches.includes(matchId);
}
