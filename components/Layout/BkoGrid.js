import React from "react";

import Card01 from "../Card/Card01";

const BkoGrid = (props) => {

  const { data } = props;

  console.log("=== GRID DATA: ", data)

  return (
    <div className="bg-white">
      <div className="container mx-auto text-center">
        <div 
          className="uppercase pt-2"
          style={{
            color: "#5BA8FF",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "34px",
            lineHeight: "54px"
          }}
        >
          Хамтрагч байгууллагууд
        </div>
        <div className="mx-12">
          <div className={`grid md:grid-cols-4 sm:grid-cols-2`}>
            {data.map((item, index) => {
              return (
                <Card01 
                  key={index}
                  title={item.partnerName}
                  url={item.url}
                  img={item.imageUrl}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BkoGrid;