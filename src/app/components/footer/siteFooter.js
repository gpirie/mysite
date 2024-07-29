import classes from "./siteFooter.module.scss";

export default function siteFooter(props) {
    return (
        <footer>
            <small>&copy; {props.name} {new Date().getFullYear()}</small>
        </footer>
    );
}