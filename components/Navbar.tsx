import { Layout, Menu } from 'antd';
import Image from 'next/image';
const { Header } = Layout;

export const Navbar = () => {
  return (
    <Header>
      <Menu mode="horizontal">
        {/* <Image
          alt="stress alert logo"
          src="/public/stress-alert.png"
          width="100"
          height="100"
        ></Image> */}
      </Menu>
    </Header>
  );
};

export default Navbar;
