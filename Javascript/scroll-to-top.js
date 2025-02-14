// Scroll to the top of the document when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
  
  // Smooth scroll to Pricing section with pre-rendering
  document
    .querySelector(".hero .cta-button")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
  
      const pricingSection =
        document.getElementById("enroll-button").parentElement;
  
      // Force the browser to render the Pricing section
      pricingSection.style.display = "block";
      pricingSection.offsetHeight; // Trigger reflow to ensure rendering
  
      // Smooth scroll to the Pricing section
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  
  // Add visible class when Pricing section is in view
  const pricingSection = document.querySelector(".pricing");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pricingSection.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  ); // Trigger when 50% of the section is visible
  
  observer.observe(pricingSection);