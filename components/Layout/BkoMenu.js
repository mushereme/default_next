import React from "react";
import BkoLogo from "./BkoLogo";
import { 
    Menu
} from 'antd';

export const BkoMenu = () => {

  return (
    <div className=" container mx-auto my-auto">
      <div className='border-none'>
        <Menu mode="horizontal" >
          <Menu.Item key="logo">
            <BkoLogo />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}
