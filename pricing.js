// Official test payment links. Replace these when the products move to live mode.

window.CLOCK_PRICING = {
  annual: {
    checkoutUrl:
      "https://test.checkout.dodopayments.com/buy/pdt_0NoQLOTtxTPc0ZMXI10Vl?quantity=1&redirect_url=https://atlas.dodopayment.com",
  },
  lifetime: {
    checkoutUrl:
      "https://test.checkout.dodopayments.com/buy/pdt_0NoQRzf9EjqwHBBM4OVRk?quantity=1&redirect_url=https://atlas.dodopayment.com",
  },
};

document.querySelectorAll("[data-plan]").forEach((button) => {
  const plan = window.CLOCK_PRICING[button.dataset.plan];
  if (!plan || !plan.checkoutUrl) return;
  button.addEventListener("click", () => {
    window.location.href = plan.checkoutUrl;
  });
});
