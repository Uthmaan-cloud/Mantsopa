# Mantsopa Financial Services website

A static website (HTML, CSS, JavaScript). No build step, no paid tools, no tracking.

## Files
- `config.js`: email, WhatsApp number, service area, optional form service. **The only file you need to edit for contact details.**
- `index.html`, `services.html`, `about.html`, `who-we-help.html`, `request-a-quote.html`, `contact.html`, `privacy-policy.html`
- `styles.css`, `main.js`, `robots.txt`, `sitemap.xml`

## Publish for free on GitHub Pages (in the browser, no software needed)
1. Create a free account at github.com.
2. Click **New repository**, name it (for example `mantsopa`), choose **Public**, click **Create repository**.
3. Click **uploading an existing file**, drag in ALL the files from this folder (not the folder itself), click **Commit changes**.
4. Go to **Settings > Pages**. Under Branch choose `main` and `/ (root)`, click **Save**.
5. After a minute the site is live at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
6. Open `sitemap.xml` and `robots.txt` on GitHub, click the pencil icon, and replace `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` with your real address. Do the same in the `canonical`/`og:url` lines if you want them exact (search for `YOUR-USERNAME` in each page).

## Update contact details
On GitHub open `config.js`, click the pencil icon, change the value, click **Commit changes**. For WhatsApp enter digits only with country code, for example `27XXXXXXXXX`. Until you add a number, WhatsApp buttons stay hidden. Do not invent a number.

## How enquiries work (be aware of the limits)
- **Default (works with R0 and no setup):** the form opens the visitor's email app with the enquiry pre-filled. It only reaches you if they press Send. Some visitors have no email app set up, so the page also shows your email address. The site cannot confirm delivery, so it never says "sent" in this mode.
- **Optional upgrade:** a free form service (for example Formspree or Web3Forms) can deliver submissions to your inbox and confirm success. Sign up, get your form URL, paste it into `formEndpoint` in `config.js`. Free plans have monthly submission limits and change over time, so check their current terms. Add the service to the Privacy Policy when you enable it. This was not set up or tested because it needs your own account.
- WhatsApp uses a standard `wa.me` link and needs your real number.

## Free hosting limitations
Address ends in `github.io` unless you buy a domain later. Public repository means your files are public: never put client information in it. Email through a Gmail address looks less professional than a business domain.

## Test the published site
Open it on your phone and computer. Click every menu link and button. Submit the form and confirm the email arrives. Tap the WhatsApp button once your number is set. Check the page works with the keyboard (Tab key).

## Pre-launch checklist
- [ ] Replace `YOUR-USERNAME`/`YOUR-REPOSITORY` in `sitemap.xml`, `robots.txt` and pages
- [ ] Confirm email in `config.js`; add WhatsApp number if you have one
- [ ] Complete the `[bracketed]` items in the Privacy Policy
- [ ] Complete the POPIA items below
- [ ] Confirm which services you may lawfully offer (below)
- [ ] Send yourself a test enquiry
- [ ] Optionally add the site to Google Search Console (free)

## Items needing professional or legal confirmation
- POPIA: whether you must register an Information Officer with the Information Regulator, retention period, and whether the Privacy Policy suits your actual processing.
- Tax: whether you need SARS tax practitioner registration (and recognised controlling body membership) before preparing or submitting returns for clients.
- Payroll: SARS eFiling/EMP201/EMP501 access, client authorisation, software, UIF/SDL/COIDA obligations. See `PAYROLL-LAUNCH-CHECKLIST.md`.
- Financial statements: whether the engagement type and the Companies Act require an independent review or specific professional status.
- CIPC: registration or agent requirements for company registration and beneficial ownership filings.
- Professional indemnity insurance and client engagement letters.

## Not done or not tested
- Form-service delivery (needs your account). Visual review on real phones. Everything here was checked only by an automated script, see the summary in chat.
