import {format} from "date-fns";

export const getLocaledMatchStatus = (status, locale) => {
  if (locale === "RU") {
    switch (status) {
      case "SCHEDULED":
        return "Запланирован";
      case "LIVE":
        return "В прямом эфире";
      case "IN_PLAY":
        return "В игре";
      case "FINISHED":
        return "Завершен";
      case "POSTPONED":
        return "Отложен";
      case "SUSPENDED":
        return "Приостановлен";
      case "CANCELED":
        return "Отменен";
      default:
        return status;
    }
  }
};

export const getFormattedMatchScore = ({fullTime, extraTime, penalties}) => {
  let score = "";

  if (fullTime.homeTeam !== null && fullTime.awayTeam !== null)
    score += `${fullTime.homeTeam}:${fullTime.awayTeam}`;
  if (extraTime.homeTeam !== null && extraTime.awayTeam !== null)
    score += ` (${extraTime.homeTeam}:${extraTime.awayTeam})`;
  if (penalties.homeTeam !== null && penalties.awayTeam !== null)
    score += ` (${penalties.homeTeam}:${penalties.awayTeam})`;

  return score;
};

export const formatMatchesData = (matches = []) => {
  return matches.map((m) => ({
    id: m.id,
    date: format(new Date(m.utcDate), "dd.MM.yyyy"),
    time: format(new Date(m.utcDate), "HH:mm"),
    status: getLocaledMatchStatus(m.status, "RU"),
    commandA: m.homeTeam.name,
    commandB: m.awayTeam.name,
    score: getFormattedMatchScore(m.score),
  }));
};
