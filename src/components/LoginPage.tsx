import React, { useState } from 'react';
import { Mail, Lock, User, Shield } from 'lucide-react';
import Reg from './Reg';

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdmin) {
      if (email === 'admin@gmail.com' && password === 'admin@123') {
        console.log('Admin login successful');
        window.location.href = '/admin-dashboard';
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      // Handle regular user login
      console.log('Login attempt:', { email, password, isAdmin, rememberMe });
      window.location.href = '/'; // Redirect to home page for regular users
    }
  };

  if (showRegister) {
    return <Reg onBackToLogin={() => setShowRegister(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-yellow-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isAdmin ? 'Admin Login' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isAdmin 
              ? 'Enter your credentials to access the admin dashboard' 
              : 'Access your technical resources and training materials'}
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={() => setIsAdmin(false)}
            className={`px-4 py-2 rounded-md ${
              !isAdmin 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <User className="h-4 w-4 inline mr-2" />
            User
          </button>
          <button
            type="button"
            onClick={() => setIsAdmin(true)}
            className={`px-4 py-2 rounded-md ${
              isAdmin 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Shield className="h-4 w-4 inline mr-2" />
            Admin
          </button>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isAdmin ? 'Sign in as Admin' : 'Sign in'}
            </button>
          </div>
          
          {!isAdmin && (
            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <button 
                onClick={() => setShowRegister(true)}
                className="font-medium text-blue-600 hover:text-blue-500 border-none bg-transparent"
              >
                Register now
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;