export default function NotificationItem({ notification }) {
  const { id, user, avatar, type, typeMsg, content, time, unread } =
    notification

  return (
    <li
      key={id}
      className={`flex items-start gap-1.2 p-1.2 ${
        unread ? "bg-very-light-grayish-blue" : "bg-white"
      } rounded-md`}
    >
      <img className="w-[36px] h-[36px]" src={avatar} alt="user avatar" />
      <div className="text-1.2">
        <p className="text-dark-grayish-blue">
          <a
            href="#"
            className="text-very-dark-blue font-semibold hover:text-blue transition-colors duration-300"
          >
            {user}
          </a>{" "}
          {typeMsg}{" "}
          {type === "react" || type === "left" || type === "join" ? (
            <a
              href="#"
              className="font-semibold hover:text-blue transition-colors duration-300"
            >
              {content}
            </a>
          ) : (
            ""
          )}{" "}
          {unread && (
            <span className="bg-red w-[8px] h-[8px] rounded-full inline-block"></span>
          )}
        </p>
        <p className="text-grayish-blue">{time}</p>
        {type === "message" && (
          <p className="text-dark-grayish-blue border border-light-grayish-blue-2 rounded-md p-1.2 mt-1.2 hover:bg-light-grayish-blue-1 transition-bg duration-300 cursor-pointer">
            {content}
          </p>
        )}
      </div>
      {type === "comment" && (
        <img
          className="ml-auto w-[40px] h-[40px] hover:outline hover:outline-light-grayish-blue-1 transition-colors duration-300 rounded-md cursor-pointer"
          src={content}
          alt="comment image"
        />
      )}
    </li>
  )
}
