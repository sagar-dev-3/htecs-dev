import React, { useState } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const PricingCard = ({ plan, price, period, description, features, highlighted = false, icon: Icon, delay }) => {
  return (
    <div 
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        highlighted 
          ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_20px_40px_-10px_hsl(270_60%_65%/0.3)]' 
          : 'bg-card border border-border hover:border-primary/50 shadow-lg'
      }`}
      style={{ animation: `fade-up 0.6s ease-out ${delay}s both` }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${highlighted ? 'bg-white/20' : 'bg-primary/10'}`}>
          <Icon className={`w-6 h-6 ${highlighted ? 'text-white' : 'text-primary'}`} />
        </div>
        <h3 className={`text-2xl font-bold ${highlighted ? 'text-white' : 'text-card-foreground'}`}>
          {plan}
        </h3>
      </div>
      
      <p className={`text-sm mb-6 ${highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
        {description}
      </p>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-foreground'}`}>
            ${price}
          </span>
          <span className={`text-lg ${highlighted ? 'text-white/70' : 'text-muted-foreground'}`}>
            /{period}
          </span>
        </div>
      </div>
      
      <button 
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-6 ${
          highlighted 
            ? 'bg-white text-primary hover:bg-white/90 shadow-lg' 
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        Get Started
      </button>
      
      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={`mt-0.5 p-1 rounded-full ${highlighted ? 'bg-white/20' : 'bg-primary/10'}`}>
              <Check className={`w-4 h-4 ${highlighted ? 'text-white' : 'text-primary'}`} />
            </div>
            <span className={`text-sm ${highlighted ? 'text-white/90' : 'text-card-foreground'}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingTemplate = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const plans = [
    {
      plan: 'Starter',
      price: billingPeriod === 'monthly' ? '500' : '6000',
      period: billingPeriod === 'monthly' ? 'mo' : 'yr',
      description: 'Perfect for individuals and small projects',
      icon: Zap,
      features: [
        '1 Project'
      ]
    },
    {
      plan: 'Professional',
      price: billingPeriod === 'monthly' ? '1200' : '12000',
      period: billingPeriod === 'monthly' ? 'mo' : 'yr',
      description: 'Ideal for growing teams and businesses',
      icon: Crown,
      highlighted: true,
      features: [
        '2 Projects'
      ]
    },
    {
      plan: 'Enterprise',
      price: billingPeriod === 'monthly' ? '2500' : '25000',
      period: billingPeriod === 'monthly' ? 'mo' : 'yr',
      description: 'For large organizations with advanced needs',
      icon: Rocket,
      features: [
        '3 Projects'
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" style={{ animation: 'fade-up 0.6s ease-out' }}>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Our Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 relative ${
                billingPeriod === 'yearly'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <PricingCard 
              key={idx} 
              {...plan} 
              delay={0.1 * (idx + 1)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center" style={{ animation: 'fade-in 0.6s ease-out 0.5s both' }}>
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? <a href="#" className="text-primary hover:underline font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTemplate;