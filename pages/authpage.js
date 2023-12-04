import Link from 'next/link';
import styles from 'app/styles/page.module.css'
export default function authPage() {
    return (
    <main>
        <header>
            <title>
                authpage
            </title>
        </header>
            <div className={styles.leftauthcard}>
            <form>
                <input type="phone" name="" value=""></input>
                <input type="submit" name="" value="Request Access"></input>
            </form>
        </div>
    </main>
    )
}