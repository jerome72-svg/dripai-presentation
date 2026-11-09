
// ==========================================
// DRIPAI PRESENTATION — CORRECTED COMPLETE SCRIPT
// ==========================================

const packages = {
  happy: {
    name: "AI Sales Assistant Integration",
    kicker: "YOUR RECOMMENDED DRIPAI SOLUTION",
    intro: "Keep the website your dealership already likes and add an AI-powered assistant that helps visitors get answers, share their details and connect with your sales team.",
    image: "assets/package-a-ai-assistant.webp",
    setup: "$1,250",
    monthly: "$249",
    deposit: "$750",
    balance: "$500",
    timeline: "7–10 business days",

    fit: "This solution is designed for a dealership that already has a website it is happy with and wants to strengthen the way it handles online buyer enquiries.",

    scope: "We integrate the DripAI sales assistant into your existing website, configure its approved knowledge sources, connect lead capture and CRM, and set up the agreed email notifications and follow-up workflows.",

    features: [
      ["AI website assistant", "Responds to dealership and vehicle questions using your published website information."],
      ["Lead capture", "Collects visitor contact details and the vehicle or service they are interested in."],
      ["CRM connection", "Stores enquiries in an organised lead-management system."],
      ["Sales team alerts", "Sends email notifications when a new enquiry is captured."],
      ["Follow-up workflows", "Supports agreed email follow-ups and appointment requests."],
      ["Managed operation", "Ongoing monitoring, maintenance and basic revisions."]
    ]
  },

  upgrade: {
    name: "Website Upgrade + AI Sales System",
    kicker: "YOUR RECOMMENDED DRIPAI SOLUTION",
    intro: "Give your dealership a more polished website experience and connect it to an AI-powered sales system that helps turn visitor interest into organised enquiries.",
    image: "assets/package-b-website.webp",
    setup: "$1,750",
    monthly: "$299",
    deposit: "$1,050",
    balance: "$700",
    timeline: "14–21 business days",

    fit: "This solution is designed for a dealership that already has a website but feels its current presentation or enquiry experience needs improvement.",

    scope: "We refresh the agreed website experience, organise the key dealership and vehicle information, and integrate the DripAI sales assistant, lead capture, CRM, sales notifications and agreed follow-up workflows.",

    features: [
      ["Website experience upgrade", "A more polished, responsive presentation for your dealership and its inventory."],
      ["AI website assistant", "Answers questions using approved information published on your website."],
      ["Lead capture", "Collects visitor contact details and vehicle or service interest."],
      ["CRM connection", "Organises incoming enquiries for your sales team."],
      ["Sales team alerts", "Notifies your team by email when a lead is captured."],
      ["Follow-up workflows", "Supports agreed email follow-ups and appointment requests."]
    ]
  },

  none: {
    name: "Complete AI Dealership Website & Sales System",
    kicker: "YOUR RECOMMENDED DRIPAI SOLUTION",
    intro: "Establish a professional online presence for your dealership, with an AI-powered assistant and lead-management system designed into the experience from the beginning.",
    image: "assets/package-c-showroom.webp",
    setup: "$2,250",
    monthly: "$349",
    deposit: "$1,350",
    balance: "$900",
    timeline: "21–30 business days",

    fit: "This solution is designed for a dealership that does not currently have a website and needs a complete online presence connected to a modern enquiry and sales-support system.",

    scope: "We build the agreed dealership website, organise your supplied business and vehicle information, integrate the DripAI sales assistant, and connect lead capture, CRM, sales notifications and agreed follow-up workflows.",

    features: [
      ["Complete dealership website", "A responsive website presenting your dealership, services and supplied vehicle listings."],
      ["AI website assistant", "Answers questions using approved dealership and vehicle information."],
      ["Lead capture", "Collects buyer contact details and vehicle or service interest."],
      ["CRM connection", "Stores and organises enquiries for your sales team."],
      ["Sales team alerts", "Notifies your team by email when a new lead is captured."],
      ["Follow-up workflows", "Supports agreed email follow-ups and appointment requests."]
    ]
  }
};


// ==========================================
// INITIALISE THE PRESENTATION
// ==========================================

