import React from "react";
import QuestInsert from "../quest_Insert/quest_insert";
import QuestList from "../quest_list/quest_list";
import styles from "./quest_template.module.css";

const QuestTemplate = (props) => {
	return (
		<div className={styles.container}>
			<header className={styles.title}>
				<h1>Today Quest</h1>
			</header>
			<QuestInsert />
			<QuestList />
			<div className={styles.option}>
				<button className={styles.allcheck}>전체 체크</button>
				<button className={styles.alldelete}>전체 삭제</button>
			</div>
		</div>
	);
};

export default QuestTemplate;
