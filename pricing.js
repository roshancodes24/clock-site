// Checkout links for the public pricing page.
// Annual and Lifetime product IDs are fixed. The buttons open the matching
// hosted checkout URL. Replace the host below if you switch between test and live.

const CHECKOUT_HOST = "https://checkout.dodopayments.com/buy";
const RETURN_URL = "https://roshancodes24.github.io/clock-site/pricing.html";

window.CLOCK_PRICING = {
  annual: {
    productId: "pdt_0NoQLOTtxTPc0ZMXI10Vl",
  },
  lifetime: {
    productId: "pdt_0NoQRzf9EjqwHBBM4OVRk",
  },
};

function checkoutUrl(productId) {
  const url = new URL(`${CHECKOUT_HOST}/${productId}`);
  url.searchParams.set("quantity", "1");
  url.searchParams.set("redirect_url", RETURN_URL);
  return url.toString();
}

document.querySelectorAll("[data-plan]").forEach((button) => {
  const plan = window.CLOCK_PRICING[button.dataset.plan];
  if (!plan) return;
  button.addEventListener("click", () => {
    window.location.href = checkoutUrl(plan.productId);
  });
});
