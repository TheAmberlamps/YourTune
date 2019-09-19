$(".buyMe").on("click", function(e) {
  const trackId = $(this).data("track-id");
  fetch(`/api/cart?t=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ track: trackId })
  }).then(data => {
    updateCartDisplay();
  });
});
