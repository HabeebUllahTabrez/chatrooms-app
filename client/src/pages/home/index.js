import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }

    navigate("/chat");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<AmogusRooms/>`}</h1>
        <input
          className={styles.input}
          placeholder="Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="MedBay">MedBay</option>
          <option value="Reactor">Reactor</option>
          <option value="Electrical">Electrical</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Enter Spaceship
        </button>
      </div>
    </div>
  );
};

export default Home;
