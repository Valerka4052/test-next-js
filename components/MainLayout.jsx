import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from './MainLayout.module.css'
import { useState } from "react"
export const MainLayout = ({title,children}) => {
    const [show, setShow] = useState(false);
    const toggleShow=()=>{setShow(prev=>!prev)}
    return (
        <>
            <Head><title>{title}</title></Head>
            <header className={styles.header}>
                
                <div className={styles.img}> <Image src="/head.jpg" width={100} height={100} alt="justise" /></div>
                <div className={styles.centerContainer}>
                    <p className={styles.nameText} >Білека Юрій Іванович</p>
                    <div className={styles.linkContainer}>
                    <Link className={styles.link} href={'/'}>Про мене</Link>
                        <Link className={styles.link} href={'/practice'}>практика</Link>
                      {/* <div style={{position:'relative'}}>  <button onClick={toggleShow} className={styles.but}>Ціни</button>
                        <div className={styles.hid} style={{display:show?'flex':'none'}}>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                            <a href="">dfwrg</a>
                        </div></div> */}
                        <Link className={styles.link} href={'/price'}>Ціни</Link>
                         <Link className={styles.link} href={'/services'}>Послуги</Link>
                        <Link className={styles.link} href={'/contactMe'}>Звязатися зі мною</Link>
                        </div>
                </div>
                
                <div className={styles.info}>
                    <a className={styles.infoText} href="tel:09898989898">+38 (098) 111-11-11</a>
                    <a className={styles.infoTextMail} href="mailto:someERmail@example.com">someERmail@example.com</a>
                </div>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
}

