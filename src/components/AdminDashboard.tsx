import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, BookOpen, Video, FileText, Settings, ChevronDown, ChevronRight, Search, Plus, Trash, Upload, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './../assets/logo.png';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('reference');
  const [searchTerm, setSearchTerm] = useState('');
  const [showExamDropdown, setShowExamDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigateTo('/home')}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </button>

              <button
                onClick={() => navigateTo('/home/reference')}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
              >
                <BookOpen size={20} />
                Reference
              </button>

              <button
                onClick={() => navigateTo('/home/videos')}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
              >
                <Video size={20} />
                Videos
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowExamDropdown(!showExamDropdown)}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
                >
                  <FileText size={20} />
                  Exams
                  <ChevronDown size={16} />
                </button>
                {showExamDropdown && (
                  <div className="absolute top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => {
                        navigateTo('/home/exam/take');
                        setShowExamDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Book Exam
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('/home/QuizApp/take');
                        setShowExamDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Take Exam
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateTo('/home/chat')}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
              >
                <MessageCircle size={20} />
                Chat
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={() => navigateTo('/home')}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </button>

              <button
                onClick={() => navigateTo('/home/reference')}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <BookOpen size={20} />
                Reference
              </button>

              <button
                onClick={() => navigateTo('/home/videos')}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <Video size={20} />
                Videos
              </button>

              <button
                onClick={() => navigateTo('/home/chat')}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <MessageCircle size={20} />
                Chat
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <img src={Logo} alt="Logo" className="h-20 w-auto" />
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => {
                setActiveTab('reference');
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeTab === 'reference' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <BookOpen size={20} className="mr-3" />
              <span>Reference Library</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('videos');
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeTab === 'videos' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <Video size={20} className="mr-3" />
              <span>Video Library</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('exams');
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeTab === 'exams' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <FileText size={20} className="mr-3" />
              <span>Exam Management</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('settings');
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <Settings size={20} className="mr-3" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`min-h-screen transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-64'}`}>
        <div className="p-4 lg:p-8">
          {/* Search and Actions Bar */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow p-6">
            {activeTab === 'reference' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Date Added</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[1, 2, 3].map((item) => (
                      <tr key={item} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Technical Manual {item}</div>
                          <div className="text-sm text-gray-500 sm:hidden">Engineering</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Engineering
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                          2025-03-{item}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">Edit</button>
                            <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                              <Trash size={16} />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Upload Button */}
                <div className="mt-6">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload New Reference
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {/* Video thumbnail placeholder */}
                      <div className="flex items-center justify-center h-full">
                        <Video size={40} className="text-gray-400" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">Training Video {item}</h3>
                      <p className="text-sm text-gray-500 mt-1">Duration: 15:00</p>
                      <div className="flex justify-between mt-4">
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'exams' && (
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-lg font-medium">Electrical Engineering Exam {item}</h3>
                        <p className="text-sm text-gray-500">30 Questions • 45 Minutes</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Edit
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="max-w-2xl space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Site Name</label>
                      <input type="text" className="mt-1 block w-full border rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Admin Email</label>
                      <input type="email" className="mt-1 block w-full border rounded-md shadow-sm p-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
