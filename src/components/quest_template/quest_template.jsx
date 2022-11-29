import React, { useCallback, useState } from "react";
import QuestCategory from "../quest_category/quest_category";
import QuestInsert from "../quest_Insert/quest_insert";
import QuestList from "../quest_list/quest_list";
import styles from "./quest_template.module.css";

const QuestTemplate = (props) => {
	const [quest, setQuest] = useState([
		
	]);

	const addQuest = useCallback((questName) => {
		setQuest((quest) => [
			...quest,
			{ questName, check: false, id: Date.now() },
		]);
	}, []);

	const deleteQuest = useCallback((questItem) => {
		setQuest((quest) => quest.filter((item) => item.id !== questItem.id));
	}, []);

	const checkQuest = useCallback((questItem) => {
		setQuest((quest) =>
			quest.map((item) => {
				if (questItem.id === item.id) {
					const questcheck = questItem.check ? false : true;
					return { ...questItem, check: questcheck };
				} else {
					return item;
				}
			})
		);
	}, []);

	const questCheckAll = useCallback(() => {
		setQuest((quest) =>
			quest.map((item) => {
				return {...item, check : true};
			})
		);
	}, []);

	const questDeleteAll = useCallback(() => {
		setQuest([]);
	},[]);

	return (
		<div className={styles.container}>
			<header className={styles.title}>
				<h1>Today Quest</h1>
			</header>
			<QuestCategory/>
			<QuestInsert onAddQuest={addQuest} />
			<QuestList
				quest={quest}
				key={quest.key}
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
