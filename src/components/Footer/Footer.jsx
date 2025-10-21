import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaTwitter, FaLinkedin, FaYoutube, FaDiscord} from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedReason) {
      alert('Please select a reason for using Upshift.');
      return;
    }
    if (!feedback.trim()) {
      alert('Please provide your feedback.');
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log({ reason: selectedReason, feedback });
    alert('Thank you for your feedback!');
    setFeedback('');
    setSelectedReason('');
  };

  // Social media icons data with React Icons
  const socialMediaIcons = [
 
    { name: 'telegram', icon: <SiTelegram className="w-5 h-5" />, label: 'Telegram' },
    { name: 'twitter', icon: <FaTwitter className="w-5 h-5" />, label: 'Twitter' },
    { name: 'discord', icon: <FaDiscord className="w-5 h-5" />, label: 'Discord' },
    { name: 'linkedin', icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { name: 'youtube', icon: <FaYoutube className="w-5 h-5" />, label: 'YouTube' },
    
     
  ];

  return (
    <footer className="bg-black text-white rounded-xl p-8 mt-10 max-w-6xl mx-auto border border-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Feedback Section */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Send us your feedback
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="" className="text-gray-400" disabled>I use Upshift because...</option>
              <option value="work">It helps me with my work</option>
              <option value="productivity">It increases my productivity</option>
              <option value="learning">It helps me learn new things</option>
              <option value="other">Other reason</option>
            </select>
            
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Input your feedback..."
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
            />
            
            <Link to="/wallet">
              <button
                type="submit"
                className="w-full bg-gray-800  text-gray-500  font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Submit Feedback
              </button>
            </Link>
          </form>
        </div>
        
        {/* Community Section */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl font-medium text-white mb-4">
            Join our community
          </h3>
          
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed">
              Connect with other Upshift users, share tips, and get the latest updates.
            </p>
            
            {/* Social Media Icons Grid */}
            <div className="grid grid-cols-5 ">
              {socialMediaIcons.map((social) => (
                <Link 
                  key={social.name}
                  to="/wallet"
                  className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  title={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
            
            <Link to="/wallet">
              <button className=" text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                Join Community
              </button>
            </Link>
            
            <p className="text-sm text-gray-400 mt-3">
              Promoted by August 26
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/wallet" className="text-gray-400 hover:text-white transition-colors">
          <p className="text-sm">
            Copyright © 2003 Upshift
          </p>
        </Link>
        
        {/* Additional Social Media Links in Footer Bottom */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialMediaIcons.map((social) => (
            <Link 
              key={social.name}
              to="/wallet"
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <span className="hidden sm:inline">{social.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;