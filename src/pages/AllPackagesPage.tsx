
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/siteData';

const AllPackagesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const filteredPackages = packages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'speed':
        return parseInt(b.internetSpeed) - parseInt(a.internetSpeed);
      case 'channels':
        return b.tvChannels - a.tvChannels;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">
                All Available Packages
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Browse all of our internet and TV packages to find the perfect option for your needs
              </p>
            </div>

            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3">
                <input
                  type="text"
                  placeholder="Search packages or companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky"
                />
              </div>
              <div className="w-full md:w-1/3">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky"
                >
                  <option value="default">Sort By</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="speed">Fastest Internet</option>
                  <option value="channels">Most Channels</option>
                </select>
              </div>
            </div>

            {sortedPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPackages.map((pkg, index) => (
                  <PackageCard key={pkg.id} packageData={pkg} delay={index < 12 ? (index + 1) * 100 : 0} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 border border-border rounded-md">
                <p className="text-white text-lg">No packages found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllPackagesPage;
