import React, { memo } from "react";
import QuestItem from "../quest_item/quest_item";
import styles from "./quest_list.module.css";

const QuestList = memo(({ quest, onCheck, onDelete }) => {
	return (
		<section className={styles.list}>
			{quest.map((item) => (
				<QuestItem quest={item} key={item.id} onCheck={onCheck} onDelete={onDelete} />
			))}
		</section>
	);
});

export default QuestList;
