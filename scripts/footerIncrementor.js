document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      footerPlaceholder.innerHTML = html;

      // Wait for DOM to render injected footer
      const waitForFooterElements = () => {
        const totalEl = document.getElementById("footer-total-count");
        const monthlyEl = document.getElementById("footer-monthly-count");

        if (totalEl && monthlyEl) {
          fetch("https://lyi08dsoo1.execute-api.eu-north-1.amazonaws.com/visit", { method: "POST" })
            .then(res => res.json())
            .then(data => {
              console.log("POST response data:", data);

              animateCount(totalEl, data.total);
              animateCount(monthlyEl, data.monthly);
            })
            .catch(err => console.error("Visit count fetch failed:", err));
        } else {
          setTimeout(waitForFooterElements, 50);
        }
      };

      waitForFooterElements();
    })
    .catch(err => console.error("Footer load failed:", err));

  function animateCount(element, target) {
    if (!element) return;
    let count = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = element.id === "footer-total-count"
        ? `Total Visits: ${count}`
        : `Monthly Visits: ${count}`;
    }, 30);
  }
});
