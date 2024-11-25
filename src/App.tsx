import { useState } from 'react';
import Sidebar from './components/Sidebar';
import UsersTab from './components/UsersTab';
import RolesTab from './components/RolesTab';
import PermissionsTab from './components/PermissionsTab';
import { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UsersTab />;
      case 'roles':
        return <RolesTab />;
      case 'permissions':
        return <PermissionsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
}

export default App;