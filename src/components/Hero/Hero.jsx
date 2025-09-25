import styles from './Hero.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div>
                <h1>Sitecore item name generator</h1>
                <DarkModeToggle />
            </div>
            <p>
                Conveniently convert any text into a Sitecore-ready item name.
                Simple, consistent and error-free.
            </p>
        </header>
    );
};

export default Hero;