function initialiseDripAI() {

  console.log("DripAI presentation script loaded.");

  let selectedPackage = null;

  const recommendation = document.getElementById("recommendation");
  const packageContent = document.getElementById("package-content");

  const sharedSectionIds = [
    "shared-system",
    "delivery",
    "management",
    "terms",
    "confirmation"
  ];


  // ----------------------------------------
  // FOOTER YEAR
  // ----------------------------------------

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ----------------------------------------
  // SAFE TEXT UPDATE
  // ----------------------------------------

  function updateText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }


  // ----------------------------------------
  // DISPLAY THE SELECTED PACKAGE
  // ----------------------------------------

  function showRecommendation(packageKey) {

    const pkg = packages[packageKey];

    if (!pkg) {
      console.error("Invalid package selected:", packageKey);
      return;
    }

    if (!recommendation || !packageContent) {
      console.error("Recommendation section or package-content element is missing.");
      return;
    }

    selectedPackage = packageKey;


    // Build package features

    const featureHtml = pkg.features.map(([title, description]) => `
      <div class="feature">
        <i>✓</i>
        <div>
          <b>${title}</b>
          <small>${description}</small>
        </div>
      </div>
    `).join("");


    // Build the complete package presentation

    packageContent.innerHTML = `

      <article class="package-card">

        <div class="package-hero">

          <div class="package-hero-copy">

            <div class="package-kicker">
              ${pkg.kicker}
            </div>

            <h2>${pkg.name}</h2>

            <p>${pkg.intro}</p>

          </div>

          <div class="package-hero-image">

            <img
              src="${pkg.image}"
              alt="${pkg.name}"
              onerror="this.style.display='none'"
            >

          </div>

        </div>


        <div class="package-body">

          <div class="package-summary">

            <div>

              <h3>Why this is the right fit</h3>

              <p>${pkg.fit}</p>

              <h3 style="margin-top:25px">
                What we'll implement
              </h3>

              <p>${pkg.scope}</p>

            </div>


            <aside class="price-panel">

              <div class="price-label">
                ONE-TIME SETUP
              </div>

              <div class="price-row">
                <strong>${pkg.setup}</strong>
                <span>Project setup</span>
              </div>

              <div class="price-divider"></div>

              <div class="price-label">
                MONTHLY MANAGEMENT
              </div>

              <div class="price-row">
                <strong>${pkg.monthly}</strong>
                <span>Per month</span>
              </div>

              <div class="price-divider"></div>

              <div class="price-label">
                PAYMENT BREAKDOWN
              </div>

              <div class="deposit-line">
                Initial 60% deposit:
                <b>${pkg.deposit}</b>
              </div>

              <div class="deposit-line">
                Final 40% after approval:
                <b>${pkg.balance}</b>
              </div>

              <p class="small-print">
                Monthly management begins only after delivery,
                testing, your approval and activation.
              </p>

            </aside>

          </div>


          <div class="package-section">

            <h3>What's included in your solution</h3>

            <div class="feature-grid">
              ${featureHtml}
            </div>

          </div>


          <div class="package-section">

            <h3>Estimated delivery</h3>

            <p>
              Estimated from the date we receive your initial
              deposit and all required project information.
            </p>

            <div class="timeline-pill">
              ◷ &nbsp; ${pkg.timeline}
            </div>

          </div>


          <div class="package-footer">

            <div>
              <strong>Built around your dealership.</strong>

              <p>
                A managed implementation with a clear review
                and approval process.
              </p>
            </div>

            <strong>DRIPAI / YOUR SALES SYSTEM</strong>

          </div>

        </div>

      </article>

    `;


    // Update invoice summary

    updateText("invoice-package-name", pkg.name);
    updateText("invoice-setup", pkg.setup);
    updateText("invoice-monthly", pkg.monthly + "/month");
    updateText("invoice-deposit", pkg.deposit);
    updateText("invoice-balance", pkg.balance);
    updateText("invoice-timeline", pkg.timeline);


    // Reveal the package recommendation

    recommendation.classList.remove("hidden");


    // Reveal every section below the package

    sharedSectionIds.forEach(id => {

      const section = document.getElementById(id);

      if (section) {
        section.classList.remove("hidden");
      }

    });


    // Scroll to the selected package

    requestAnimationFrame(() => {

      recommendation.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  }


  // ----------------------------------------
  // QUESTIONNAIRE — EVENT DELEGATION
  // ----------------------------------------

  document.addEventListener("click", function(event) {

    const button = event.target.closest("[data-answer]");

    if (!button) {
      return;
    }

    event.preventDefault();

    const answer = button.getAttribute("data-answer");

    console.log("Website questionnaire selection:", answer);

    if (!packages[answer]) {
      console.error("No package matches this answer:", answer);
      return;
    }

    showRecommendation(answer);

  });


  // ----------------------------------------
  // INVOICE REQUEST FORM
  // ----------------------------------------

  const invoiceForm = document.getElementById("invoice-request-form");

  if (invoiceForm) {

    invoiceForm.addEventListener("submit", function(event) {

      event.preventDefault();

      if (!selectedPackage || !packages[selectedPackage]) {
        alert("Please select your DripAI package first.");
        return;
      }

      const pkg = packages[selectedPackage];

      const customerName =
        document.getElementById("customer-name").value.trim();

      const dealershipName =
        document.getElementById("dealership-name").value.trim();

      const customerPhone =
        document.getElementById("customer-phone").value.trim();

      const customerEmail =
        document.getElementById("customer-email").value.trim();


      if (
        !customerName ||
        !dealershipName ||
        !customerPhone ||
        !customerEmail
      ) {
        alert("Please complete all the required fields.");
        return;
      }


      const subject = encodeURIComponent(
        "DripAI Invoice Request - " + dealershipName
      );


      const body = encodeURIComponent(

`Hello Jerome,

I would like to request an invoice for the initial deposit for my selected DripAI package.

CUSTOMER DETAILS

Name: ${customerName}
Dealership: ${dealershipName}
Phone: ${customerPhone}
Email: ${customerEmail}


SELECTED PACKAGE

Package: ${pkg.name}
One-time setup: ${pkg.setup}
Monthly management: ${pkg.monthly}
Initial 60% deposit: ${pkg.deposit}
Remaining 40% after approval: ${pkg.balance}
Estimated delivery: ${pkg.timeline}


Please send me the Flutterwave invoice for the initial deposit.

Thank you.`

      );


      const recipient = "jeromedaniel0220@gmail.com";

      const mailtoLink =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

    });

  } else {

    console.warn("Invoice request form was not found.");

  }


  console.log("DripAI presentation is ready.");

}


// ==========================================
// START WHEN THE HTML IS READY
// ==========================================

if (document.readyState === "loading") {

  document.addEventListener("DOMContentLoaded", initialiseDripAI);

} else {

  initialiseDripAI();

}
