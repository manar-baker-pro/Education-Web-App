interface PermisionDetails {
  given: boolean;
  type: "All" | "Limited" | "Self";
}
interface Permission {
  GET: PermisionDetails;
  POST: PermisionDetails;
  PUT: PermisionDetails;
  DELETE: PermisionDetails;
}
export interface Role {
  _id: string;
  language: Permission;
  lecture: Permission;
  message: Permission;
  conversation: Permission;
  admindash: Permission;
  profile: Permission;
  conversation_members: Permission;
  user: Permission;
  role: Permission;
  question: Permission;
}

export interface RoleState {
  roleload: boolean;
  roleDa: Role[];
  roleerr: any;
}
