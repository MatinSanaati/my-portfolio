// src/components/ThemeToggle.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/features/themeSlice';
import { useEffect } from 'react';
import './ThemeToggle.css';
import SunIcon from '../assets/icnes/icones_header-component/Sun-icon/SunIcon';
import MoonIcon from '../assets/icnes/icones_header-component/Moon-icon/MoonIcon';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.theme);

    useEffect(() => {
        localStorage.setItem('theme', mode);

        document.body.setAttribute('data-theme', mode);
    }, [mode]);

    return (
        <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
            {mode === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

export default ThemeToggle;