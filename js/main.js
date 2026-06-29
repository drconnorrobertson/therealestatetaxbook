/* ============================================================
   Real Estate Investor Tax Playbook -- Main JS
   AE Tax Advisors | therealestatetaxbook.com
   ============================================================ */

(function () {
  "use strict";

  /* --- Mobile Navigation Toggle --- */
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      const expanded = nav.classList.contains("active");
      toggle.setAttribute("aria-expanded", expanded);
    });

    // Close nav on link click
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close nav on outside click
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* --- Intersection Observer -- Fade-in on Scroll --- */
  var observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".chapter-card, .audience-card, .series-card").forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  /* --- Current Year in Footer --- */
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
