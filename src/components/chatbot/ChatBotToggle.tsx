
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
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-gradient-to-r from-csa-blue/90 to-csa-navy/90 hover:from-csa-navy/90 hover:to-csa-blue/90 text-white rounded-full h-14 w-14 p-0 shadow-lg animate-fade-in relative overflow-hidden backdrop-blur-md border border-white/20"
      >
        <div className="relative flex items-center justify-center">
          <img 
            src="/lovable-uploads/f645724d-2997-4759-9410-c49a14d80693.png" 
            alt="CSA Bot" 
            className="h-8 w-8 object-contain"
          />
        </div>
        {hasNewMessages && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-csa-accent/90 text-white text-xs rounded-full flex items-center justify-center backdrop-blur-sm border border-csa-accent/30">
            !
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default ChatBotToggle;
