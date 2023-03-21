import React from "react";
import styles from "./styles.module.css";

function Avatars() {
	return (
		<div className={styles.avatar_container}>
			<div className={styles.avatar_wrapper}>
				<div className={styles.avatar} id={styles.av1}></div>
				<div className={styles.avatar} id={styles.av2}></div>
				<div className={styles.avatar} id={styles.av3}></div>
				<div className={styles.avatar} id={styles.av4}></div>
				<div className={styles.avatar} id={styles.av5}></div>
				<div className={styles.avatar} id={styles.av6}></div>
			</div>
		</div>
	);
}

export default Avatars;
