// Data
import {fetchSiteSettings} from "@/data/Data";

// Styles
import styles from "./siteFooter.module.scss";

const siteFooter = async () => {

    const settings = await fetchSiteSettings();

    return (
        <footer className={styles['site-footer']}>
            <small>&copy; {settings.title} {new Date().getFullYear()}</small>
        </footer>
    );
}

export default siteFooter;