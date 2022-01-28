import React from "react";
import styles from "./quest_item.module.css";

const QuestItem = ({quest}) => {
	return (
		<article className={styles.questitem}>
			<input type="checkbox" name="list" className={styles.check} />
			<p className={styles.questtext}>{quest.questName}</p>
			<i className={styles.deleteicon} class="fas fa-times"></i>
		</article>
	);
};

export default QuestItem;
