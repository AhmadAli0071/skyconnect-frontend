
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import CounterAnimation from '../components/CounterAnimation';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/siteData';
import { Wifi, Tv, Phone, Package, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-sky/5 via-transparent to-background z-[-1]"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white glow-text opacity-0 animate-fade-in">
              Unlimited <span className="text-sky">Internet</span> &<br />
              Premium <span className="text-sky">TV</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
              Experience lightning-fast connection speeds, crystal-clear streaming, 
              and reliable service across 50+ cities nationwide.
            </p>
            <div className="opacity-0 animate-fade-in delay-300">
              <Link 
                to="/buy-form" 
                className="px-6 py-3 rounded-md bg-sky text-white font-medium hover:bg-sky-dark transition-colors text-lg animate-glow"
              >
                Buy Internet & TV
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-background"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-sky glow-text">Services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We provide cutting-edge internet and TV services with reliable coverage and outstanding customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Wifi}
              title="High-Speed Fiber Internet"
              description="Lightning-fast fiber optic connections up to 1Gbps, perfect for streaming, gaming, and working from home."
              delay={100}
            />
            <ServiceCard 
              icon={Tv}
              title="4K TV Streaming"
              description="Access to hundreds of channels with crystal-clear 4K quality, plus premium movie channels and sports packages."
              delay={200}
            />
            <ServiceCard 
              icon={Phone}
              title="24/7 Tech Support"
              description="Our expert technical team is available round-the-clock to assist you with any issues or questions."
              delay={300}
            />
            <ServiceCard 
              icon={Package}
              title="Reliable Coverage"
              description="Extensive network coverage across 50+ cities, ensuring you stay connected wherever you are."
              delay={400}
            />
            <ServiceCard 
              icon={Users}
              title="Custom Packages"
              description="Flexible packages tailored to your needs and budget, with options for families, businesses, and individuals."
              delay={500}
            />
            <ServiceCard 
              icon={Package}
              title="Easy Installation"
              description="Professional installation with minimal disruption. Get connected quickly and hassle-free."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CounterAnimation end={20000} suffix="+" />
              <p className="text-lg text-white/70 mt-2">Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={95} suffix="%" />
              <p className="text-lg text-white/70 mt-2">Satisfied Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={50} suffix="+" />
              <p className="text-lg text-white/70 mt-2">Cities Served</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={10} />
              <p className="text-lg text-white/70 mt-2">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-sky glow-text">Packages</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Choose from our range of high-quality internet and TV packages tailored to fit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 6).map((pkg, index) => (
              <PackageCard key={pkg.id} packageData={pkg} delay={(index + 1) * 100} />
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 animate-fade-in delay-700">
            <Link 
              to="/all-packages" 
              className="px-6 py-3 rounded-md bg-muted text-white font-medium hover:bg-sky/20 border border-sky/30 transition-colors"
            >
              See All Packages
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
