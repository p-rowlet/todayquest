import React from "react";
import QuestItem from "../quest_item/quest_item";
import styles from "./quest_list.module.css";

const QuestList = ({ quest, onCheck, onDelete }) => {
	return (
		<section className={styles.list}>
			{quest.map((item) => (
				<QuestItem quest={item} onCheck={onCheck} onDelete={onDelete} />
			))}
		</section>
	);
};

export default QuestList;
