var user = null;
var auth0 = null;

// LOGIN
const login = async () => {
  await auth0.loginWithPopup({});
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    await onAuthenticated();
  }
};

// LOGOUT
const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

// handle button events
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
logoutBtn.classList.add("hidden");
loginBtn.classList.add("hidden");
// starts as hidden

const setUI = function(loggedIn) {
  if (loggedIn) {
    document.querySelectorAll(".gated").forEach(el => {
      el.classList.remove("hidden");
    });
    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    document.querySelectorAll(".gated").forEach(el => {
      el.classList.add("hidden");
    });
    loginBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }
};

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: "dev-kh4e71db.auth0.com",
    client_id: "ClEBrqKGJinsXsfTqeFvlSpmrq466Rdh"
  });
};

async function onAuthenticated() {
  setUI(true);
  user = await auth0.getUser();
  // add user to database
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ email: user.email })
  });
  user = await response.json();
  console.log("User:", user);
}

// on initial load
window.addEventListener("load", async () => {
  await configureClient(); // Init auth0
  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    onAuthenticated();
    return;
  } else {
    setUI(false);
  }
});
