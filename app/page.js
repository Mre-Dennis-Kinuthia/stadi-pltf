import Image from 'next/image'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <h4>STADI</h4>
      </nav>
      <h1 className={styles.hero}>Empowering Agriculture with Ai Precision</h1>
      <h3 className={styles.subhero}>Revolutionize Your Farming Experience with Smart Solutions for Crop Health, Pest Identification, and Expert Consultations.</h3>
    <div className={styles.grid}>
      <div className={styles.card}>
      <h1>Development</h1>
      </div>
      <div className={styles.card}>
        <h1>Use Case</h1>
      </div>
      <div className={styles.card}>
        <h1>Insights</h1>
      </div>
      <div className={styles.card}>
        <h1>Impact</h1>
      </div>
    </div>
    </main>
  )
}
