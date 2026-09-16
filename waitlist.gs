// ViSO waitlist — Google Apps Script bound to a Google Sheet.
//
// Sheet "Waitlist": one row per sign-up (time, email, language, page).
// POST {email, language, page} appends a row (an email already there is not
// added twice). GET ?count=1 answers {"count": N}. Deploy as a web app,
// "Execute as: Me", "Who has access: Anyone", and paste the /exec URL into
// WAITLIST_APPS_SCRIPT in index.html.
var SHEET = 'Waitlist';

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(['time', 'email', 'language', 'page']); }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function count_() {
  var sh = sheet_();
  return Math.max(0, sh.getLastRow() - 1);
}

function doGet(e) {
  return json_({ count: count_() });
}

function doPost(e) {
  var data = {};
  try { data = JSON.parse(e.postData.contents || '{}'); } catch (err) {}
  var email = String(data.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json_({ ok: false, error: 'invalid email', count: count_() });
  var lock = LockService.getScriptLock(); lock.waitLock(5000);
  try {
    var sh = sheet_();
    var emails = sh.getLastRow() > 1 ? sh.getRange(2, 2, sh.getLastRow() - 1, 1).getValues().map(function (r) { return String(r[0]).toLowerCase(); }) : [];
    if (emails.indexOf(email) < 0) sh.appendRow([new Date(), email, String(data.language || ''), String(data.page || '')]);
  } finally { lock.releaseLock(); }
  return json_({ ok: true, count: count_() });
}
