// Paste in script.google.com (signed in as ahmedmassouddev@gmail.com), set SHEET_ID, Deploy > Web app (Execute as: Me, Access: Anyone).
const SHEET_ID = "1FNscWDSYwh9r1HbkEXkYr_GVsbqhlAH8efV95VfEOBk";
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.openById(SHEET_ID).getSheetByName("Messages")
    .appendRow([new Date(), d.name, d.email, d.subject, d.message]);
  return ContentService.createTextOutput("ok");
}
