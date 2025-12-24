

export type IUser = {
  email: string;
  username: string;
  role: 'admin' | 'user'; 
  password: string;
  image?: string;
  emailVerified?: boolean;
};
