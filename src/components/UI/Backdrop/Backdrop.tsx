import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.clicked}></div>;
};

export default Backdrop;
