import Image from 'next/image'
import styles from './styles/page.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'


export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <h4>STADI</h4>
        <div className={styles.navcat}>
          <Link href="/authpage">
            Explore Now
          </Link>
        </div>
      </nav>
      <h1 className={styles.hero}>Empowering Agriculture with Ai Precision</h1>
      <h3 className={styles.subhero}>Revolutionize Your Farming Experience with Smart Solutions for Crop Health, Pest Identification, and Expert Consultations.</h3>
    <div className={styles.grid}>
      <div className={styles.card}>
          <Link href="/developmentpage">
        <h1>Development</h1>
          </Link>
      </div>
      <div className={styles.card}>
          <Link href="/usecasepage">
          <h1>Use Case</h1>
          </Link>
      </div>
      <div className={styles.card}>
          <Link href="/insightspage">
        <h1>Insights</h1>
          </Link>
      </div>
      <div className={styles.card}>
          <Link href="/impactpage">
        <h1>Impact</h1>
        </Link>
      </div>
    </div>
    </main>
  )
}
