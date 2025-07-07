'use client'

import { account } from '@/lib/appwrite/appwrite';
import { useState, useEffect } from 'react';

const ResetPassword = () => {
  const [userId, setUserId] = useState(null);
  const [secret, setSecret] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUserId(params.get('userId'));
    setSecret(params.get('secret'));
  }, []);

  async function handleResetPassword() {
    if (!newPassword || !confirmPassword) {
      setStatus('Please fill in both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus('Passwords do not match.');
      return;
    }

    if (!userId || !secret) {
      setStatus('Missing reset credentials.');
      return;
    }

    try {
      setLoading(true);
      await account.updateRecovery(userId, secret, newPassword);
      setStatus('✅ Password reset successfully. You can now log in.');
    } catch (error) {
      setStatus('❌ Error: ' + (error.message || 'Failed to reset password.'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-5">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-xl font-semibold text-black">Reset Your Password</h1>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-3 w-full rounded-md border px-4 py-2"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-4 w-full rounded-md border px-4 py-2"
        />

        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full rounded-md bg-primary py-2 font-medium text-white hover:bg-primary/90 transition-colors"
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>

        {status && (
          <p className={`mt-4 text-center text-sm ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
