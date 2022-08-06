import React from "react";

import Card02 from "../Card/Card02";

const Card01 = () => {

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="">
          <div className="grid md:grid-cols-3 sm:grid-cols-1">
            <div className="text-center">
              <Card02 
                
                title="Хамгийн гайхалтай бэлэг" 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1659616954/BKO/assets/gift_jphhiz.gif"
              />            
            </div>
            <div className="text-center">
              <Card02 
                title="Тэд таны өгсөн бэлгийг хэзээ ч мартахгүй" 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1659616958/BKO/assets/never_daxrqu.gif"
              />
            </div>
            <div className="text-center">
              <Card02 
                title="Хөрөнгө оруулагч болоход хялбар" 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1659616955/BKO/assets/ez_znsich.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card01;