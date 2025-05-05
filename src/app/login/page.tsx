"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { RiLoginBoxLine, RiLockPasswordLine, RiMailLine, RiErrorWarningLine, RiWifiOffLine } from 'react-icons/ri';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { signIn, useSession } from 'next-auth/react';

// Keep track of redirect attempts to prevent infinite loops
let redirectAttempts = 0;
const MAX_REDIRECTS = 2;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [networkError, setNetworkError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('callbackUrl') || searchParams.get('redirect') || '/';
  const { status } = useSession();
  
  // Check if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      console.log('Already authenticated, redirecting to:', redirectPath);
      router.push(redirectPath);
    }
  }, [status, router, redirectPath]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setNetworkError(false);
    setLoading(true);
    
    try {
      console.log('Signing in with credentials, will redirect to:', redirectPath);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: redirectPath
      });
      
      if (!result?.ok) {
        if (result?.error === 'CredentialsSignin') {
          setError('Invalid email or password');
        } else {
          setNetworkError(true);
          setError('Authentication failed. Please try again.');
        }
        setLoading(false);
        return;
      }
      
      // Successful login, manually redirect
      console.log('Login successful, redirecting to:', redirectPath);
      window.location.href = redirectPath;
    } catch (error) {
      setNetworkError(true);
      setError('A network error occurred. Please check your connection and try again.');
      console.error('Login error:', error);
      setLoading(false);
    }
  };
  
  // Don't show anything special during session loading
  if (status === 'loading') {
    return (
      <div className="flex min-h-screen bg-[#d7e1e1]">
        <div className="m-auto w-full max-w-md p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl p-8 border-2 border-[#1e1e1e]"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-600 mt-2">Please sign in to continue</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen bg-[#d7e1e1]">
      <div className="m-auto w-full max-w-md p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl p-8 border-2 border-[#1e1e1e]"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-600 mt-2">Please sign in to manage</p>
          </div>
          
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mb-6 p-3 ${networkError ? 'bg-orange-50 border-orange-200 text-orange-700' : 'bg-red-50 border-red-200 text-red-700'} border flex items-center gap-2`}
            >
              {networkError ? (
                <RiWifiOffLine size={20} />
              ) : (
                <RiErrorWarningLine size={20} />
              )}
              <span>{error}</span>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <Input
                label="Email"
                type="email"
                id="email"
                icon={<RiMailLine size={20} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                placeholder="Enter your email"
                disabled={loading}
              />
              
              <Input
                label="Password"
                type="password"
                id="password"
                icon={<RiLockPasswordLine size={20} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                placeholder="Enter your password"
                disabled={loading}
              />
              
              <Button
                fullWidth
                isLoading={loading}
                {...{ type: "submit" }}
              >
                Login
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 