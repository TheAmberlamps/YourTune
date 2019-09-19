var user = null;
var auth0 = null;
var token = window.localStorage.getItem("t") || null;

function setUI(loggedIn) {
  if (loggedIn) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("logout").classList.remove("hidden");
    document.querySelectorAll(".gated").forEach(el => {
      el.classList.remove("hidden");
    });
  } else {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("logout").classList.add("hidden");
    document.querySelectorAll(".gated").forEach(el => {
      el.classList.add("hidden");
    });
  }
}

setUI(false);

const login = async () => {
  const token = await auth0.getTokenWithPopup({});
  console.log("Token ", token);
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    await onAuthenticated();
  }
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
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
  token = await auth0.getTokenSilently();
  id_token = await auth0.getIdTokenClaims();

  window.localStorage.setItem("t", token);

  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ email: user.email })
  });
  user = await response.json();
}

window.addEventListener("load", async () => {
  await configureClient(); // Init auth0
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    await onAuthenticated();
    return;
  } else {
    setUI(false);
  }
});
