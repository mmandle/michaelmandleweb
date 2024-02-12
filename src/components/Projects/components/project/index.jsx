'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, date, manageModal, url}) {

    const openLinkInNewWindow = (url) => {
        const absoluteUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
        window.open(absoluteUrl, '_blank', 'noopener noreferrer');
    };
    

    return (
        <div onMouseEnter={(e) => 
        {manageModal(true, index, e.clientX, e.clientY)}} 
        onMouseLeave={(e) => 
        {manageModal(false, index, e.clientX, e.clientY)}} 
        className={styles.project}
        onClick={() => { openLinkInNewWindow(url); }}>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    )
}