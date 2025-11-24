import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import NavItemWithDropdown from "@/components/NavItemWithDropdown";



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const navLinks = [
      { href: "services", label: "Services",
        subMenu: [ // Added subMenu array
        { href: "/service-brokerage", label: "Service Brokerage" }, // Change # to real paths later
        { href: "/auditing-asurance", label: "Auditing & Assurance" },
        { href: "/accounting-financial-services", label: "Accounting & Financial Services" },
       ],
      },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                  isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/95 backdrop-blur-md shadow-lg"
                }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={logo} alt="HTECS Logo" className="h-[10rem] w-[10rem] object-contain block" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-foreground leading-tight m-0">
                Hill Top Emerging
              </h1>
              <p className="text-lg text-muted-foreground m-0">Consultancy Services FZC</p>
            </div>
          </button>

          {/* Desktop Navigation (UPDATED) */}
                        <div className="hidden md:flex items-center gap-8 h-full">
                            {navLinks.map((link) => (
                                <NavItemWithDropdown key={link.href} link={link} isMobile={false} />
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

         {/* Mobile Menu (UPDATED) */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-2 border-t border-border flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <NavItemWithDropdown 
                                    key={link.href} 
                                    link={link} 
                                    isMobile={true} 
                                    closeMobileMenu={() => setIsMobileMenuOpen(false)} 
                                />
                            ))}
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-medium transition-colors w-full mt-2">
                                Get Started
                            </button>
                        </div>
                    )}
      </div>
    </nav>
  );
};

export default Navigation;
