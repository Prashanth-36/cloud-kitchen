const getToken = () => {
  return localStorage.getItem("token");
};

const tokenLoader = () => {
  return getToken();
};

const getTokenDuration = () => {
  const now = new Date();
  const storedTime = new Date(localStorage.getItem("expireTime"));
  const time = storedTime.getTime() - now.getTime();
  if (time < 0) {
    return "EXPIRED";
  }
  return time;
};

const tokenPayload = () => {
  const token = getToken();
  if (!token) {
    return;
  }
  return JSON.parse(atob(token.split(".")[1]));
};

export { getToken, tokenLoader, tokenPayload, getTokenDuration };
