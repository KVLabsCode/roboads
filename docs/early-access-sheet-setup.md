# Early Access → Google Sheet + confirmation email (no Google Cloud project)

Each `/early-access` submission is sent **from the browser** to a **Google Apps
Script web app**, which:

1. **appends a row** to a Google Sheet, and
2. **emails the signup a confirmation** (from Koushik) with the campaign next-steps.

No Google Cloud project, no service account, no paid email plan — the script
sends the email through the owner's Gmail via `MailApp`.

```
Browser form ──email──> Web3Forms ──> koushik@kovio.dev        (team notification)
            └──lead──> Apps Script ──> Sheet row + MailApp confirmation to signup

/api/leads/export.csv ──GET──> Apps Script ──> rows back as CSV
```

Columns: **Timestamp, Name, Email, Brand, What they'd run, Would pay, Source.**
(No creative — that's handled later in the campaign-management system.)

---

## 1. Apps Script code

In the Sheet, **Extensions → Apps Script**, replace everything in `Code.gs`
with this. **Set `KOUSHIK_LINKEDIN` to Koushik's real LinkedIn URL.**

```javascript
const SHEET_NAME = 'Leads';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Brand', "What they'd run", 'Would pay', 'Source'];

// --- Confirmation email ---
const SIGNER_NAME = 'Koushik';
const REPLY_TO = 'koushik@kovio.dev';
const KOUSHIK_LINKEDIN = 'https://www.linkedin.com/in/REPLACE-ME'; // ← paste Koushik's LinkedIn

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    getSheet().appendRow([
      body.timestamp || new Date().toISOString(),
      body.name || '',
      body.email || '',
      body.brand || '',
      body.idea || '',
      body.pay || '',
      body.source || 'early-access',
    ]);
    sendConfirmation(body); // best-effort
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmation(body) {
  try {
    if (!body.email) return;
    const first = String(body.name || 'there').split(' ')[0];
    const brand = body.brand || 'your brand';
    const steps = [
      ['01', 'We review your goals', `Our team looks at ${brand} and what you'd want to run.`],
      ['02', `${SIGNER_NAME} reaches out`, 'Within a few days, to scope your first campaign and answer questions.'],
      ['03', 'We build the creative', 'We design it for you and map it to robots across San Francisco — the Marina, Hayes Valley, the Mission, and the Embarcadero.'],
      ['04', 'Go live, measured', 'Your campaign runs on our fleet with verified, real-time attribution — impressions, taps, and conversions.'],
    ];
    const rows = steps.map((s) => `
      <tr>
        <td style="vertical-align:top;padding:0 14px 18px 0"><span style="font-family:monospace;font-size:13px;color:#C77C1A;font-weight:bold">${s[0]}</span></td>
        <td style="padding:0 0 18px 0">
          <div style="font-size:15px;font-weight:bold;color:#14130F">${s[1]}</div>
          <div style="font-size:14px;line-height:1.5;color:#3a3833;margin-top:2px">${s[2]}</div>
        </td>
      </tr>`).join('');

    const html = `
    <div style="background:#F1EDE2;padding:40px 0;font-family:Arial,Helvetica,sans-serif">
      <div style="max-width:540px;margin:0 auto;background:#E8E3D4;border:1px solid rgba(20,20,18,0.10);border-radius:16px;padding:36px 32px">
        <div style="font-family:monospace;font-size:11px;letter-spacing:0.08em;color:#C77C1A;text-transform:uppercase;margin-bottom:18px">Kovio &middot; Early Access</div>
        <h1 style="font-size:24px;font-weight:bold;letter-spacing:-0.02em;color:#14130F;margin:0 0 14px">You're in, ${first}.</h1>
        <p style="font-size:15px;line-height:1.6;color:#3a3833;margin:0 0 22px">Thanks for putting ${brand} on the Kovio early-access list — the first programmatic channel for advertising through autonomous robots, live right now across San Francisco. Here's how we'll run your campaign:</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:6px">${rows}</table>
        <p style="font-size:15px;line-height:1.6;color:#3a3833;margin:14px 0 0">I'll be in touch personally within a few days. Reply here anytime with questions — or connect with me below.</p>
        <div style="margin-top:24px;padding-top:18px;border-top:1px solid rgba(20,20,18,0.10)">
          <div style="font-size:15px;font-weight:bold;color:#14130F">${SIGNER_NAME}</div>
          <div style="font-size:13px;color:#6b6258">Kovio — The Robot Economy</div>
          <a href="${KOUSHIK_LINKEDIN}" style="font-size:13px;color:#C77C1A;text-decoration:none">Connect on LinkedIn &rarr;</a>
        </div>
      </div>
    </div>`;

    MailApp.sendEmail({
      to: body.email,
      subject: "You're on the Kovio early-access list — here's what's next",
      htmlBody: html,
      name: 'Koushik · Kovio',
      replyTo: REPLY_TO,
    });
  } catch (err) {
    // best-effort — never fail the submission because of email
  }
}

function doGet() {
  const values = getSheet().getDataRange().getValues();
  const rows = values.slice(1).map(function (r) {
    return { timestamp: r[0], name: r[1], email: r[2], brand: r[3], idea: r[4], pay: r[5], source: r[6] };
  });
  return ContentService.createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 2. Apply the update

1. **Paste** the code above, replacing `KOUSHIK_LINKEDIN`. **Save (Cmd+S).**
2. **Clear the old columns:** the sheet's `Leads` tab still has the old
   `Creative` column. Easiest: right-click the **Leads** tab → **Delete**. The
   script recreates a clean 7-column tab on the next submission. (It's only test
   data so far.)
3. **Re-authorize email:** in the editor, pick **`doGet`** in the function
   dropdown → **Run**. A new consent appears (now including *"Send email as
   you"*) → **Advanced → Go to … → Allow**. This grants the email permission.
4. **Redeploy:** **Deploy → Manage deployments → ✏️ Edit → Version: New version
   → Deploy.** The `/exec` URL stays the same.

The confirmation email is sent from the script owner's Gmail
(koushikbusiness2000@gmail.com), with reply-to **koushik@kovio.dev**. Gmail's
free `MailApp` quota is ~100 emails/day — plenty for the waitlist.

---

## 3. Internal CSV export

`/api/leads/export.csv?key=YOUR_PASSWORD` (set `LEADS_EXPORT_PASSWORD`) returns
the same 7 columns as a download.
