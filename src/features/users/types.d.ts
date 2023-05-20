export type User = {
  id: string;
  fullname: string;
  username: string;
};

export type Users = {
  [user_id: string]: User;
};
