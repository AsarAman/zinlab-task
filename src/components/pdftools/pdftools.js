import Tool from "../tools/tool";
import styles from './pdftools.module.css'
export default function PdfTools({ sectionTitle, sectionTools, sliderTrue }) {
  return (
    <>
      <h1 className={styles.title}>{sectionTitle}</h1>
      <ul className={styles.tools}>
        {sectionTools.map((item) => {
          return <Tool key={item.id} tool={item} sliderTrue={sliderTrue} />;
        })}
      </ul>
    </>
  );
}
