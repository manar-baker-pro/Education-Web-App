export type Components =
  | "language"
  | "lecture"
  | "message"
  | "conversation"
  | "admindash"
  | "profile"
  | "conversation_members"
  | "user"
  | "role"
  | "question";
export type ApiCall = "GET" | "POST" | "PUT" | "DELETE";
export const ApiEnum: any = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
export const ComponentName: any = {
  Language: "language",
  Lecture: "lecture",
  Message: "message",
  Conversation: "conversation",
  AdminDash: "admindash",
  Profile: "profile",
  Question: "question",
  ConversationMembers: "conversation_members",
  User: "user",
  Role: "role",
};
export const TypeOfPrival = {
  Limited: "Limited",
  All: "All",
  Self: "Self",
};
