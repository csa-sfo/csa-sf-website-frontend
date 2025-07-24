
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Apple, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

export function AuthModal({ isOpen, onClose, mode, onModeChange }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, password, name });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/f9f64043-c236-482e-acb2-d6a08e0612fc.png" 
              alt="CSA Logo" 
              className="h-16"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Sign in to CSA" : "Sign up for CSA"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              onClick={() => onModeChange("login")}
              className={`flex-1 py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                mode === "login"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => onModeChange("signup")}
              className={`flex-1 py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                mode === "signup"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-3 h-12 bg-gray-800 text-white hover:bg-gray-700 border-gray-800"
            >
              <Apple className="w-5 h-5" />
              <span>LOG IN WITH APPLE</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-3 h-12 bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">G</span>
              </div>
              <span>LOG IN WITH GOOGLE</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-3 h-12 bg-blue-700 text-white hover:bg-blue-800 border-blue-700"
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-700 font-bold text-sm">in</span>
              </div>
              <span>LOG IN WITH LINKEDIN</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-3 h-12 bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">⊞</span>
              </div>
              <span>LOG IN WITH MICROSOFT ACCOUNT</span>
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            For multi-factor authentication, use one of the social login options above.
          </div>

          <Separator />

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="yours@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            {mode === "login" && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Don't remember your password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-orange-500 text-white hover:bg-orange-600 text-lg font-medium"
            >
              {mode === "login" ? "LOG IN" : "SIGN UP"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
