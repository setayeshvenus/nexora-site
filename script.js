/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("revealed");

    });

}


/* =========================
   PRICING TOGGLE
========================= */

const billingButtons =
    document.querySelectorAll(".billing-btn");

const monthlyPrices =
    document.querySelectorAll(".monthly-price");

const yearlyPrices =
    document.querySelectorAll(".yearly-price");


billingButtons.forEach(button => {

    button.addEventListener("click", () => {

        billingButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const billing =
            button.dataset.billing;


        if (billing === "yearly") {

            monthlyPrices.forEach(price => {

                price.style.display = "none";

            });

            yearlyPrices.forEach(price => {

                price.style.display = "inline";

            });

        } else {

            monthlyPrices.forEach(price => {

                price.style.display = "inline";

            });

            yearlyPrices.forEach(price => {

                price.style.display = "none";

            });

        }

    });

});


/* =========================
   AI INSIGHT DEMO
========================= */

const generateInsight =
    document.querySelector("#generateInsight");

const insightResult =
    document.querySelector("#insightResult");


const insights = [

    "رفتار کاربران نشان می‌دهد نرخ تعامل در حال افزایش است.",

    "پیشنهاد NEXORA: تمرکز روی کاربران فعال می‌تواند رشد را سریع‌تر کند.",

    "داده‌ها نشان می‌دهند عملکرد این هفته ۱۸٪ بهتر از هفته قبل بوده است.",

    "بهترین زمان برای بهینه‌سازی کمپین، سه‌شنبه و چهارشنبه است."

];


if (generateInsight && insightResult) {

    generateInsight.addEventListener("click", () => {

        generateInsight.disabled = true;

        generateInsight.textContent =
            "Analyzing...";


        setTimeout(() => {

            const randomIndex =
                Math.floor(
                    Math.random() * insights.length
                );


            insightResult.textContent =
                "✦ " + insights[randomIndex];


            generateInsight.disabled = false;

            generateInsight.textContent =
                "Generate Insight";

        }, 900);

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector("#contactForm");

const contactMessageBox =
    document.querySelector("#contactMessageBox");


if (contactForm && contactMessageBox) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                .querySelector("#contactName")
                ?.value.trim() || "";


            const email =
                document
                .querySelector("#contactEmail")
                ?.value.trim() || "";


            const message =
                document
                .querySelector("#contactMessage")
                ?.value.trim() || "";


            if (!name || !email || !message) {

                contactMessageBox.textContent =
                    "لطفاً تمام فیلدها را تکمیل کنید.";

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                contactMessageBox.textContent =
                    "لطفاً یک ایمیل معتبر وارد کنید.";

                return;

            }


            contactMessageBox.textContent =
                "پیام شما با موفقیت ثبت شد ✦";


            contactForm.reset();

        }
    );

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove(
                "mobile-open"
            );

        }

    });

});
