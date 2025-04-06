"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SocialLinks from "@/components/ui/SocialLinks";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [promotionsAgreed, setPromotionsAgreed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!termsAgreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    // Submit logic here
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-white p-4"
      aria-labelledby="newsletter-heading"
    >
      <div className="w-full max-w-4xl rounded-[32px] bg-[#FFCBA4] p-8 md:p-12">
        <div className="inline-block mb-6">
          <div className="border border-primary rounded-full px-6 py-2">
            <span className="text-primary font-medium">Newsletter</span>
          </div>
        </div>

        <h2
          id="newsletter-heading"
          className="text-3xl md:text-4xl font-bold text-primary mb-8"
        >
          Stay in the Loop
        </h2>

        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              required
              className="w-full bg-transparent border-black rounded-full px-6 py-6 h-auto text-black placeholder:text-black/70 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <fieldset className="space-y-4 mt-6" aria-label="Newsletter Preferences">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white h-5 w-5 mt-0.5"
                  checked={termsAgreed}
                  onCheckedChange={setTermsAgreed}
                  required
                />
                <label htmlFor="terms" className="text-black">
                  I agree to the <a href="/terms" className="underline hover:text-primary">Terms and Conditions</a>.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="promotions"
                  className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white h-5 w-5 mt-0.5"
                  checked={promotionsAgreed}
                  onCheckedChange={setPromotionsAgreed}
                />
                <label htmlFor="promotions" className="text-black">
                  I agree to receive promotional materials from ResQDex. I understand I can withdraw my consent at any time.
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-primary text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>

          <div className="flex gap-4" aria-label="Follow us on social media">
            <SocialLinks />
          </div>
        </form>
      </div>
    </section>
  );
}
