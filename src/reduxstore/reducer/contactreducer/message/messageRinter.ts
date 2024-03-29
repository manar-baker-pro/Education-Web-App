import { Conversation } from "../conversation/converRinter";

export interface MessageCreate {
  _id?: string;
  content: string;
  author: string;
  conversation: string;
}
interface MessageAuthor {
  name: string;
  _id: string;
  profilePic: string;
  id: string;
}
export interface Message {
  _id: string;
  content: string;
  author: MessageAuthor;
  conversation: string;
  createdAt: string;
  convInfo?: Conversation;
}
export interface MessageState {
  messload: boolean;
  messDa: Message[];
  pageSize: number;
  messerr: any;
  pageNumber: number;
  hasMore: boolean;
}
