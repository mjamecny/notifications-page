import NotificationItem from "./NotificationItem"

export default function Notifications({ notifications }) {
  return (
    <ul className="flex flex-col gap-0.8">
      {notifications.map((notification) => {
        return (
          <NotificationItem key={notification.id} notification={notification} />
        )
      })}
    </ul>
  )
}
