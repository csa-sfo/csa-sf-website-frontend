
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChatBotToggleProps {
  onClick: () => void;
  hasNewMessages?: boolean;
}

const ChatBotToggle: React.FC<ChatBotToggleProps> = ({ onClick, hasNewMessages = false }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-csa-blue hover:bg-csa-navy text-white rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden border-2 border-white/20 hover:border-white/40 transform hover:scale-105"
      >
        <div className="relative flex items-center justify-center transition-transform duration-300 ease-in-out">
          <img 
            src="/lovable-uploads/6c9d0416-c5cd-4552-baee-a4aaf7ed03e5.png" 
            alt="CSA Bot" 
            className="h-8 w-8 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        
        {/* Subtle pulse ring */}
        <div className="absolute inset-0 rounded-full border border-white/30 animate-pulse"></div>
        
        {hasNewMessages && (
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
            !
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default ChatBotToggle;
