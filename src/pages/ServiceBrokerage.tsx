import React from 'react';
import Footer from '@/components/Footer'; 
import Navigation from '@/pages/Navigation';
import { Link } from "react-router-dom";
import { CheckCircle, Zap } from 'lucide-react'; // Added imports for better visuals
import '@/styles/Breadcrumb.css';

const WebDesign = () => {
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
                  {/* Step 2: Services (Completed) */}
                  <li className="breadcrumb-item">
                    <Link to="/services" className="breadcrumb-link">
                      <CheckCircle className="breadcrumb-icon" />
                      Service
                    </Link>
                  </li>
                  
                  {/* Step 3: Current Page */}
                  <li className="breadcrumb-item current-page">
                    <span aria-current="page" className="breadcrumb-link">
                      <CheckCircle className="breadcrumb-icon" />
                      Service Brokerage
                    </span>
                  </li>
                </ol>
              </nav>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
              Service Brokerage
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto md:mx-0">
            By leveraging creative insight and teamwork, HTECS delivers a full suite of advisory, audit, and accounting services that empower businesses to expand globally and sustain competitive success. 
            Together, we make it happen
        </p>
    </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Process Section - Enhanced with better mobile spacing and visual steps */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b border-primary/20 pb-2">Our Strategic Brokerage Process</h2>
              <ul className="space-y-8 text-lg text-foreground">
                
                {/* Step 1 */}
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <strong className="block text-xl font-semibold text-foreground">Needs Assessment & Sourcing:</strong>
                    <p className="text-muted-foreground mt-1">In-depth consultation to clarify requirements, followed by meticulous sourcing and qualification of potential service providers.</p>
                  </div>
                </li>
                
                {/* Step 2 */}
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <strong className="block text-xl font-semibold text-foreground">Vetting & Comparison:</strong>
                    <p className="text-muted-foreground mt-1">Rigorous vetting of candidates, side-by-side comparison of proposals, quality, and pricing to find the optimal fit.</p>
                  </div>
                </li>
                
                {/* Step 3 */}
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <strong className="block text-xl font-semibold text-foreground">Negotiation & Contracting:</strong>
                    <p className="text-muted-foreground mt-1">Leveraging our expertise to negotiate favorable terms and assisting with final contract review and signing.</p>
                  </div>
                </li>
                
                {/* Step 4 */}
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                    4
                  </div>
                  <div>
                    <strong className="block text-xl font-semibold text-foreground">Implementation & Oversight:</strong>
                    <p className="text-muted-foreground mt-1">Ensuring a smooth transition and providing follow-up oversight to maintain service quality and alignment with your goals.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Image/Illustration Section */}
            <div>
              <img 
                src="/service-brokerage-placeholder.jpg" // Changed placeholder image name for relevance
                alt="Service Brokerage Strategic Illustration" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover border border-border" 
              />
            </div>
          </div>
          
          {/* Call to Action (CTA) - Centered and impactful */}
          <div className="mt-20 py-12 bg-card rounded-xl shadow-inner border border-border text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground max-w-3xl mx-auto">
                Ready to Secure the Best Service Partnerships?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let us handle the complexity of sourcing and negotiation for you.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-4 shadow-xl transition-all font-medium text-lg flex items-center justify-center mx-auto">
                <CheckCircle size={20} className="mr-2" />
                Start Your Consultation
              </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDesign;