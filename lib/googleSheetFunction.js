import { isEmpty } from "lodash";

export const callDataComplex02 = async (doc, sheetName) => {
  if (isEmpty(doc)) return [];
  const sheet = doc.sheetsByTitle[sheetName];
  if (isEmpty(sheet)) return [];
  await sheet.loadCells(`A1:${sheet.lastColumnLetter}${sheet.rowCount}`);

  const myCells = sheet._cells;

  //WidgetName-ээр салгаж, массивт хийнэ.
  let widgets = [];
  let widgetRows = [];
  myCells.map((item, index) => {
    if (item[0]?.value?.toString().toLowerCase() === "widgetname") {
      if (!isEmpty(widgetRows)) widgets.push([...widgetRows]);
      widgetRows.length = 0;
      widgetRows.push(item);
    } else {
      widgetRows.push(item);
    }
    if (index === myCells.length - 1) {
      widgets.push([...widgetRows]);
    }
  });

  // console.log("widgets", widgets);

  //салгасан массиваа гүйлгэж, Row-уудаа бүтэцлэгдсэн Объект болгож авна.
  let lastWidgets = [];
  widgets.map((item, index) => {
    lastWidgets.push(prepareMyWidget(item));
  });

  // console.log("lastWidgets", lastWidgets);

  return lastWidgets;
};

const cellFields = [
  "a1Address",
  "a1Column",
  "a1Row",
  // "backgroundColor",
  // "borders",
  "columnIndex",
  "effectiveFormat",
  "formattedValue",
  "formula",
  "formulaError",
  // "horizontalAlignment",
  "hyperlink",
  // "hyperlinkDisplayType",
  "note",
  // "numberFormat",
  // "padding",
  "rowIndex",
  // "textDirection",
  // "textFormat",
  // "textRotation",
  // "userEnteredFormat",
  "value",
  "valueType",
  // "verticalAlignment",
  // "wrapStrategy",
];

const prepareMyWidget = (item) => {
  if (isEmpty(item))
    return {
      widget: {
        mainConfig: {},
        header: {},
        rows: [],
      },
    };
  //  #    # # #####   ####  ###### #####
  //  #    # # #    # #    # #        #
  //  #    # # #    # #      #####    #
  //  # ## # # #    # #  ### #        #
  //  ##  ## # #    # #    # #        #
  //  #    # # #####   ####  ######   #
  let myWidgetConfig = {};
  let rowsStartRow = 0;
  for (let i = 0; i < item.length; i++) {
    if (
      !isEmpty(item[i][0].value) &&
      item[i][0].value.toLowerCase() !== "rows"
    ) {
      const myTempCell = item[i][1];
      // let tempItem = {
      //   value: myTempCell.value,
      //   note: myTempCell.note,
      // };

      //Дотор бүх Google Cell-ийн key/value-аар гүйж авч байна.
      let fff = {};
      cellFields.map((item, index) => {
        fff[item] = myTempCell[item] || null;
      });
      fff = JSON.parse(JSON.stringify(fff));

      if (!isEmpty(fff.value)) {
        if (fff.value?.charAt(0) === "{") {
          fff.value = JSON.parse(fff.value);
        }

        myWidgetConfig = {
          ...myWidgetConfig,
          [item[i][0]?.value]: fff,
        };
      }
    } else {
      rowsStartRow = i;
      break;
    }
  }

  //HEADER ROW
  let headerRow = {};
  for (let j = 0; j < item[0].length; j++) {
    const myTempCell = item[rowsStartRow + 1][j]; //  sheet.getCell(rowsStartRow + 1, j);
    headerRow[j] = myTempCell.value || myTempCell.a1Address;
  }

  //ROWS
  let tempData = [];
  for (let i = rowsStartRow + 2; i < item.length; i++) {
    let tempItem = {};
    for (let j = 0; j < item[0].length; j++) {
      const myTempCell = item[i][j];

      // tempItem[headerRow[j]] = myTempCell;
      // tempItem[headerRow[j]] = {};

      let fff = {};
      cellFields.map((item, index) => {
        // console.log(myTempCell);
        // debugger;
        // if (myTempCell[item]) {
        fff[item] = myTempCell[item] || null;
        // }
      });
      fff = JSON.parse(JSON.stringify(fff));

      tempItem[headerRow[j]] = fff;
    }
    tempData.push(tempItem);
  }

  //------------------
  const myLastWidget = {
    widget: {
      mainConfig: {
        ...myWidgetConfig,
      },
      header: { ...headerRow },
      rows: [...tempData],
    },
  };

  return myLastWidget;
};

export const prepareSheetsArray = (sheets) => {
  // console.log("IN HERE Sheets", sheets);
  let mySheets = [];

  sheets.map((sheet, index) => {
    const sheetObject = {
      title: sheet.title,
      index: sheet.index,
      sheetId: sheet.sheetId,
      tabColor: sheet.tabColor,
      columnCount: sheet.columnCount,
      rowCount: sheet.rowCount,
      sheetType: sheet.sheetType,
    };
    mySheets.push(sheetObject);
  });

  return mySheets;
};
