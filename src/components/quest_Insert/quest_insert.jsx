import React, { useCallback, useRef } from "react";
import styles from "./quest_insert.module.css";

const QuestInsert = ({onAddQuest}) => {
	const inputRef = useRef();
	const formRef = useRef();
	const onSubmit = e =>{
		e.preventDefault();
		const name = inputRef.current.value;
		name && onAddQuest(name);
		formRef.current.reset();
	}

	return (
		<form ref={formRef} className={styles.addform} onSubmit={onSubmit}>
			<input
				ref={inputRef}
				className={styles.addinput}
				type="text"
				placeholder="오늘의 퀘스트를 입력하세요!"
			/>
			<button className={styles.addbutton}>+</button>
		</form>
	);
};

export default QuestInsert;