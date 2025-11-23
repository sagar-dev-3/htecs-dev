import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'; // Import Link

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  subMenu?: SubMenuItem[];
}

interface NavItemWithDropdownProps {
  link: NavLink;
  isMobile: boolean;
  closeMobileMenu?: () => void;
}

const NavItemWithDropdown = ({ link, isMobile, closeMobileMenu }: NavItemWithDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const baseClasses = "text-foreground hover:text-primary font-medium transition-colors";

  // Handle links with submenus (like "About Us" for Services, etc.)
  if (link.subMenu && link.subMenu.length > 0) {
    if (isMobile) {
      return (
        <div className="w-full">
          <button
            className={`${baseClasses} w-full text-left py-1 leading-none flex items-center justify-between`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {link.label}
            <svg className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="pl-4 space-y-1 overflow-hidden"
              >
                {link.subMenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="block py-1 text-foreground hover:text-primary transition-colors text-sm"
                    onClick={() => {
                      closeMobileMenu?.();
                      setShowDropdown(false);
                    }}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    } else {
      return (
        <div
          className="relative flex items-center h-full"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className={`${baseClasses} flex items-center gap-1 h-full text-base md:text-lg lg:text-xl leading-none`}>
            {link.label}
            <svg className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 bg-card border border-border rounded-lg shadow-xl py-2 w-48 z-50"
              >
                {link.subMenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  }

  // Handle regular links (without submenu) — including "About Us" if it's a simple link
  if (isMobile) {
    return (
      <Link
        to={link.href}
        className={`${baseClasses} py-1 block w-full text-left leading-none`}
        onClick={() => closeMobileMenu?.()}
      >
        {link.label}
      </Link>
    );
  } else {
    return (
      <Link
        to={link.href}
        className={`${baseClasses} h-full flex items-center text-base md:text-lg lg:text-xl leading-none`}
      >
        {link.label}
      </Link>
    );
  }
};

export default NavItemWithDropdown;