export type NotificationType =
  | 'bid'         // auction bid updates
  | 'offer'       // price offers received
  | 'message'     // new chat message
  | 'like'        // someone liked your listing
  | 'follow'      // new follower
  | 'order'       // order status
  | 'listing'     // listing approved/sold
  | 'system';     // app/system announcements

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timeAgo: string;
  read: boolean;
  /** Optional — initials for avatar-based notifications */
  userInitials?: string;
  /** Optional — small image thumbnail */
  image?: string;
}