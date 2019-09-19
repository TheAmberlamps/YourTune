const searchbar = document.getElementById("searchbar");
const profile = document.getElementById("profile");
const cart = document.getElementById("cart");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);

$("#hovChange").hover(
  function() {
    $("#texY").css("color", "red");
    $("#texT").css("color", "black");
  },
  function() {
    // on mouseout, reset the background colour
    $("#texY").css("color", "black");
    $("#texT").css("color", "red");
  }
);

searchbar.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    window.location = `/search?q=${e.target.value}`;
  }
});

profile.addEventListener("click", async e => {
  await redirectWithToken(e, "profile");
});

cart.addEventListener("click", async e => {
  await redirectWithToken(e, "cart");
});

async function redirectWithToken(e, url) {
  e.preventDefault();
  window.location = `/${url}?t=${token}`;
}

function updateCartDisplay() {
  fetch(`http://localhost:3000/api/cart?t=${token}`, {
    method: "get"
  }).then(res => {
    res.json().then(data => {
      $("#cartDisplay").text(parseFloat(data.length));
    });
  });
}
updateCartDisplay();
