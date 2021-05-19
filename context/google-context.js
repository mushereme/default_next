import React, { useState, useEffect } from "react";
import { getDocData, getSheetData } from "lib/sheet";
import { isEmpty } from "lodash";

const GoogleContext = React.createContext();

export const GoogleProvider = (props) => {
  const [sheets, setSheets] = useState([]);

  const loadSheets = async (myGoogleSpreadsheetId) => {
    const sheets = (await getSheetData()) || [];
    setSheets(sheets);
  };

  return (
    <GoogleContext.Provider value={{ sheets, loadSheets }}>
      {props.children}
    </GoogleContext.Provider>
  );
};

export default GoogleContext;
