import React from 'react';
import Footer from '@/components/Footer'; 
import Navigation from '@/pages/Navigation';
import { Link } from "react-router-dom";
import { CheckCircle, Zap } from 'lucide-react'; // Added imports for better visuals
import '@/styles/Breadcrumb.css';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation /> 

      <main className="flex-grow pt-[8rem] sm:pt-[10rem] pb-10 sm:pb-14 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          
          {/* Header Section */}
          <div className="text-center md:text-left">
            {/* Breadcrumb Section */}
            <div className="mb-8 sm:mb-10">
              <nav aria-label="Checkout Progress" className="breadcrumb-container">
                <ol className="breadcrumb-list">
                  {/* Step 1: Home (Completed) */}
                  <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                      <CheckCircle className="breadcrumb-icon" />
                      Home
                    </Link>
                  </li>
                  
                  {/* Step 2: Current Page */}
                  <li className="breadcrumb-item current-page">
                    <span aria-current="page" className="breadcrumb-link">
                      <CheckCircle className="breadcrumb-icon" />
                      Service 
                    </span>
                  </li>
                </ol>
              </nav>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
              Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto md:mx-0">
              By leveraging creative insight and teamwork, HTECS delivers a full suite of advisory, audit, and accounting services that empower businesses to expand globally and sustain competitive success. 
              Together, we make it happen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            
            {/* Process Section */}
           
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;