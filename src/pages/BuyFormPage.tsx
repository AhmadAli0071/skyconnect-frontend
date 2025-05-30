import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { companies } from '../data/siteData';
import { useToast } from '@/hooks/use-toast';

const BuyFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    phone: '',
    company: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    phone: '',
    company: ''
  });

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? '' : 'First name is required',
      lastName: formData.lastName ? '' : 'Last name is required',
      dob: formData.dob ? '' : 'Date of birth is required',
      address: formData.address ? '' : 'Address is required',
      phone: formData.phone ? '' : 'Phone number is required',
      company: formData.company ? '' : 'Please select a company'
    };

    if (formData.phone && !/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          title: 'Thank you!',
          description: "Your inquiry has been submitted successfully. We'll contact you shortly.",
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'There was a problem submitting the form. Please try again later.',
        });
        console.error(error);
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
                Buy Internet & TV Service
              </h1>
              <p className="text-white/70">
                Fill out the form below, and we'll help you get connected with the perfect plan.
              </p>
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
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (123) 456-7890"
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label htmlFor="company" className="block text-white mb-2">
                    Select Company
                  </label>
                  <select
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.company ? 'border-destructive' : 'border-border'
                    } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-sky`}
                  >
                    <option value="">-- Select Company --</option>
                    {companies.map((company) => (
                      <option key={company.id} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1">{errors.company}</p>
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

export default BuyFormPage;
