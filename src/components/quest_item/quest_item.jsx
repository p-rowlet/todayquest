import React, { useRef } from "react";
import styles from "./quest_item.module.css";

const QuestItem = ({quest, onCheck}) => {
	const checkRef = useRef();
	const onChange = e =>{
		onCheck(quest);
	}

	return (
		<article className={styles.questitem}>
			<input type="checkbox" onChange={onChange} name="list" checked ={quest.check ? true : false} ref={checkRef} className={styles.check}/>
			<p className={ quest.check ? `${styles.questtext} ${styles.questcheck}` : `${styles.questtext}`}>{quest.questName}</p>
			<i className={`&{styles.deleteicon} fas fa-times`}></i>
		</article>
	);
};

export default QuestItem;
