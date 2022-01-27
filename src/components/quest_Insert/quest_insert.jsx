import React from "react";
import styles from "./quest_insert.module.css";

const QuestInsert = (props) => {
	return (
		<form className={styles.addform}>
			<input
				className={styles.addinput}
				type="text"
				placeholder="오늘의 퀘스트를 입력하세요!"
			/>
			<button className={styles.addbutton}>+</button>
		</form>
	);
};

export default QuestInsert;
