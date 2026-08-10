import React from 'react';
import { ViewTab } from '../types';

interface CultureViewProps {
  onPlanTrip: (cultureTopic?: string) => void;
  onSelectTab: (tab: ViewTab) => void;
}

export const CultureView: React.FC<CultureViewProps> = ({ onPlanTrip }) => {
  const cultureItems = [
    {
      title: "Ceylon Tea Traditions",
      subtitle: "Highland Harvests & Handcrafted Teas",
      description: "Discover the 150-year history of Ceylon tea. Walk among estate pickers, tour historic British processing mills, and savor rare silver needle brews.",
      imageUrl: "/src/assets/images/ceylon_tea_picking_1786405068085.jpg",
      icon: "coffee"
    },
    {
      title: "Sacred Festivals & Esala Perahera",
      subtitle: "Drums, Dances & Fire Performers",
      description: "Experience Asia's grandest festival in Kandy. Fire dancers, decorated elephants, and traditional drummers parade in honor of the Sacred Tooth Relic.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWbCT1WxV0gTVJ4IoesyM8qlhGph6n9_yTfyAWxsA-xBktw9KXGRg_ijcSOd9kdPZUlG6gtyu1uZB0bQEl8GmvkUMfN755dqb1WpTCOYJM1K1CDIdOZ0x5espl1PScMg3cf3i8ta-IDCsxOTbWwL-GOenjK7jwLglFV0fEpQPuCGvWv7EwC6fNWmVYmDwd9zXJCdI6BDjF5uAmDe-mtNDScYUPWIH38xmvTknOeE4dbClGXZn5dMQ2A",
      icon: "festival"
    },
    {
      title: "Ayurvedic Wellness & Holistics",
      subtitle: "5,000 Years of Natural Healing",
      description: "Rebalance body and mind with authentic herbal steam baths, oil therapies, and personalized nutrition guided by certified Ayurvedic doctors.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH-A03A29xGa0PDe-x5oWLANj2ewzixT3AWQn4jAg-tOfKZqk5YmdO0uI9zZww12L4i0coK7NlRzHE7IRprX7Y2kZwG4OoJFEvraY_vBhodgKXASSpCXx5JQ_rYTkfbe-PYDYGzz2RTeVyRdGFrgzUhGceM-ncE70Cuz4kypm1pZyGiuGhBjTJ0CJf8ze8VxOCJLU8TB0GQQUyHi7h1eQNruIizpsCSev5_OmRWee5CaWwcq1AQyxMQ",
      icon: "spa"
    },
    {
      title: "Authentic Island Cuisine",
      subtitle: "Fragrant Spices & Coconut Curries",
      description: "Taste fragrant hopper pancakes, fiery black pork curry, and freshly cracked king coconuts in private cooking masterclasses with local chefs.",
      imageUrl: "/src/assets/images/sri_lanka_cuisine_1786405051053.jpg",
      icon: "restaurant"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-body-md animate-fadeIn space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-[#00502d] uppercase tracking-wider block mb-2">Heritage & Living Culture</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl text-[#1b1c19] mb-4 font-garamond font-bold">
          Rich Cultural Heritage
        </h1>
        <p className="font-body-md text-base md:text-lg text-[#3f4941] leading-relaxed">
          Sri Lanka is a tapestry woven from millennia of royal dynasties, ancient spiritual traditions, world-famed tea estates, and soul-nourishing wellness rituals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cultureItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-[#bec9be] shadow-md flex flex-col group hover:shadow-xl transition-all">
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs text-[#00502d] font-bold uppercase tracking-wider block mb-1">{item.subtitle}</span>
                <h3 className="font-headline-sm text-2xl font-garamond font-bold text-[#1b1c19]">{item.title}</h3>
                <p className="font-body-md text-sm text-[#3f4941] mt-2 leading-relaxed">{item.description}</p>
              </div>
              <button
                onClick={() => onPlanTrip(item.title)}
                className="self-start text-[#00502d] font-label-md text-sm font-semibold flex items-center gap-1.5 hover:underline"
              >
                <span>Include Experience in Your Tour</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
