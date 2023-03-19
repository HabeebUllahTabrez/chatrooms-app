import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

const SendMessage = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  let typing = false;
  let timeout = undefined;

  useEffect(() => {
    socket.on("status", (data) => {
      // console.log(data);
      setStatus(data);
    });
  }, [socket]);

  function clearTyping() {
    typing = false;
    socket.emit("typing", { username, room, message: "" });
  }

  const sendMessage = () => {
    if (message !== "") {
      const __createdtime__ = Date.now();
      socket.emit("send_message", { username, room, message, __createdtime__ });
      setMessage("");
    }
  };

  const keyPress = (e) => {
    if (typing === false) {
      typing = true;
      socket.emit("typing", {
        username,
        room,
        message: `${username} is typing...`,
      });
    } else {
      clearTimeout(timeout);
    }
    timeout = setTimeout(clearTyping, 5000);
    setMessage(e.target.value);
  };

  return (
    <div className={styles.sendMessageContainer}>
      <div className={styles.status}>{status}</div>
      <input
        className={styles.messageInput}
        placeholder="Message..."
        onChange={keyPress}
        value={message}
      />
      <button className="btn btn-primary" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
