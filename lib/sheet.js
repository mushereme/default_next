import { GoogleSpreadsheet } from "google-spreadsheet";
import { callDataComplex02, prepareSheetsArray } from "lib/googleSheetFunction";
import { useGoogle } from "hooks/use-google";
import { isEmpty } from "lodash";

let ourSheets = null;

const getDoc = async (myGoogleSpreadsheetId) => {
  const googleSheetID = myGoogleSpreadsheetId;
  const doc = new GoogleSpreadsheet(googleSheetID);
  await doc.useApiKey("AIzaSyC0fPD7-kCcTj_N4ks6kVbWZvdTgxnSK00");
  await doc.loadInfo();

  return doc;
};

const getSheets = async () => {
  const doc = await getDoc("1yaewYJGHhToygjNw3_L6eoPvIaR0yOoQpBaz9mo68sI");
  const sheetsArray = prepareSheetsArray(doc.sheetsByIndex || []);

  const promises = sheetsArray.map(async (sheet) => {
    return {
      sheetData: sheet,
      widgets: (await callDataComplex02(doc, sheet.title)) || [],
    };
  });
  const sheets = (await Promise.all(promises)) || [];

  ourSheets = sheets;

  return sheets;
};

export const getDocData = async () => {
  const doc = await getDoc("1yaewYJGHhToygjNw3_L6eoPvIaR0yOoQpBaz9mo68sI");
  return doc;
};

export const getSheetData = async () => {

  const sheets = await getSheets();

  return sheets;
};
