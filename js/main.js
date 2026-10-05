/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  const setMenuState = (isOpen) => {
    menu.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));

    const srText = toggle.querySelector(".sr-only");
    if (srText) {
      srText.textContent = isOpen ? "Close menu" : "Open menu";
    }
  };

  const closeMenu = () => setMenuState(false);

  // Toggle button click
  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("open");
    setMenuState(isOpen);
  });

  // Close when a nav link or CTA is clicked
  document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside
  document.addEventListener("click", (event) => {
    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close on Escape key press and restore focus to toggle button
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });
}

/* =========================================================
   HEADER SCROLL STATE
   ========================================================= */

const header = document.querySelector(".site-header");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if (sections.length > 0 && navLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          const isTarget = link.getAttribute("href") === `#${currentId}`;
          link.classList.toggle("active", isTarget);
        });
      });
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.1,
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".project, .experience-item, .about-grid, .skill-group, .earlier-item, .credential, .contact-link",
);

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}

/* =========================================================
   FOOTER YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
