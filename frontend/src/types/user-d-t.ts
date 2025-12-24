export type IUser = {
  id: string;
  email: string;
  emailVerified: boolean;
  role: "user" | "admin";
  username: string;
};
