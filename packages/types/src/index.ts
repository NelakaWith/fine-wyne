export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  status: "online" | "offline";
  lastSeen: Date;
}

export interface Chat {
  _id: string;
  isGroup: boolean;
  members: string[]; // user IDs
  lastMessage?: string; // message ID
}

export interface Message {
  _id: string;
  chatId: string;
  senderId: string;
  content: string;
  fileUrl?: string;
  type: "text" | "image" | "file";
  createdAt: Date;
  seenBy: string[]; // user IDs
}

export interface SocketEvents {
  "message:send": (message: Omit<Message, "_id" | "createdAt">) => void;
  "message:receive": (message: Message) => void;
  "typing:start": (data: { chatId: string; userId: string }) => void;
  "typing:end": (data: { chatId: string; userId: string }) => void;
  "user:online": (userId: string) => void;
  "user:offline": (userId: string) => void;
  "message:seen": (data: { messageId: string; userId: string }) => void;
}

// Legacy interface for compatibility
export interface ChatMessage {
  id: string;
  senderId: string;
  roomId: string;
  content: string;
  createdAt: string;
}
