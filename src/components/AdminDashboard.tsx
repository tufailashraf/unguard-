import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  FileText,
  Settings,
  LogOut,
  Upload,
  Edit,
  Trash
} from 'lucide-react';
import Logo from '../assets/logo.png';

interface AdminDashboardProps {
  onNavigate?: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('references');

  const handleLogout = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: BookOpen, label: 'Manage References', id: 'references' },
    { icon: Video, label: 'Manage Videos', id: 'videos' },
    { icon: FileText, label: 'Manage Exams', id: 'exams' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const references = [
    { name: 'Circuit Diagrams', uploadDate: '12 Feb 2025' },
    { name: 'Repair Manual', uploadDate: '10 Feb 2025' },
    { name: 'Wiring Standards', uploadDate: '08 Feb 2025' },
  ];

  const NavButton = ({ item, isActive }: { item: typeof navItems[0], isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(item.id)}
      className={`flex items-center gap-3 w-full px-4 py-3 text-left
        ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
    >
      <item.icon size={20} />
      <span>{item.label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        {/* Logo */}


        {/* Navigation */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
            />
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 border-t"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}


        {/* Content */}
        <div className="p-8">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 px-4 py-2 text-gray-600">
              Filter ▼
            </button>
          </div>

          {/* Reference Table */}
          <div className="bg-white rounded-lg border overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">📄 Document Name</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-500 hidden sm:table-cell">📅 Upload Date</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">⚡ Actions</th>
                </tr>
              </thead>
              <tbody>
                {references.map((ref, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 sm:px-6 py-4">
                      <div>
                        <span className="font-medium">{ref.name}</span>
                        <span className="block sm:hidden text-sm text-gray-500 mt-1">{ref.uploadDate}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 hidden sm:table-cell whitespace-nowrap">{ref.uploadDate}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 sm:px-4 py-2 bg-yellow-500 text-white rounded flex items-center gap-1 text-sm whitespace-nowrap">
                          <Edit size={16} />
                          <span className="hidden xs:inline">Edit</span>
                        </button>
                        <button className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded flex items-center gap-1 text-sm whitespace-nowrap">
                          <Trash size={16} />
                          <span className="hidden xs:inline">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
