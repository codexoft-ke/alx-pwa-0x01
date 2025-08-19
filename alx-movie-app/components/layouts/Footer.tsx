import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MovieApp</h3>
            <p className="text-gray-400">
              Your ultimate destination for discovering and exploring movies.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-white transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-white transition-colors">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <p className="text-gray-400">
              Follow us for the latest movie updates and recommendations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {currentYear} MovieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
