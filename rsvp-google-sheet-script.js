/**
 * =========================================================================
 * Google Apps Script for Akash & Vaishnavi's Wedding Website
 * Target Sheet: https://docs.google.com/spreadsheets/d/1yePJoFPp0TiU1Xi6_6-z5VSGA2Tlnc8HR5Yo1w_OVMY/
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1yePJoFPp0TiU1Xi6_6-z5VSGA2Tlnc8HR5Yo1w_OVMY/
 * 2. In the top menu, click: Extensions > Apps Script
 * 3. Delete any code in Code.gs and replace it with this entire script.
 * 4. Click the "Save" (disk icon).
 * 5. Click "Deploy" (top right) > "New deployment"
 * 6. Click the gear icon next to "Select type" and choose "Web app"
 * 7. Fill in:
 *    - Description: Wedding RSVP API
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone  <-- (IMPORTANT: Choose "Anyone" so guests can submit RSVPs)
 * 8. Click "Deploy", then "Authorize access" (choose your Google account, click Advanced -> Go to Untitled project / Allow).
 * 9. Copy the "Web app URL" (starts with https://script.google.com/macros/s/.../exec)
 * 10. Paste this URL into `src/config/wedding.config.js` in the `rsvpScriptUrl` field.
 */
// https://script.google.com/macros/s/AKfycbyEj-_LzG2aUY6-aw_118coQZJ4uxZETeJQdfKGgNf62wxopadL70D3Xymsio4EuiEEnw/exechttps://script.google.com/macros/s/AKfycbyEj-_LzG2aUY6-aw_118coQZJ4uxZETeJQdfKGgNf62wxopadL70D3Xymsio4EuiEEnw/exec
// AKfycbyEj-_LzG2aUY6-aw_118coQZJ4uxZETeJQdfKGgNf62wxopadL70D3Xymsio4EuiEEnwAKfycbyEj-_LzG2aUY6-aw_118coQZJ4uxZETeJQdfKGgNf62wxopadL70D3Xymsio4EuiEEnw

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Parse incoming data
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var type = (data.type || data.formType || "rsvp").toLowerCase();

    if (type === "blessing" || type === "blessings") {
      // Handle Blessings sheet
      var blessingSheet = ss.getSheetByName("Blessings");
      if (!blessingSheet) {
        blessingSheet = ss.insertSheet("Blessings");
      }
      if (blessingSheet.getLastRow() === 0) {
        blessingSheet.appendRow(["Submission Timestamp (IST)", "Guest Name", "Blessing / Message"]);
        blessingSheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#F8F3EA");
      }

      var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
      var blessingName = data.name || data.blessingName || "";
      var message = data.message || data.blessingMessage || "";

      blessingSheet.appendRow([timestamp, blessingName, message]);

      return ContentService
        .createTextOutput(JSON.stringify({ result: "success", type: "blessing" }))
        .setMimeType(ContentService.MimeType.JSON);

    } else {
      // Handle RSVP sheet (default)
      var rsvpSheet = ss.getSheetByName("RSVP");
      if (!rsvpSheet) {
        var firstSheet = ss.getActiveSheet();
        if (firstSheet.getName() === "Sheet1") {
          firstSheet.setName("RSVP");
          rsvpSheet = firstSheet;
        } else {
          rsvpSheet = ss.getSheetByName("RSVP") || ss.insertSheet("RSVP");
        }
      }

      // If headers do not exist, create styled headers
      if (rsvpSheet.getLastRow() === 0) {
        rsvpSheet.appendRow([
          "Submission Timestamp (IST)", 
          "Guest / Family Name", 
          "Date of Arrival", 
          "Travelling By", 
          "Count of Person"
        ]);
        rsvpSheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#F8F3EA");
      }

      var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
      var name = data.name || data.rsvpName || "";
      var arrivalDate = data.arrivalDate || data.rsvpArrivalDate || "";
      var travelBy = data.travelBy || data.rsvpTravelBy || "Not specified";
      var personCount = data.personCount || data.rsvpPersonCount || 1;

      rsvpSheet.appendRow([
        timestamp,
        name,
        arrivalDate,
        travelBy,
        personCount
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ result: "success", type: "rsvp" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var blessingSheet = ss.getSheetByName("Blessings");
    
    if (!blessingSheet || blessingSheet.getLastRow() <= 1) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          result: "success", 
          status: "alive",
          message: "Blessings tab initialized",
          blessings: [] 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var lastRow = blessingSheet.getLastRow();
    // Read all rows starting from row 2 (Timestamp, Guest Name, Blessing / Message)
    var values = blessingSheet.getRange(2, 1, lastRow - 1, 3).getValues();
    var blessings = [];
    
    for (var i = 0; i < values.length; i++) {
      var rawTimestamp = values[i][0];
      var name = values[i][1];
      var message = values[i][2];
      
      if (name && message) {
        var formattedDate = "Recent";
        if (rawTimestamp instanceof Date) {
          formattedDate = Utilities.formatDate(rawTimestamp, "Asia/Kolkata", "dd MMM yyyy");
        } else if (rawTimestamp) {
          formattedDate = String(rawTimestamp).split(" ")[0];
        }
        
        blessings.push({
          id: "sheet-" + (i + 1),
          name: String(name).trim(),
          message: String(message).trim(),
          date: formattedDate
        });
      }
    }
    
    // Return newest blessings first
    blessings.reverse();
    
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        blessings: blessings
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        error: err.toString(),
        blessings: []
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

