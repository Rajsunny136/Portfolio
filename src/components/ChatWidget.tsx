import React, { useState } from "react";
import "../Styles/ChatWidget.css";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <textarea placeholder="Type your message..." />
          <button>Send</button>
        </div>
      )}
      <button
        className="chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close Chat" : "Chat"}
      </button>
    </div>
  );
};

export default ChatWidget;
