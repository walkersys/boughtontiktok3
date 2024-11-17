import React from 'react';
import { Video, ShoppingBag, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      id: 'creators',
      icon: <Video className="w-8 h-8" />,
      title: 'Content Creators',
      description: 'Create viral content that resonates with your audience and builds a loyal following.',
      items: ['Viral content strategies', 'Audience growth tactics', 'Engagement optimization']
    },
    {
      id: 'sellers',
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Sellers',
      description: 'Convert views into sales with proven TikTok marketing strategies.',
      items: ['Product showcasing', 'Sales optimization', 'Customer engagement']
    },
    {
      id: 'affiliates',
      icon: <Users className="w-8 h-8" />,
      title: 'Affiliates',
      description: 'Maximize your earnings through strategic affiliate partnerships.',
      items: ['Partnership strategies', 'Commission optimization', 'Brand collaborations']
    }
  ];

  return (
    <section className="py-20 -mt-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#fe2c55] mb-6">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#25f4ee] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;