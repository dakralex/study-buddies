export type NotificationType = 'message' | 'post';

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
};

export type Notifications = {
  [notification_id: string]: Notification;
};
