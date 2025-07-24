
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

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
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleAuthClick = () => {
    setAuthModalOpen(true);
  };

  return (
    <header className="bg-white text-primary sticky top-0 z-50 border-b border-primary/20">
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 font-semibold text-lg"
            aria-label="CSA San Francisco Chapter Home"
          >
            <img 
              src="/lovable-uploads/f9f64043-c236-482e-acb2-d6a08e0612fc.png" 
              alt="CSA San Francisco Chapter logo" 
              className="h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.href) 
                      ? "text-accent border-b-2 border-accent pb-1" 
                      : "text-primary"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Auth Button */}
            <div className="flex items-center">
              <Button
                onClick={handleAuthClick}
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:bg-primary/20"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-primary border-primary/20">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-3 font-semibold text-lg text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <img 
                      src="/lovable-uploads/f9f64043-c236-482e-acb2-d6a08e0612fc.png" 
                      alt="CSA San Francisco Chapter logo" 
                      className="h-20"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
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
                      className={`text-lg font-medium transition-colors hover:text-accent ${
                        isActive(item.href) ? "text-accent" : "text-white"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile Auth Button */}
                <div className="flex flex-col space-y-4 pt-4">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      handleAuthClick();
                    }}
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </header>
  );
}
