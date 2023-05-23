export type User = {
  id: string;
  fullname: string;
  username: string;
  avatar: any;
};

export type UsersKey = string;
export type Users = {
  [user_id: UsersKey]: User;
};
