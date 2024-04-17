'use client'
import styles from '../../styles/EventDrawer.module.css'
import { useState } from 'react'

const tabs = [
    { name: 'Upcoming' },
    { name: 'Recent' },
    { name: 'Past' },
]

export default function EventDrawer({ children }) {

    const [currentTabId, setCurrentTabId] = useState(0);

    const wantTabChange = (toId) => {
        if (toId == currentTabId)
            return;
        setCurrentTabId(toId)
    }

    return (
        <div className={styles.holder}>
            <div className={styles.events_header}>
                Events
            </div>

            {/* Tabs */}
            <nav className={styles.tabNav}>
                {
                    tabs.map((tab, i) => (
                        <div className={styles.tab}
                            key={i}
                            onClick={() => wantTabChange(i)}
                            data-active={currentTabId == i}
                        >
                            {tab.name}
                        </div>
                    ))
                }
            </nav>

            {/* Content  */}
            <div className={styles.drawers}>
                {
                    children && (children instanceof Array ? [...children] : [children]).map((c, i) => (
                        <div
                            className={styles.drawer}
                            key={i}
                            data-active={currentTabId == i}
                        >
                            {c}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
