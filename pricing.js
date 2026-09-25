// Prices and checkout links for the public pricing page.
// When checkout is ready, paste each payment URL into checkoutUrl.
// Leave checkoutUrl as an empty string until then. The buttons stay visible
// and do not open a payment page.

window.CLOCK_PRICING = {
  annual: {
    checkoutUrl: "",
  },
  lifetime: {
    checkoutUrl: "",
  },
};

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const plan = window.CLOCK_PRICING[button.dataset.plan];
    const url = plan && plan.checkoutUrl;
    if (!url) {
      event.preventDefault();
      return;
    }
    window.location.href = url;
  });
});
