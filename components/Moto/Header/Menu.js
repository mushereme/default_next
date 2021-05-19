import { Menu, Button } from "antd";

const { SubMenu } = Menu;

const myMenuData = [
  { title: "Бараа" },
  { title: "Нийтлэл" },
  { title: "Каталоги" },
  { title: "Автозар" },
];

export default function MenuComponent({ item }) {
  return (
    <>
      <div className="bg-moto w-full" style={{ height: "10px" }}></div>
      <div className="bg-black w-full " style={{ height: "65px" }}>
        <div className="max-w-screen-xl w-full mx-auto h-full flex flex-row items-center">
          <div className="text-white mr-auto ml-2">
            <img style={{ height: "48px" }} src="/logo_white.svg" />
          </div>
          <div className="text-white mx-auto h-full">
            <Menu
              defaultSelectedKeys={["1"]}
              mode="horizontal"
              className="h-full bg-transparent border-none"
            >
              {myMenuData.map((item, index) => {
                return (
                  <Menu.Item
                    key={index}
                    className="h-full text-white text-xs"
                    style={{ paddingTop: "25px" }}
                  >
                    {item.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
          <div className="text-white ml-auto mr-2 flex flex-row items-center text-xs">
            <div className="mr-7">
              <div>-8</div>
              <div>Цаг агаар</div>
            </div>
            <div className="mr-7">
              <div>2850</div>
              <div>Валютын ханш</div>
            </div>
            <div className="">
              <Button
                ghost
                className="rounded-full border-moto hover:border-moto-darkest hover:text-moto text-xs text-moto hover:text-moto-darkest"
              >
                Нэвтрэх
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
