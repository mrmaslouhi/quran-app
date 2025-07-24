const dateInHijry = () => {
  return new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(Date.now());
};

export default dateInHijry;
