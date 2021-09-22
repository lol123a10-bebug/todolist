import classes from './index.module.scss';

const Button = props => {
  const { className, type, children } = props;
  const classNames = [classes.Button, className].join(' ');

  return <button className={classNames} type={type ? type : 'button'}>{children}</button>
}


export default Button;