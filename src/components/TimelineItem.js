import React from 'react'
import { timelineItem } from '../styles/timeline.module.scss'

export default function TimelineItem({ item }) {
    return (
        <article className={timelineItem}>
            <h4>{item.title}</h4>
            <p>{item.location}</p>
            <p>{item.time}</p>
        </article>
    )
}
