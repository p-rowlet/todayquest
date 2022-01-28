import React, { useState } from "react";
import QuestInsert from "../quest_Insert/quest_insert";
import QuestList from "../quest_list/quest_list";
import styles from "./quest_template.module.css";

const QuestTemplate = (props) => {
	const [quest, setQuest] = useState([]);

	const addQuest = (name) => {
		const quests = [
			...quest,
			{ questName: name, check: false, id: Date.now() },
		];
		setQuest(quests);
	};

	const deleteQuest = (questItem) => {
		const quests = quest.filter((item) => item.id !== questItem.id);
		setQuest(quests);
	};

	const checkQuest = (questItem) => {
		const quests = quest.map((item) => {
			if (questItem.id === item.id) {
				const questcheck = questItem.check ? false : true;
				return { ...questItem, check: questcheck };
			} else {
				return item;
			}
		});
		setQuest(quests);
	};

	const questCheckAll = () => {
		const quests = quest.map((item) => {
			item.check = true;
			return item;
		});
		setQuest(quests);
	};

	const questDeleteAll = () => {
		setQuest([]);
	};

	return (
		<div className={styles.container}>
			<header className={styles.title}>
				<h1>Today Quest</h1>
			</header>
			<QuestInsert onAddQuest={addQuest} />
			<QuestList
				quest={quest}
				key={quest.id}
				onCheck={checkQuest}
				onDelete={deleteQuest}
			/>
			<div className={styles.option}>
				<button onClick={questCheckAll} className={styles.allcheck}>
					전체 체크
				</button>
				<button onClick={questDeleteAll} className={styles.alldelete}>
					전체 삭제
				</button>
			</div>
		</div>
	);
};

export default QuestTemplate;
