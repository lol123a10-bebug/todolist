import BaseForm from "../../UI/BaseForm/BaseForm";
import Modal from "../../UI/Modal/Modal";
import classes from "./Edit.module.scss";

interface IProps {
  title?: string;
  description?: string;
  onCancel: () => void;
  onSubmit: (data) => void;
}
const Edit = (props: IProps) => {
  const { onCancel, onSubmit, title, description } = props;

  return (
    <Modal className={classes.Edit__modal} onBackdropClick={onCancel}>
      <BaseForm
        initTitle={title}
        initDescription={description}
        cancel={onCancel}
        submit={onSubmit}
        style={{ zIndex: 99 }}
      />
    </Modal>
  );
};

export default Edit;
