const packages = {
  happy: {
    name: "AI Sales Assistant Integration",
    kicker: "YOUR RECOMMENDED DRIPAI SOLUTION",
    title: "Give your existing website a smarter sales assistant.",
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
    title: "Upgrade the experience. Strengthen the sales journey.",
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
    title: "Launch your dealership online with the sales system built in.",
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


// ----------------------------------------
// PAGE ELEMENTS
// ----------------------------------------

const recommendation = document.getElementById("recommendation");
const packageContent = document.getElementById("package-content");

const sharedSections = [
  "shared-system",
  "delivery",
  "management",
  "terms",
  "confirmation"
].map(id => document.getElementById(id));

let selectedPackage = null;
let currentPackage = null;


// ----------------------------------------
// FOOTER YEAR
// ----------------------------------------

document.getElementById("year").textContent = new Date().getFullYear();


// ----------------------------------------
// PACKAGE SELECTION
// ----------------------------------------

document.querySelectorAll("[data-answer]").forEach(button => {
  button.addEventListener("click", () => {
    selectedPackage = button.dataset.answer;
    showRecommendation();
  });
});


// ----------------------------------------
// DISPLAY RECOMMENDED PACKAGE
// ----------------------------------------

function showRecommendation() {
  const pkg = packages[selectedPackage];

  if (!pkg) {
    return;
  }

  currentPackage = pkg;

  const featureHtml = pkg.features.map(([title, desc]) => `
    <div class="feature">
      <i>✓</i>
      <div>
        <b>${title}</b>
        <small>${desc}</small>
      </div>
    </div>
  `).join("");

  packageContent.innerHTML = `
    <article class="package-card">

      <div class="package-hero">

        <div class="package-hero-copy">
          <div class="package-kicker">${pkg.kicker}</div>
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

            <h3 style="margin-top:25px">What we'll implement</h3>
            <p>${pkg.scope}</p>
          </div>

          <aside class="price-panel">

            <div class="price-label">ONE-TIME SETUP</div>
            <div class="price-row">
              <strong>${pkg.setup}</strong>
              <span>Project setup</span>
            </div>

            <div class="price-divider"></div>

            <div class="price-label">MONTHLY MANAGEMENT</div>
            <div class="price-row">
              <strong>${pkg.monthly}</strong>
              <span>Per month</span>
            </div>

            <div class="price-divider"></div>

            <div class="price-label">PAYMENT BREAKDOWN</div>

            <div class="deposit-line">
              Initial 60% deposit: <b>${pkg.deposit}</b>
            </div>

            <div class="deposit-line">
              Final 40% after approval: <b>${pkg.balance}</b>
            </div>

            <p class="small-print">
              Monthly management begins only after delivery,
              testing, your approval and activation.
            </p>

          </aside>

        </div>

        <div class="package-section">
          <h3>What's included in your solution</h3>
          <div class="feature-grid">${featureHtml}</div>
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


  // Update the invoice summary with the selected package.

  document.getElementById("invoice-package-name").textContent = pkg.name;
  document.getElementById("invoice-setup").textContent = pkg.setup;
  document.getElementById("invoice-monthly").textContent = pkg.monthly;
  document.getElementById("invoice-deposit").textContent = pkg.deposit;
  document.getElementById("invoice-balance").textContent = pkg.balance;
  document.getElementById("invoice-timeline").textContent = pkg.timeline;


  // Reveal the relevant sections.

  recommendation.classList.remove("hidden");

  sharedSections.forEach(section => {
    if (section) {
      section.classList.remove("hidden");
    }
  });


  // Scroll to the recommendation.

  setTimeout(() => {
    recommendation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 80);
}


// ----------------------------------------
// INVOICE REQUEST FORM
// ----------------------------------------

const invoiceForm = document.getElementById("invoice-request-form");

invoiceForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!currentPackage) {
    alert("Please select a package before requesting an invoice.");
    return;
  }

  const customerName = document.getElementById("customer-name").value.trim();
  const dealershipName = document.getElementById("dealership-name").value.trim();
  const customerPhone = document.getElementById("customer-phone").value.trim();
  const customerEmail = document.getElementById("customer-email").value.trim();

  if (!customerName || !dealershipName || !customerPhone || !customerEmail) {
    alert("Please complete all the fields before continuing.");
    return;
  }

  const pkg = currentPackage;

  const subject = `DripAI Invoice Request - ${dealershipName}`;

  const emailBody = `
Hello Jerome,

I would like to proceed with the following DripAI solution and request my Flutterwave invoice for the initial deposit.

CUSTOMER DETAILS

Full name: ${customerName}
Dealership: ${dealershipName}
Phone number: ${customerPhone}
Email address: ${customerEmail}

SELECTED DRIPAI PACKAGE

Package: ${pkg.name}
One-time setup fee: ${pkg.setup}
Monthly management: ${pkg.monthly}
Initial 60% deposit: ${pkg.deposit}
Remaining 40% balance: ${pkg.balance}
Estimated delivery: ${pkg.timeline}

PAYMENT TERMS

I understand that the initial 60% deposit is required before work begins.

The remaining 40% balance is payable after testing and my approval of the completed project.

Monthly management billing begins only after delivery, approval and activation.

Please send my Flutterwave invoice for the initial deposit so we can proceed.

Thank you.

${customerName}
${dealershipName}

My invoice request will be personally handled by Jerome Daniel of DripAI.
  `.trim();

  const recipient = "jeromedaniel0220@gmail.com";

  const mailtoLink =
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoLink;
});
