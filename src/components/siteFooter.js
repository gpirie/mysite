import classes from "../styles/siteFooter.module.scss";

export default function siteFooter(props) {
    return (
        <div className={classes.siteFooter}>
            <small>&copy; {props.name} {new Date().getFullYear()}</small>
        </div>
    );
}