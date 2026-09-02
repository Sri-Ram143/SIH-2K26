// ===============================
// Legal Metrology - Frontend JS
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// Verification Application Form
// ===============================

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
    applicationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const ownerName = document.getElementById("ownerName").value;
        const instrumentType = document.getElementById("instrumentType").value;
        const instrumentNumber = document.getElementById("instrumentNumber").value;

        if (ownerName === "" || instrumentType === "" || instrumentNumber === "") {
            alert("Please fill all required fields.");
            return;
        }

        alert(
            "Application submitted successfully!\n\n" +
            "Owner: " + ownerName + "\n" +
            "Instrument: " + instrumentType + "\n" +
            "Instrument No: " + instrumentNumber
        );

        applicationForm.reset();
    });
}


// ===============================
// Login Button
// ===============================

const loginButton = document.getElementById("loginBtn");

if (loginButton) {
    loginButton.addEventListener("click", function () {
        alert("Login system will be connected to the backend.");
    });
}


// ===============================
// Certificate Verification
// ===============================

const verifyForm = document.getElementById("verifyForm");

if (verifyForm) {

    verifyForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const certificateNumber =
            document.getElementById("certificateNumber").value.trim();

        const result =
            document.getElementById("verificationResult");


        if (certificateNumber === "") {

            result.innerHTML = `
                <div class="result-error">
                    Please enter a certificate number.
                </div>
            `;

            return;
        }


        // Temporary frontend demonstration
        if (certificateNumber === "LM-CERT-2026-0001") {

            result.innerHTML = `
                <div class="result-success">

                    <h3>✓ Certificate Verified</h3>

                    <p>
                        Certificate Number:
                        <strong>LM-CERT-2026-0001</strong>
                    </p>

                    <p>
                        Instrument:
                        Electronic Weighing Scale
                    </p>

                    <p>
                        Status:
                        <strong>Valid</strong>
                    </p>

                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="result-error">

                    <h3>Certificate Not Found</h3>

                    <p>
                        No certificate matching this number
                        was found in the system.
                    </p>

                </div>
            `;

        }

    });

}
/* =========================
   CERTIFICATE VERIFICATION
========================= */

.verify-page {
    min-height: 100vh;

    background: #f5f7fa;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 50px 20px;
}

.verify-container {
    width: 600px;

    max-width: 100%;

    background: white;

    padding: 45px;

    border-radius: 16px;

    text-align: center;

    box-shadow:
        0 10px 40px rgba(0,0,0,0.08);
}

.verify-icon {
    font-size: 50px;

    margin-bottom: 15px;
}

.verify-container h1 {
    color: #173b70;

    margin: 8px 0 15px;
}

.verify-description {
    color: #667085;

    line-height: 1.6;

    margin-bottom: 30px;
}

#verifyForm {
    text-align: left;
}

#verifyForm label {
    display: block;

    font-weight: bold;

    color: #344054;

    margin-bottom: 8px;
}

#verifyForm input {
    width: 100%;

    padding: 14px;

    box-sizing: border-box;

    border: 1px solid #d6dce5;

    border-radius: 7px;

    margin-bottom: 15px;

    font-size: 14px;
}

#verifyForm input:focus {
    outline: none;

    border-color: #245a9c;
}

#verifyForm button {
    width: 100%;
}


/* RESULT */

.verification-result {
    margin-top: 25px;
}

.result-success {
    padding: 20px;

    background: #eaf8ef;

    border: 1px solid #b8e0c5;

    border-radius: 10px;

    color: #176b35;

    text-align: left;
}

.result-error {
    padding: 20px;

    background: #fff0f0;

    border: 1px solid #f0baba;

    border-radius: 10px;

    color: #a32222;

    text-align: left;
}


/* QR */

.qr-section {
    margin-top: 35px;

    padding-top: 30px;

    border-top: 1px solid #e5e7eb;
}

.qr-placeholder {
    width: 100px;

    height: 100px;

    margin: 0 auto 15px;

    border: 5px solid #173b70;

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: bold;

    color: #173b70;
}

.qr-section h3 {
    color: #344054;

    margin-bottom: 8px;
}

.qr-section p {
    color: #667085;

    font-size: 14px;

    line-height: 1.5;
}


// ===============================
// Dashboard Cards
// ===============================

function showMessage(message) {
    alert(message);
}
/* =========================
   FIELD VERIFICATION
========================= */

.verification-page {
    min-height: 100vh;
    background: #f5f7fa;
    padding: 45px 6%;
}

.verification-heading {
    margin-bottom: 30px;
}

.verification-heading h1 {
    color: #172b4d;
    margin: 5px 0 10px;
}

.verification-heading p {
    color: #667085;
}

.verification-card {
    max-width: 1000px;
    margin: 0 auto 22px;

    background: white;
    padding: 30px;

    border-radius: 12px;

    box-shadow:
        0 4px 15px rgba(0,0,0,0.05);
}

