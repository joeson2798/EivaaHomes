// Custom JavaScript for Number Ticker Animation
// This script animates number counters with a scrolling effect when they come into view.
      document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".number-ticker");
        let animated = false;

        function createDigitScroller(digit) {
          const wrapper = document.createElement("div");
          wrapper.className = "digit";

          const inner = document.createElement("div");
          inner.className = "digit-inner";

          // Create 0–9 for scrolling effect
          for (let i = 0; i <= 9; i++) {
            const d = document.createElement("div");
            d.textContent = i;
            inner.appendChild(d);
          }

          wrapper.appendChild(inner);
          return { wrapper, inner, digit };
        }

        function animateCounter(el, value) {
          const digits = value.toString().split("");
          el.innerHTML = "";

          digits.forEach((digit) => {
            const { wrapper, inner } = createDigitScroller(digit);
            el.appendChild(wrapper);

            setTimeout(() => {
              inner.style.transform = `translateY(-${digit * 1.25}em)`;
            }, 100);
          });
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !animated) {
                setTimeout(() => {
                  counters.forEach((counter) => {
                    const finalVal = counter.getAttribute("data-value");
                    animateCounter(counter, finalVal);
                  });
                  animated = true;
                  observer.disconnect();
                }, 300);
              }
            });
          },
          { threshold: 0.3 }
        );

        const section = document.querySelector(".counter-section");
        observer.observe(section);
      });
// Custom JavaScript for Number Ticker Animation Ends




