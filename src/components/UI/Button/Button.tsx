import classes from "./Button.module.scss";

const Button = (props) => {
  const { className, type, children, ...others } = props;
  const classNames = [classes.Button, className].join(" ");

  return (
    <button className={classNames} type={type ? type : "button"} {...others}>
      {children}
    </button>
  );
};

export default Button;
