import { account } from '@/lib/appwrite/appwrite';
import React from 'react';

const ForgetPassword = () => {

    


    return (
          <div className="text-right">
            <button
              type="button"

              onClick={async () => {
                const email = prompt("Enter your email for password reset:");
                if (email) {
                  try {
                    await account.createRecovery(email, process.env.NEXT_PUBLIC_PASSWORD_RESET_URL);
                    alert("Recovery email sent!");
                  } catch (error) {
                    alert("Error sending recovery email: " + error.message);
                  }
                }
              }}

              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>
    );
}

export default ForgetPassword;
