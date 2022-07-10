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
            <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1657370030/BKO/236309417_128750226130749_2479255844028366833_n_w3o7d8.png' width="50px" height="auto"/>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}