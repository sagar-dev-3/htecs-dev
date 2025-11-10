import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-business.jpg";
import accountingImage from "@/assets/accounting-desk.jpg";
import PricingTemplate from "@/components/Pricing";

const Index = () => {
  // Navigation state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Handle sending message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: "user", text: inputMessage }]);
      setInputMessage("");
      
      // Simulate bot response (you'll connect this to your .NET backend later)
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: "bot", 
          text: "Thanks for your message! Our team will get back to you soon." 
        }]);
      }, 1000);
    }
  };

  // Scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { href: "services", label: "Services" },
    { href: "about", label: "About Us" },
    { href: "why-choose-us", label: "Why Choose Us" },
    { href: "pricing", label: "Pricing" },
    { href: "contact", label: "Contact" },
  ];

  // Services data
  const services = [
    {
      icon: "📈",
      title: "General Trading",
      description: "textiles clothes an accessories.",
    },
    {
      icon: "🧮",
      title: "Service brokerage",
      description: "Service brokerage in mortgage loan rent services property dealings and other project financing.",
    },
    {
      icon: "📚",
      title: "Accounting and financial services",
      description: "Book keeping service tax filing financial reporting Audit services.",
    },
  ];

  // Stats data
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "1000+", label: "Projects Completed" },
  ];

  // Why choose us features
  const features = [
    "Certified professionals with extensive experience",
    "Tailored solutions for your unique needs",
    "Cutting-edge technology and methodologies",
    "Transparent pricing with no hidden fees",
    "24/7 support and consultation",
    "Proven track record of success",
  ];

  // Refs for scroll animations
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const ctaRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true });
  const whyChooseUsInView = useInView(whyChooseUsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/95 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HTECS Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-lg font-bold text-foreground leading-tight">
                  Hill Top Emerging
                </h1>
                <p className="text-sm text-muted-foreground">Consultancy Services FZC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-medium transition-colors w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-20">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight text-foreground"
              >
                Your Trusted
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  business consultants
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                Delivering excellence in business advisory, taxation, accounting, and assurance services to help your business thrive.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all font-medium text-lg flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="rounded-full px-8 py-3 border-2 border-foreground hover:bg-secondary transition-all font-medium text-lg">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional business team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-2xl border border-border"
              >
                <p className="text-sm text-muted-foreground">Trusted by</p>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Businesses</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full rounded-3xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-xl group p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl lg:text-6xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={whyChooseUsRef}
              initial={{ opacity: 0, x: -50 }}
              animate={whyChooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine expertise, innovation, and dedication to deliver exceptional financial services that drive your success.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={whyChooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg text-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={whyChooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={accountingImage}
                  alt="Professional accounting services"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary rounded-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*pricing Section*/}
      <section id="pricing" className="bg-background">
        <div className="container mx-auto px-4">
          <PricingTemplate></PricingTemplate>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how our expertise can help you achieve your financial goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="rounded-full px-8 py-3 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium">
                Schedule Consultation
              </button>
              <button className="rounded-full px-8 py-3 text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all font-medium">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="HTECS Logo" className="h-10 w-10" />
                <div>
                  <h3 className="font-bold text-foreground">Hill Top Emerging</h3>
                  <p className="text-sm text-muted-foreground">Consultancy Services FZC</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted business Consultants.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Business Advisory</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Taxation Services</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Bookkeeping</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Auditing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-lg">✉️</span>
                  <span className="text-sm">info@htecs.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span className="text-sm">+971 54 462 0678,</span>
                  <span className="text-sm">+971 54 382 7791</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📍</span>
                  <span className="text-sm">Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hill Top Emerging Consultancy Services FZC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot UI */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card border-2 border-border rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-semibold">HTECS Support</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-50"
      >
        <span className="text-2xl">💬</span>
      </button>
    </div>
  );
};

export default Index;
