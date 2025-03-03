import React, { useState } from 'react';
import { Shield, BookOpen, Video, FileText, LayoutDashboard, Link, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import ReferenceLibrary from './components/ReferenceLibrary';
import BookExam from './components/BookExam';
import VideoLib from './components/VideoLib';
import Contact from './components/Contact';
import Chat from './components/Chat';
import QuizApp from './components/QuizApp';
import LoginPage from './components/LoginPage';
import PaperGen from './components/PaperGen';
import Logo from './assets/logo.png'
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<string>('home');
  const [activeExamType, setActiveExamType] = useState<string>('practice');

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle navigation
  const navigateTo = (page: string, examType?: string) => {
    setActivePage(page);
    if (examType) {
      setActiveExamType(examType);
    }
    setActiveDropdown(null);
  };

  // Render the active page
  const renderPage = () => {
    switch (activePage) {
      case 'reference':
        return <ReferenceLibrary />;
      case 'videos':
        return <VideoLib />;
      case 'exam':
        return <BookExam examType={activeExamType} />;
      case 'quiz-app':
        return <QuizApp />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <LoginPage onNavigate={navigateTo} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={navigateTo} />;
      case 'chat':
        return <Chat />;
      case 'paper-gen':
        return <PaperGen />;
      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="hero-section relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('src/assets/logo.png')] bg-cover opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800 opacity-80"></div>
              </div>

              <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold mb-2 text-shadow-lg">
                    Empowering Technicians with<br />
                    <span className="text-5xl">Knowledge & Skills</span>
                  </h1>
                  <p className="text-xl mb-8">
                    Access technical references, training videos, and online exams — all in one place.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition">
                      Get Started
                    </a>
                    <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium transition">
                      Explore Resources
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Navigation */}
            <section className="quick-nav py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Quick Navigation</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div className="bg-indigo-900 rounded-lg overflow-hidden shadow-lg text-white text-center p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-teal-500 rounded-full p-3">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Reference Library</h3>
                    <p className="text-sm mb-6">Find & download technical references.</p>
                    <button
                      onClick={() => navigateTo('reference')}
                      className="inline-block bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      Browse References
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-indigo-900 rounded-lg overflow-hidden shadow-lg text-white text-center p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-orange-400 rounded-full p-3">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Watch Videos</h3>
                    <p className="text-sm mb-6">Watch expert repair tutorials.</p>
                    <button
                      onClick={() => navigateTo('videos')}
                      className="inline-block bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      Watch Videos
                    </button>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-indigo-900 rounded-lg overflow-hidden shadow-lg text-white text-center p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-400 rounded-full p-3">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Take Exam</h3>
                    <p className="text-sm mb-6">Test your skills with an online exam.</p>
                    <a href="#" className="inline-block bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition">
                      Start Exam
                    </a>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-indigo-900 rounded-lg overflow-hidden shadow-lg text-white text-center p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-400 rounded-full p-3">
                        <LayoutDashboard className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                    <p className="text-sm mb-6">Manage references, videos & exams.</p>
                    <a href="#" className="inline-block bg-white text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition">
                      Go to Admin Panel
                    </a>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition">
                    Learn More
                  </a>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="h-16 w-auto" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('mobile-menu');
                }}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 rounded-md"
              >
                {activeDropdown === 'mobile-menu' ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                data-page="home"
                onClick={() => navigateTo('home')}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'home' ? 'font-semibold text-blue-600' : ''
                  }`}
              >
                Home
              </button>

              {/* Reference Link */}
              <button
                data-page="reference"
                onClick={() => navigateTo('reference')}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'reference' ? 'font-semibold text-blue-600' : ''}`}
              >
                Reference
              </button>

              {/* Videos Link */}
              <button
                data-page="videos"
                onClick={() => navigateTo('videos')}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'videos' ? 'font-semibold text-blue-600' : ''
                  }`}
              >
                Videos
              </button>

              {/* Exam Link with Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('exam');
                  }}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group ${activePage === 'exam' ? 'font-semibold text-blue-600' : ''
                    }`}
                >
                  Exam
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'exam' ? 'rotate-180' : ''
                    }`} />
                </button>
                {activeDropdown === 'exam' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 animate-fadeIn z-50">
                    <button
                      onClick={() => navigateTo('exam', 'practice')}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${activePage === 'exam' && activeExamType === 'practice' ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                    >
                      Book Exam
                    </button>

                    <button
                      onClick={() => navigateTo('quiz-app')}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${activePage === 'quiz-app' ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                    >
                      Take Exam
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <button
                data-page="contact"
                onClick={() => navigateTo('contact')}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'contact' ? 'font-semibold text-blue-600' : ''
                  }`}
              >
                Contact
              </button>

              {/* Chat Link */}
              <button
                data-page="login"
                onClick={() => navigateTo('login')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Login
              </button>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {activeDropdown === 'mobile-menu' && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-slideDown">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  data-page="home"
                  onClick={() => {
                    navigateTo('home');
                    toggleDropdown('mobile-menu');
                  }}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'home' ? 'font-semibold text-blue-600' : ''
                    }`}
                >
                  Home
                </button>
                <button
                  data-page="videos"
                  onClick={() => {
                    navigateTo('videos');
                    toggleDropdown('mobile-menu');
                  }}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'videos' ? 'font-semibold text-blue-600' : ''
                    }`}
                >
                  Videos
                </button>
                <div>
                  <button
                    data-page="exam"
                    onClick={() => {
                      navigateTo('exam');
                      toggleDropdown('mobile-menu');
                    }}
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-center ${activePage === 'exam' ? 'font-semibold text-blue-600' : ''
                      }`}
                  >
                    Exam
                  </button>
                  <div className="pl-4 space-y-2 mt-2">
                    <button
                      data-page="exam"
                      onClick={() => {
                        navigateTo('exam', 'practice');
                        toggleDropdown('mobile-menu');
                      }}
                      className={`block w-full text-left text-gray-700 hover:text-blue-600 transition-colors text-center duration-200 ${activePage === 'exam' && activeExamType === 'practice' ? 'text-blue-600' : ''
                        }`}
                    >
                      Book Exam
                    </button>

                    <button
                      data-page="quiz-app"
                      onClick={() => navigateTo('quiz-app')}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 text-center hover:text-blue-600 ${activePage === 'quiz-app' ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                    >
                      Take Exam
                    </button>
                  </div>
                </div>
                <button
                  data-page="contact"
                  onClick={() => {
                    navigateTo('contact');
                    toggleDropdown('mobile-menu');
                  }}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${activePage === 'contact' ? 'font-semibold text-blue-600' : ''
                    }`}
                >
                  Contact
                </button>
                <button
                  data-page="login"
                  onClick={() => {
                    navigateTo('login');
                    toggleDropdown('mobile-menu');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 text-center"
                >
                  Login
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      {activePage !== 'admin-dashboard' && (
        <footer className="bg-gray-900 text-white mt-auto">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  We provide comprehensive technical training and resources for engineering professionals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><button data-page="videos" onClick={() => navigateTo('videos')} className="text-gray-400 hover:text-white">Video Library</button></li>
                  <li><button data-page="exam" onClick={() => navigateTo('exam')} className="text-gray-400 hover:text-white">Book Exam</button></li>
                  <li><button data-page="contact" onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white">Contact Us</button></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2">
                  <a href='mailto: ' className="flex items-center text-gray-400">
                    <Mail size={16} className="mr-2" />
                    info@example.com
                  </a>
                  <li className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-2" />
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    123 Tech Street, CA 94043
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Chat Bubble */}
      {activePage !== 'login' && activePage !== 'chat' && (
        <div className="fixed bottom-10 right-10">
          <button
            data-page="chat"
            onClick={() => navigateTo('chat')}
            aria-label="Open Paper Generation"
            className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-gray-800" />
          </button>
        </div>
      )}
      
    </div>
  );
}

export default App;
