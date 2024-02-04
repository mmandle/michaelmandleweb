import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from './style.module.scss';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('cursor-custom');
        const cursorText = document.querySelector('.cursor-text');

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { x: clientX, y: clientY });
            console.log(clientX, clientY);
        };

        const onMouseEnterLink = (e) => {
            const link = e.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, { scale: 4 });
            }
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 });
            cursorText.style.display = 'none';
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseenter', onMouseEnterLink);
        document.body.addEventListener('mouseleave', onMouseLeaveLink);

        return () => {
            // Clean up event listeners on component unmount
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseenter', onMouseEnterLink);
            document.body.removeEventListener('mouseleave', onMouseLeaveLink);
        };
    }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <div id='cursor-custom' className="cursor-custom">
            <span className="cursor-text">View</span>
        </div>
    );
};

export default Cursor;
