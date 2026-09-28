window.CLOCK_PRICING = {
  annual: {
    checkoutUrl:
      "https://checkout.dodopayments.com/buy/pdt_0NoWOO7lmU3yoAoDFR9EE?quantity=1&redirect_url=https://www.clockextension.site/success.html",
  },
  lifetime: {
    checkoutUrl:
      "https://checkout.dodopayments.com/buy/pdt_0NoWONyiSIm4nbMawqRjL?quantity=1&redirect_url=https://www.clockextension.site/success.html",
  },
};

const installationId = new URLSearchParams(window.location.search).get("installation_id");
const hasInstallationId = /^[0-9a-f-]{36}$/i.test(installationId || "");

document.querySelectorAll("[data-plan]").forEach((button) => {
  const plan = window.CLOCK_PRICING[button.dataset.plan];
  if (!plan || !plan.checkoutUrl) return;
  button.addEventListener("click", () => {
    const url = new URL(plan.checkoutUrl);
    if (hasInstallationId) url.searchParams.set("metadata_installation_id", installationId);
    window.location.href = url.toString();
  });
});
