
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import CounterAnimation from '../components/CounterAnimation';
import PackageCard from '../components/PackageCard';
import CallButton from '../components/CallButton';
import { packages } from '../data/siteData';
import { Wifi, Tv, Phone, Package, Users, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 opacity-0 animate-fade-in">
              Unlimited <span className="text-sky glow-text">Internet</span> &<br />
              Premium <span className="text-sky glow-text">TV</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
              Experience lightning-fast connection speeds, crystal-clear streaming, 
              and reliable service across 50+ cities nationwide.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in delay-300 italic text-gray-700">
              <em>Connecting You to the Sky, <span className="font-semibold text-sky glow-text">Fast. Reliable. Limitless</span></em>
            </p>
            <div className="opacity-0 animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton phoneNumber="+18669476817" />
              <span className="text-gray-500">or</span>
              <Link 
                to="/all-packages" 
                className="px-8 py-3 rounded-lg bg-white text-sky border-2 border-sky font-medium hover:bg-sky hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-sky glow-text">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              icon={Shield}
              title="Secure Connection"
              description="Advanced security features and encryption to keep your data safe and your connection secure."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 stats-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CounterAnimation end={20000} suffix="+" />
              <p className="text-lg text-gray-600 mt-2">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={95} suffix="%" />
              <p className="text-lg text-gray-600 mt-2">Satisfied Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={50} suffix="+" />
              <p className="text-lg text-gray-600 mt-2">Cities Served</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={10} />
              <p className="text-lg text-gray-600 mt-2">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular <span className="text-sky glow-text">Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of high-quality internet and TV packages tailored to fit your needs.
            </p>
          </div>
          
          <div className="packages-grid">
            {packages.slice(0, 6).map((pkg, index) => (
              <PackageCard 
                key={pkg.id} 
                packageData={pkg} 
                delay={(index + 1) * 100}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 animate-fade-in delay-700">
            <Link 
              to="/all-packages" 
              className="px-8 py-3 rounded-lg bg-sky text-white font-medium hover:bg-sky-dark transition-colors shadow-md hover:shadow-lg"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
