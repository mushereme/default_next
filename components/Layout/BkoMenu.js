import React from "react";
import { 
    Menu
} from 'antd';

export const BkoMenu = () => {

  return (
    <div className=" container mx-auto my-auto">
      <div className='border-none mt-2'>
        <Menu mode="horizontal" >
          <Menu.Item key="logo">
            <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1658147950/BKO/assets/273269846_956798281707222_3269984056906119710_n_gccix1.png' width="50px" height="auto"/>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}