import { Layout } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SlidersOutlined,
  SlackOutlined,
  LineChartOutlined
} from '@ant-design/icons';
const { Header } = Layout;
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', key: 'dashboard', icon: <DashboardOutlined /> },
  { label: 'Reports', key: 'reports', icon: <LineChartOutlined /> },
  { label: 'Users', key: 'users', icon: <UserOutlined /> },
  { label: 'Connections', key: 'connections', icon: <SlackOutlined /> },
  { label: 'Settings', key: 'settings', icon: <SlidersOutlined /> }
];

export const Navbar = () => {
  return (
    <Header className="bg-white shadow-lg flex flex-row items-center">
      <Image alt="Logo" src={'/stress-alert.png'} height={'30'} width={'30'} />
      <h1 className="text-xl ml-8 mr-4">Stress Alert</h1>
      <nav className="flex flex-row items-center">
        {navItems.map((item) => (
          <Link
            href="/"
            className="flex flex-row mx-4 items-center"
            key={item.key}
          >
            {item.icon}
            &emsp;
            {item.label}
          </Link>
        ))}
      </nav>
    </Header>
  );
};

export default Navbar;
