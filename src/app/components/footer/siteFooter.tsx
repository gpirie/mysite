// Styles
import styles from "./siteFooter.module.scss";

type Props = {
    title: string;
};

const siteFooter = ({ title }: Props) => {

    return (
        <footer className={styles['site-footer']}>
            <small>&copy; {title} {new Date().getFullYear()}</small>
        </footer>
    );
}

export default siteFooter;