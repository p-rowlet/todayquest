import React, { useCallback, useState } from "react";
import QuestCategory from "../quest_category/quest_category";
import QuestInsert from "../quest_Insert/quest_insert";
import QuestList from "../quest_list/quest_list";
import styles from "./quest_template.module.css";

const QuestTemplate = (props) => {
	const [quest, setQuest] = useState([
		
	]);

	const categoryList =  ["All", "Working", "Complete"]
	const [category, setCategory] = useState(categoryList[0]);

	const addQuest = useCallback((questName) => {
		if(questName.trim() === ""){
			return;
		}

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

	const getCategory = useCallback((category)=>{
		setCategory(category);
	},[])

	const categozingItem = useCallback((category, quest)=>{
		switch(category){
			case "All" : 
				return quest;
			case "Working":
				return quest.filter(quest => quest.check === false);
			case "Complete":
				return quest.filter(quest => quest.check === true);
			default:
				throw new Error("잘못된 분류입니다");
		}
	},[]);

	const categorized = categozingItem(category, quest);

	return (
		<div className={styles.container}>
			<header className={styles.title}>
				<h1>Today Quest</h1>
			</header>
			<QuestCategory category = {category} getCategory= {getCategory}/>
			<QuestInsert onAddQuest={addQuest} />
			<QuestList
				quest={categorized}
				key={categorized.key}
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
