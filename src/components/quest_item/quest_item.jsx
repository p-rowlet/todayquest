import React, { memo } from "react";
import styles from "./quest_item.module.css";

const QuestItem = memo(({ quest, onCheck, onDelete }) => {
	const onChange = (e) => {
		onCheck(quest);
	};

	const onClick = (e) => {
		onDelete(quest);
	};

	return (
		<article className={styles.questitem}>
			<input
				type="checkbox"
				onChange={onChange}
				name="list"
				checked={quest.check ? true : false}
				className={styles.check}
			/>
			<p
				className={
					quest.check
						? `${styles.questtext} ${styles.questcheck}`
						: `${styles.questtext}`
				}
			>
				{quest.questName}
			</p>
			<button onClick={onClick} className={styles.deleteicon}>
				<i className="fas fa-times"></i>
			</button>
		</article>
	);
});

export default QuestItem;
