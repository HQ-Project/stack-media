export function saveAuth(info) {
  const { username } = info.username;

  let isUser = true,
    isAdmin = true;
  if (info.userType === "ROLE_ADMIN") {
    isUser = false;
  } else {
    isAdmin = false;
  }

  const authJson = { username, isUser, isAdmin };

  localStorage.setItem("authInfo", JSON.stringify(authJson));
}

export function cleanAuth() {
  localStorage.removeItem("authInfo");
}

export function expireAuth() {
  localStorage.setItem("authExpired", true);
  cleanAuth();
}

export function isExpired() {
  let exp = localStorage.getItem("authExpired");
  if (exp) {
    localStorage.removeItem("authExpired");
    return true;
  }
  return false;
}

export function isAuthenticated() {
  //return true;
  let auth = localStorage.getItem("authInfo");
  return auth != null;
}

export function getAuthId() {
  //return true;
  let auth = localStorage.getItem("authInfo");
  let authJson = JSON.parse(auth);
  return authJson.id;
}

export function getAuthName() {
  //return true;
  let auth = localStorage.getItem("authInfo");
  let authJson = JSON.parse(auth);
  return authJson.username;
}

export function isAdmin() {
  //return true;
  let auth = localStorage.getItem("authInfo");
  let authJson = JSON.parse(auth);
  return authJson.isAdmin;
}

export function isUser() {
  //return true;
  let auth = localStorage.getItem("authInfo");
  let authJson = JSON.parse(auth);
  return authJson.isUser;
}
