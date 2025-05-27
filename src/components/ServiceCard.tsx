
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const delayClass = delay ? `delay-${delay}` : '';
  
  return (
    <div className={`service-card opacity-0 animate-fade-in ${delayClass}`}>
      <div className="mb-4 w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-sky" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
