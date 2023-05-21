export type User = {
  id: string;
  fullname: string;
  username: string;
  avatar: any;
};

export type Users = {
  [user_id: string]: User;
};
