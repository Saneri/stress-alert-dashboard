import { Layout, Menu } from 'antd';
const { Header } = Layout;

export const Navbar = () => {
  return (
    <Header>
      <Menu mode="horizontal"></Menu>
    </Header>
  );
};

export default Navbar;
