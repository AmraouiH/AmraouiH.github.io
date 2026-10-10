<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Privacy Policy — Dynamics 365 Form Analyzer</title>
    <style>
      body {
        font: 16px/1.6 'Segoe UI', system-ui, sans-serif;
        color: #1c2030;
        max-width: 760px;
        margin: 0 auto;
        padding: 40px 20px 80px;
      }
      h1 {
        font-size: 28px;
        margin-bottom: 4px;
      }
      h2 {
        font-size: 19px;
        margin-top: 36px;
      }
      .muted {
        color: #646b82;
      }
      a {
        color: #5558e3;
      }
    </style>
  </head>
  <body>
    <h1>Privacy Policy</h1>
    <p class="muted">Dynamics 365 Form Analyzer — browser extension<br />Last updated: 9 October 2026</p>

    <p>
      Dynamics 365 Form Analyzer analyzes the Dynamics 365 or Power Apps model-driven form you have open and shows a
      best-practice report. This page explains what the extension reads and what happens to it.
    </p>

    <h2>In short</h2>
    <p>
      The extension works entirely inside your browser. It does not collect, transmit, sell or share any data. It has no
      server, no account, no analytics and no advertising.
    </p>

    <h2>What the extension reads</h2>
    <p>Only when you click <strong>Analyze form</strong> or <strong>Measure execution time</strong>, the extension reads from the form open in the active tab:</p>
    <ul>
      <li>the form definition: tabs, sections, controls, grids, event handlers and the form's XML;</li>
      <li>the name of the table, the name and identifier of the open record, and whether each field is empty, required or changed (field values themselves are not kept);</li>
      <li>the source code of the JavaScript and HTML web resources attached to the form;</li>
      <li>the names and status of the business rules of the table;</li>
      <li>the name and version of your environment and of the app;</li>
      <li>how long the form's scripts take to download and to run.</li>
    </ul>
    <p>
      To read this, the extension calls your own Dynamics 365 environment, with your existing session and your own
      permissions. It cannot read anything you are not already allowed to see.
    </p>

    <h2>Where the data goes</h2>
    <p>
      Nowhere. The data is processed in your browser's memory to build the report and is discarded when you close the
      side panel or run a new analysis. The extension makes no request to any server other than the Dynamics 365
      environment you are analyzing.
    </p>

    <h2>What is stored</h2>
    <ul>
      <li>Your language preference (English or French) is saved in the extension's local storage on your device.</li>
      <li>
        If you export a report (HTML or JSON), a file is saved on your device through your browser's download. It
        contains the analysis results, including the table name, the record name and identifier, and the names of forms,
        fields, scripts and business rules. You decide where it is saved and who you share it with.
      </li>
    </ul>

    <h2>Changes made to the page</h2>
    <p>
      The <strong>Measure execution time</strong> feature reloads the form and temporarily wraps the functions of the
      form's own scripts to time them. This only affects the open browser tab and disappears when the page is reloaded
      or closed. The extension never changes or saves any record or customization in your environment.
    </p>

    <h2>Permissions</h2>
    <ul>
      <li><strong>Access to Dynamics 365 domains</strong> — to read the form you ask the extension to analyze.</li>
      <li>
        <strong>Access to another site</strong> — only if you analyze an on-premises or custom-domain environment, and
        only for that site, after you approve Chrome's permission prompt.
      </li>
      <li><strong>Scripting</strong> — to read the form through the Dynamics 365 client API.</li>
      <li><strong>Side panel</strong> — to display the report.</li>
    </ul>

    <h2>Third parties</h2>
    <p>
      No data is shared with third parties. Findings in the report link to documentation pages on learn.microsoft.com;
      those pages are only opened if you click a link.
    </p>

    <h2>Changes to this policy</h2>
    <p>If the extension's behavior changes, this page will be updated and the date above revised.</p>

    <h2>Contact</h2>
    <p>Questions about this policy: <strong>hamzamraoui11@gmail.com</strong></p>

    <p class="muted">
      Dynamics 365 Form Analyzer is an independent tool. It is not affiliated with, endorsed by or sponsored by
      Microsoft. Dynamics 365 and Power Apps are trademarks of the Microsoft group of companies.
    </p>
  </body>
</html>
