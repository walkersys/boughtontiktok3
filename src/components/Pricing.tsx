import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$10',
      description: 'Perfect for beginners',
      features: [
        'Basic growth strategies',
        'Content creation guide',
        'Basic analytics'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For serious creators',
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced strategies',
        'Priority support',
        'Monthly group calls'
      ]
    },
    {
      name: 'Expert',
      price: '$49',
      description: 'Maximum results',
      features: [
        'Everything in Pro',
        '1-on-1 coaching',
        'Custom strategy',
        'VIP community access'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Investment Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white p-8 rounded-2xl ${
                plan.popular
                  ? 'shadow-xl transform scale-105 border-2 border-[#25f4ee]'
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-4 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;