import React from "react";


const Card02 = (props) => {

  const { img, title } = props;

  return (
    <div className="2xl:m-3 2xl:p-3  xl:m-2 xl:p-2 lg:m-2 lg:p-2 md:p-4 md:m-4 m-2 p-2 text-center">
      <div
        className="2xl:h-36 xl:h-24 lg:12 md:h-36 h-24"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundImage: `url(${img ? img : 'https://res.cloudinary.com/daliec2ib/image/upload/v1658634745/BKO/assets/293629701_606351410827265_4747470106313602167_n_fxzsea.png'})`
        }}  
      >
      </div>      
      <span
        className="mt-4 w-48 mx-auto text-base font-normal font-sans text-indigo-900 tracking-tight leading-6" 
        style={{
          textAlign: "center",
          color: "#DDAC6D"
        }}
      >
        {title}
      </span>  
    </div>
  );
};

export default Card02;