import React from "react";

import Card02 from "../Card/Card02";

const Card01 = () => {

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className=" mx-12">
          <div className="grid md:grid-cols-3 sm:grid-cols-1">
            <div className="text-center">
              <Card02 
                title="Хамгийн <b>гайхалтай</b> бэлэг" 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1658634745/BKO/assets/293240128_379903704175510_3255128250192003776_n_uiruxg.png"
              />            
            </div>
            <div className="text-center">
              <Card02 
                title="Тэд таны өгсөн бэлгийг <b>хэзээ ч мартахгүй</b>" 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1658634745/BKO/assets/291661710_1050049962310489_7850547913230053134_n_xcjpf0.png"
              />
            </div>
            <div className="text-center">
              <Card02 
                title="Хөрөнгө оруулагч болоход <b>хялбар</b> " 
                img="https://res.cloudinary.com/daliec2ib/image/upload/v1658634745/BKO/assets/293629701_606351410827265_4747470106313602167_n_fxzsea.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card01;