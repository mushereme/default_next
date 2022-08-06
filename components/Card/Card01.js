import React from "react";

import { Tooltip } from "antd";

const Card01 = (props) => {

  const { url, title, img, key } = props;

  return (
    <div className="p-4 mx-4 text-center" key={key}>
      <Tooltip title={title}>
        <span>
          <a href={url}>
            <div
              className="h-16"
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: `url(${img ? img : 'https://res.cloudinary.com/daliec2ib/image/upload/v1658634747/BKO/assets/293250733_332051489012918_5384948420088441653_n_xa4bdr.png'})`
              }}  
              >
            </div>
          </a>
        </span>
      </Tooltip>
    </div>
  );
};

export default Card01;