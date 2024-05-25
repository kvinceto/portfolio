import styles from "./Popup.module.css";

const Popup = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Popup;
