import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { packages } from '../data/siteData';
import { useToast } from '@/hooks/use-toast';

const PackageBuyPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    mobileNumber: '',
    packageInfo: selectedPackage
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    mobileNumber: ''
  });

  useEffect(() => {
    if (id) {
      const foundPackage = packages.find(pkg => pkg.id === parseInt(id));
      if (foundPackage) {
        setSelectedPackage(foundPackage);
        setFormData(prev => ({ ...prev, packageInfo: foundPackage }));
      } else {
        navigate('/not-found');
      }
    }
  }, [id, navigate]);

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? '' : 'First name is required',
      lastName: formData.lastName ? '' : 'Last name is required',
      dob: formData.dob ? '' : 'Date of birth is required',
      address: formData.address ? '' : 'Address is required',
      mobileNumber: formData.mobileNumber ? '' : 'Mobile number is required'
    };

    if (formData.mobileNumber && !/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
       await fetch(`${import.meta.env.VITE_API_BASE}/inquiries`, {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        toast({
          title: "Thank you!",
          description: `Your order for ${selectedPackage.name} has been placed successfully. We'll contact you shortly.`,
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error',
          description: 'There was a problem submitting the form. Please try again later.',
        });
      }
    }
  };

  return (
    <Layout>
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">
                Buy {selectedPackage.name} Package
              </h1>
              <p className="text-white/70">
                From {selectedPackage.company} - ${selectedPackage.price.toFixed(2)}/month
              </p>
              <div className="mt-3 text-white/70">
                <p>{selectedPackage.internetSpeed} Internet | {selectedPackage.tvChannels}+ Channels</p>
              </div>
            </div>

            <div className="form-container opacity-0 animate-fade-in">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-background border ${
                        errors.firstName ? 'border-destructive' : 'border-border'
                      } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-background border ${
                        errors.lastName ? 'border-destructive' : 'border-border'
                      } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="dob" className="block text-white mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.dob ? 'border-destructive' : 'border-border'
                    } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                  />
                  {errors.dob && (
                    <p className="text-destructive text-sm mt-1">{errors.dob}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label htmlFor="address" className="block text-white mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.address ? 'border-destructive' : 'border-border'
                    } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label htmlFor="mobileNumber" className="block text-white mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="10-digit number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.mobileNumber ? 'border-destructive' : 'border-border'
                    } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-destructive text-sm mt-1">{errors.mobileNumber}</p>
                  )}
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-md bg-sky text-white font-medium hover:bg-sky-dark transition-colors animate-glow"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PackageBuyPage;
