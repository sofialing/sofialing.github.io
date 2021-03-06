import React from 'react'
import TimelineItem from './TimelineItem'
import { timeline } from '../styles/timeline.module.scss'

export default function Timeline({ items }) {
    return (
        <div className={timeline}>
            {items.map((item, i) => (
                <TimelineItem item={item} key={i} />
            ))}
        </div>
    )
}
