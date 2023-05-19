export type NotificationType = 'message' | 'post';

export type Notification = {
  type: NotificationType;
  title: string;
  message: string;
};

export type Notifications = Array<Notification>;
