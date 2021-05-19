import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Empty, Skeleton } from "antd";

const GoogleSpreadsheetLoad = ({ widgets = [] }) => {
  // const mySheets = doc?.sheetByIndex || [{ title: "Content01" }];

  // console.log("MYSHEETS", mySheets);

  return (
    <>
      <div className="mb-16" style={{ fontWeight: "700", fontSize: "2.5rem" }}>
        {/* {upperFirst(firmName)} {upperFirst(markName)} */}
      </div>

      {/* {!myDoc.loading ? ( */}
      <>
        {mySheets.map((item, index) => {
          const mySheetName = item.title;
          if (mySheetName.substring(0, 1) !== "*") {
            let MyPageContent = <></>;

            if (mySheetName === "Content01") {
              MyPageContent = dynamic(
                () => import(`../Widget/Google/PageContent`),
                {
                  loading: () => (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description="Харуулах юмгүй"
                    ></Empty>
                  ),
                }
              );
            } else {
              MyPageContent = dynamic(
                () => import(`../Widget/Google/${mySheetName}`),
                {
                  loading: () => (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description="Харуулах юмгүй"
                    ></Empty>
                  ),
                }
              );
            }

            return (
              <MyPageContent
                doc={myDoc.doc}
                sheetName={mySheetName}
                key={index}
              />
            );
          }
        })}
      </>
      {/* ) : (
        <Skeleton active />
      )} */}
      <div className="gx-mt-5"></div>
    </>
  );
};

export default GoogleSpreadsheetLoad;
