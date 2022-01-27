import React from 'react';
import QuestItem from '../quest_item/quest_item';
import styles from './quest_list.module.css';

const QuestList = (props) => {
    return <section className={styles.list}>
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
    </section>
}

export default QuestList;