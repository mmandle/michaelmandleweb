'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss'; // Ensure you create this stylesheet

const About = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/'); // Navigate to home page
    };

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.description}>
                    Welcome to the About page! Here you can learn more about our mission, vision, and values.
                </p>
                <button className={styles.backButton} onClick={handleBackClick}>
                    Back to Home
                </button>
            </div>
        </main>
    );
};

export default About;
