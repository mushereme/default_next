import React from "react";


const Card02 = (props) => {

  const { img, title } = props;

  return (
    <div className="p-4 m-4 text-center">
      <div
        className="h-36"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundImage: `url(${img ? img : 'https://res.cloudinary.com/daliec2ib/image/upload/v1658634745/BKO/assets/293629701_606351410827265_4747470106313602167_n_fxzsea.png'})`
        }}  
      >
      </div>      
      <div className="mt-4 w-48 mx-auto text-lg font-normal font-sans text-indigo-900 tracking-tight leading-6">
        <div dangerouslySetInnerHTML={{__html: title}} />
      </div>  
    </div>
  );
};

export default Card02;