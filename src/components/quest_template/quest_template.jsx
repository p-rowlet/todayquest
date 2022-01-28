import React, { useState } from "react";
import QuestInsert from "../quest_Insert/quest_insert";
import QuestList from "../quest_list/quest_list";
import styles from "./quest_template.module.css";

const QuestTemplate = (props) => {
	const [quest, setQuest] = useState(
		[
			{questName : '잠자기', check : true, id :1},
			{questName : '놀기', check : false, id :2},
			{questName : '행복하기', check : false, id :3},
			{questName : '살찌기', check : false, id :4}
		]
	);

	const addQuest = name =>{
		const quests = [...quest, {questName : name, check:false, id : Date.now()}];
		setQuest(quests);
	}


	return (
		<div className={styles.container}>
			<header className={styles.title}>
				<h1>Today Quest</h1>
			</header>
			<QuestInsert onAddQuest={addQuest} />
			<QuestList quest={quest} key={quest.id}/>
			<div className={styles.option}>
				<button className={styles.allcheck}>전체 체크</button>
				<button className={styles.alldelete}>전체 삭제</button>
			</div>
		</div>
	);
};

export default QuestTemplate;
