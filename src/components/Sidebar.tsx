import { Users, Shield, Key, Menu } from 'lucide-react';
import { TabType } from '../types';

type Props = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

export default function Sidebar({ activeTab, onTabChange }: Props) {
  const tabs = [
    { id: 'users' as TabType, label: 'Users', icon: Users },
    { id: 'roles' as TabType, label: 'Roles', icon: Shield },
    { id: 'permissions' as TabType, label: 'Permissions', icon: Key },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <Menu className="h-6 w-6" />
        <h1 className="text-xl font-bold">RBAC Dashboard</h1>
      </div>
      <nav>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="h-5 w-5" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}