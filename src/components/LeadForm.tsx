import React, { useState } from 'react';
import { User, Mail, Check } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-gray-600">
            Get our free TikTok success guide and weekly tips
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg pl-10"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg pl-10"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="consent"
              className="w-4 h-4 text-[#fe2c55]"
              required
              disabled={isSubmitting}
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to receive marketing emails and accept the privacy policy
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all ${
              isSuccess
                ? 'bg-green-500'
                : 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] hover:opacity-90'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                Success!
              </span>
            ) : (
              'Get Free Guide'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;