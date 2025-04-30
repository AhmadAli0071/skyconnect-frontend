
import React from 'react';
import { Link } from 'react-router-dom';
import { PackageType } from '../data/siteData';

interface PackageCardProps {
  packageData: PackageType;
  delay?: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData, delay = 0 }) => {
  const delayClass = delay ? `delay-${delay}` : '';
  
  return (
    <div className={`package-card opacity-0 animate-fade-in ${delayClass} ${
      packageData.popular ? 'border-sky/30 relative overflow-hidden' : ''
    }`}>
      {packageData.popular && (
        <div className="absolute -right-12 top-5 bg-sky text-white px-12 py-1 rotate-45 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold text-white grow">{packageData.name}</h3>
        <span className="text-sm text-white/60 px-2 py-1 rounded bg-muted">
          {packageData.company}
        </span>
      </div>
      
      <div className="space-y-3 mb-6">
        <p className="text-white/70">
          <span className="font-semibold text-white">Internet:</span> {packageData.internetSpeed}
        </p>
        <p className="text-white/70">
          <span className="font-semibold text-white">TV Channels:</span> {packageData.tvChannels}+
        </p>
        {packageData.features && packageData.features.length > 0 && (
          <div className="pt-2">
            <p className="font-semibold text-white mb-1">Features:</p>
            <ul className="list-disc list-inside text-white/70 text-sm pl-1 space-y-1">
              {packageData.features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between mt-auto">
        <div>
          <p className="text-white/60 text-sm">Monthly Price</p>
          <p className="text-2xl font-bold text-white">${packageData.price.toFixed(2)}</p>
        </div>
        <Link 
          to={`/buy-package/${packageData.id}`} 
          className="px-4 py-2 rounded-md bg-sky text-white font-medium hover:bg-sky-dark transition-colors"
        >
          Buy Package
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
