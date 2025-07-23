
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Archive", href: "/archive" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-csa-navy text-white sticky top-0 z-50 border-b border-csa-blue/20">
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 font-semibold text-lg"
            aria-label="CSA San Francisco Chapter Home"
          >
            <div className="w-8 h-8 bg-csa-blue rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">CSA</span>
            </div>
            <span className="hidden sm:block">CSA San Francisco</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-csa-accent ${
                  isActive(item.href) 
                    ? "text-csa-accent border-b-2 border-csa-accent pb-1" 
                    : "text-white"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-csa-blue/20"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-csa-navy border-csa-blue/20">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-3 font-semibold text-lg text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-csa-blue rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CSA</span>
                    </div>
                    <span>CSA San Francisco</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-csa-blue/20"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-csa-accent ${
                        isActive(item.href) ? "text-csa-accent" : "text-white"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
