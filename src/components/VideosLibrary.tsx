import React from 'react';
import { Search, Film, Wrench, Cog, Zap, Cpu, Monitor, PenTool as Tool } from 'lucide-react';

const VideosLibrary = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search videos..." 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Video Categories */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Film className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold uppercase">VIDEO CATEGORIES</h2>
          </div>
          <div>
            <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 bg-white hover:bg-gray-50">
              Filter <span className="text-xs">▼</span>
            </button>
          </div>
        </div>

        <ul className="space-y-4 mb-12">
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Wrench className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Troubleshooting</span>
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Cog className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Mechanical Repairs</span>
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Zap className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Electrical Repairs</span>
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Cpu className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Electronics</span>
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Monitor className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Software & Diagnostics</span>
          </li>
          <li className="flex items-center">
            <span className="h-3 w-3 bg-black rounded-full mr-3"></span>
            <Tool className="h-5 w-5 mr-2" /> 
            <span className="font-medium">Other Technical Guides</span>
          </li>
        </ul>

        {/* Video Cards */}
        <h2 className="text-3xl font-bold mb-6">Video Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card 1 */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Fixing Common Electrical Issues</h2>
              
              <div className="space-y-2 mb-4">
                <p className="flex justify-between">
                  <span className="text-gray-300">Category:</span>
                  <span>Electrical Repairs</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="flex items-center">
                    <Wrench className="h-4 w-4 mr-1" /> 8 min
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Views:</span>
                  <span className="flex items-center">
                    <span className="inline-block h-3 w-3 bg-yellow-500 rounded-full mr-1"></span> 5.2K
                  </span>
                </p>
              </div>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
                <span className="inline-block">▶</span> Watch Video
              </button>
            </div>
          </div>
          
          {/* Video Card 2 */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Gearbox Repair Basics</h2>
              
              <div className="space-y-2 mb-4">
                <p className="flex justify-between">
                  <span className="text-gray-300">Category:</span>
                  <span>Mechanical Repairs</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="flex items-center">
                    <Wrench className="h-4 w-4 mr-1" /> 12 min
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Views:</span>
                  <span className="flex items-center">
                    <span className="inline-block h-3 w-3 bg-yellow-500 rounded-full mr-1"></span> 3.8K
                  </span>
                </p>
              </div>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
                <span className="inline-block">▶</span> Watch Video
              </button>
            </div>
          </div>
          
          {/* Video Card 3 */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Soldering Techniques</h2>
              
              <div className="space-y-2 mb-4">
                <p className="flex justify-between">
                  <span className="text-gray-300">Category:</span>
                  <span>Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="flex items-center">
                    <Wrench className="h-4 w-4 mr-1" /> 6 min
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-300">Views:</span>
                  <span className="flex items-center">
                    <span className="inline-block h-3 w-3 bg-yellow-500 rounded-full mr-1"></span> 2.5K
                  </span>
                </p>
              </div>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
                <span className="inline-block">▶</span> Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosLibrary;