import { useReducer } from "react"

import Notifications from "./Notifications"

const initialState = {
  notifications: [
    {
      id: 1,
      user: "Mark Webber",
      avatar: "avatar-mark-webber.webp",
      type: "react",
      typeMsg: "reacted to your recent post",
      content: "My first tournament today!",
      time: "1m ago",
      unread: true,
    },
    {
      id: 2,
      user: "Angela Gray",
      avatar: "avatar-angela-gray.webp",
      type: "follow",
      typeMsg: "followed you",
      content: "",
      time: "5m ago",
      unread: true,
    },
    {
      id: 3,
      user: "Jacob Thompson",
      avatar: "avatar-jacob-thompson.webp",
      type: "join",
      typeMsg: "has joined your group",
      content: "Chess Club",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      user: "Rizky Hasanuddin",
      avatar: "avatar-rizky-hasanuddin.webp",
      type: "message",
      typeMsg: "sent you a private message",
      content:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days ago",
      unread: false,
    },
    {
      id: 5,
      user: "Kimberly Smith",
      avatar: "avatar-kimberly-smith.webp",
      type: "comment",
      typeMsg: "commented on your picture",
      content: "image-chess.webp",
      time: "1 week ago",
      unread: false,
    },
    {
      id: 6,
      user: "Nathan Peterson",
      avatar: "avatar-nathan-peterson.webp",
      type: "react",
      typeMsg: "reacted to your recent post",
      content: "5 end-game strategies you can use in chess",
      time: "2 weeks ago",
      unread: false,
    },
    {
      id: 7,
      user: "Anna Kim",
      avatar: "avatar-anna-kim.webp",
      type: "left",
      typeMsg: "left the group",
      content: "Chess Club",
      time: "2 weeks ago",
      unread: false,
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case "markAllAsRead":
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          return {
            ...notification,
            unread: false,
          }
        }),
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { notifications } = state

  const unreadCount = notifications.filter((notification) => {
    return notification.unread
  }).length

  return (
    <div className="bg-very-light-grayish-blue h-screen flex sm:justify-center sm:items-center">
      <div className="bg-white p-1.6 md:p-2.4 flex flex-col gap-2.4 max-w-[640px] sm:rounded-md sm:shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-0.8 items-center">
            <h3 className="font-bold text-2">Notifications</h3>
            {unreadCount > 0 && (
              <p className="bg-blue text-white px-1.2 rounded-md">
                {unreadCount}
              </p>
            )}
          </div>
          <a
            href="#"
            className="text-dark-grayish-blue text-1.4 hover:text-blue transition-colors duration-300"
            onClick={() => {
              dispatch({ type: "markAllAsRead" })
            }}
          >
            Mark all as read
          </a>
        </div>
        <Notifications notifications={notifications} />
      </div>
    </div>
  )
}
