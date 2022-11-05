import { Layout, Menu } from 'antd';
const { Header } = Layout;
import Image from 'next/image';

export const Navbar = () => {
  return (
    <Header className="flex flex-row items-center justify-center">
      <Image alt="Logo" src={'/stress-alert.png'} height={'30'} width={'30'} />
      <h1 className="text-2xl text-white ml-4">Stress Alert Dashboard</h1>
    </Header>
  );
};

export default Navbar;
