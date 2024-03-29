import { UserSearchPage } from "../../usereducer/authreducer/userRinter";
export interface LastAuthor {
  _id: string;
  name: string;
}
export interface LastMessag {
  content: string;
  createdAt: string;
  author: LastAuthor;
}

export interface Conversation {
  _id: string;
  title: string;
  picture?: string;
  members: Array<string>;
  language: string;
  lastmessage?: LastMessag;
  isjoined?: number;
}
export interface ConversationMember {
  user: string;
  checked: boolean;
}
export interface CreateConversationInter {
  title: string;
  picture?: string;
  members: UserSearchPage[];
  language: string;
}
export interface ConverState {
  convload: boolean;
  convDa: Conversation[];
  getnew: number;
  currentChat?: Conversation;
  converr: any;
}
