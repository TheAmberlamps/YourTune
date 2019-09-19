const searchbar = document.getElementById("searchbar");

searchbar.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    window.location = `/search?q=${e.target.value}`;
  }
});
