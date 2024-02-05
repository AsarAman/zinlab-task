import styles from "./page.module.css";

import { tools } from "./constants";

import PdfTools from "@/components/pdftools/pdftools";
export default function Home() {
  return (
    <main className={styles.main}>
      <PdfTools
        sectionTitle="Your BookMarks"
        sectionTools={tools.slice(0, -5)}
      />
      <PdfTools
        sliderTrue
        sectionTitle="Convert From Pdf"
        sectionTools={tools.slice(-5)}
      />
      <PdfTools
        sectionTitle="Convert From Pdf"
        sectionTools={tools.slice(-5)}
      />
      <PdfTools sectionTitle="Convert to Pdf" sectionTools={tools.slice(-5)} />
    </main>
  );
}
