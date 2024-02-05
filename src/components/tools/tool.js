import styles from "./tool.module.css";
export default function Tools({ tool, sliderTrue }) {
  return (
    <>
      <li className={styles.tool}>
        {sliderTrue && <span className={styles.slider}>{tool.sliderBack}</span>}

        <span className={styles.toolIcon}>{tool.toolIcon}</span>
        <h3 className={styles.toolTitle}>{tool.toolTitle}</h3>
        <p className={styles.toolDesc}>{tool.toolDesc}</p>
        {sliderTrue && (
          <span className={styles.sliderForward}>{tool.sliderForward}</span>
        )}

        <span className={styles.bookmark}>{tool.bookmark}</span>
      </li>
    </>
  );
}
