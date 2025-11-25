document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;
  
    fetch("footer.html")
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
  
        // Fetch count (read-only)
        fetch("https://lyi08dsoo1.execute-api.eu-north-1.amazonaws.com/visit", { method: "GET" })
          .then(res => res.json())
          .then(data => {
            animateCount(document.getElementById("footer-total-count"), data.total);
            animateCount(document.getElementById("footer-monthly-count"), data.monthly);
          })
          .catch(err => console.error("Visit count fetch failed:", err));
      });
  
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
  