.verification-card h2 {
    color: #173b70;
    margin-bottom: 25px;
}

.verification-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.verification-details div {
    background: #f8fafc;
    padding: 18px;
    border-radius: 8px;
}

.verification-details span {
    display: block;
    color: #667085;
    font-size: 13px;
    margin-bottom: 7px;
}

.verification-details strong {
    color: #344054;
}

.verification-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.verification-grid label,
.verification-card > label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #344054;
    margin-bottom: 8px;
}

.verification-grid input,
.verification-grid select,
.verification-card textarea {
    width: 100%;
    box-sizing: border-box;

    padding: 13px;

    border: 1px solid #d6dce5;
    border-radius: 7px;

    font-size: 14px;
    font-family: inherit;
}

.verification-card input[type="file"] {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 25px;
}

.verification-card textarea {
    resize: vertical;
}

.decision-options {
    display: flex;
    gap: 30px;
}

.decision-options label {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: bold;
    color: #344054;
}

.decision-options input {
    width: auto;
}

.verification-buttons {
    max-width: 1000px;
    margin: 0 auto 40px;

    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

@media (max-width: 700px) {

    .verification-grid,
    .verification-details {
        grid-template-columns: 1fr;
    }

    .decision-options {
        flex-direction: column;
        gap: 15px;
    }

    .verification-buttons {
        flex-direction: column;
    }
}
/* =========================
   DIGITAL CERTIFICATE
========================= */

.certificate-page {
    min-height: 100vh;

    background: #f5f7fa;

    padding: 40px 20px;
}

.certificate-actions {
    max-width: 900px;

    margin: 0 auto 20px;

    text-align: right;
}


.certificate {
    max-width: 900px;

    margin: auto;

    background: white;

    padding: 45px;

    border: 8px double #173b70;

    box-sizing: border-box;

    box-shadow:
        0 8px 30px rgba(0,0,0,0.08);
}


/* HEADER */

.certificate-header {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 20px;

    text-align: center;

    border-bottom: 2px solid #173b70;

    padding-bottom: 25px;
}

.emblem {
    font-size: 55px;
}

.certificate-header h1 {
    color: #173b70;

    font-size: 24px;

    margin: 0 0 8px;
}

.certificate-header p {
    margin: 0 0 15px;

    color: #667085;

    font-size: 14px;
}

.certificate-header h2 {
    margin: 0;

    color: #344054;

    font-size: 20px;
}


/* CERTIFICATE NUMBER */

.certificate-number {
    text-align: center;

    padding: 20px;

    font-size: 15px;

    color: #344054;
}

.certificate-number strong {
    color: #173b70;
}


/* SECTIONS */

.certificate-section {
    margin-top: 25px;
}

.certificate-section h3 {
    background: #173b70;

    color: white;

    padding: 10px 15px;

    margin-bottom: 0;

    font-size: 16px;
}


.certificate-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    border: 1px solid #d6dce5;
}


.certificate-grid div {
    padding: 15px;

    border-bottom: 1px solid #e5e7eb;

    border-right: 1px solid #e5e7eb;
}


.certificate-grid span {
    display: block;

    font-size: 12px;

    color: #667085;

    margin-bottom: 6px;
}


.certificate-grid strong {
    color: #344054;

    font-size: 14px;
}


.valid-text {
    color: #18743a !important;
}


/* NOTE */

.certificate-note {
    margin-top: 30px;

    padding: 18px;

    background: #f8fafc;

    border-left: 4px solid #173b70;

    color: #475467;

    line-height: 1.6;

    font-size: 13px;
}


/* FOOTER */

.certificate-footer {
    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    margin-top: 40px;
}


.qr-code {
    text-align: center;
}

.qr-code div {
    width: 90px;

    height: 90px;

    border: 5px solid #173b70;

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: bold;

    color: #173b70;
}

.qr-code small {
    display: block;

    margin-top: 8px;

    color: #667085;
}


.signature {
    text-align: center;
}

.signature-line {
    width: 180px;

    border-top: 1px solid #344054;

    margin-bottom: 8px;
}

.signature strong {
    color: #344054;

    font-size: 13px;
}

.signature p {
    color: #667085;

    font-size: 12px;

    margin-top: 5px;
}


.certificate-id {
    text-align: center;

    margin-top: 35px;

    padding-top: 15px;

    border-top: 1px solid #d6dce5;

    color: #667085;

    font-size: 12px;
}


/* MOBILE */

@media (max-width: 700px) {

    .certificate {
        padding: 25px;
    }

    .certificate-header {
        flex-direction: column;
    }

    .certificate-grid {
        grid-template-columns: 1fr;
    }

    .certificate-footer {
        flex-direction: column;

        align-items: center;

        gap: 40px;
    }

}


/* PRINT */

@media print {

    .dashboard-header,
    .certificate-actions {
        display: none;
    }

    .certificate-page {
        padding: 0;

        background: white;
    }

    .certificate {
        box-shadow: none;

        max-width: 100%;
    }

}