import React, { useEffect } from 'react';

function Header() {
    useEffect(() => {
        const nav = document.querySelector('.nav');
        const lists = document.querySelector('.lists');

        const handleClick = () => {
            lists.classList.toggle('active');
            console.log(lists.classList);
        };

        nav.addEventListener('click', handleClick);

        return () => {
            nav.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                LOGO
            </div>
            <button className="nav">Menu</button>
            <ul className="lists">
                <li>Home</li>
                <li>Projects</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </header>
    );
}

export default Header;
