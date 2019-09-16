var auth0 = null;
var user;

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

const fetchAuthConfig = () => {
  return fetch("/auth_config.json");
};

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });
};

// on initial load
window.addEventListener("load", async () => {
  console.log("loading");
  await configureClient();
  const isAuthenticated = await auth0.isAuthenticated();

    await updateUI();
  if (isAuthenticated) {
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
    return;
  }
  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0.handleRedirectCallback();
    await updateUI();
    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
});

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  console.log("Authenticated: ", isAuthenticated);
  document.getElementById("logout").disabled = !isAuthenticated;
  document.getElementById("login").disabled = isAuthenticated;
};
