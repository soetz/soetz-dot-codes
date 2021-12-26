const formatDate = (date: Date, monthsList: string[]): string => {
  const month = monthsList[date.getMonth()];
  const displayYear = date.getFullYear() !== new Date().getFullYear();
  return `${date.getDate()}${date.getDate() === 1 ? "er" : ""} ${month}${
    displayYear ? ` ${date.getFullYear()}` : ""
  }`;
};

const formatDateNormal = (date: Date): string => {
  return formatDate(date, [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ]);
};

const formatDateShort = (date: Date): string => {
  return formatDate(date, [
    '<abbr title="janvier">janv.</abbr>',
    '<abbr title="février">fév.</abbr>',
    "mars",
    "avril",
    "mai",
    "juin",
    '<abbr title="juillet">juil.</abbr>',
    "août",
    '<abbr title="septembre">sept.</abbr>',
    '<abbr title="octobre">oct.</abbr>',
    '<abbr title="novembre">nov.</abbr>',
    '<abbr title="décembre">déc.</abbr>',
  ]);
};

export { formatDateNormal, formatDateShort };
