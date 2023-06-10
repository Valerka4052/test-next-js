import { MainLayout } from "@/components/MainLayout";
import Image from "next/image";
import styles from '../styles/main.module.css'
export default function MainPage  ()  {
    return (
        <MainLayout title={'Послуги адвоката'}>
            <div className={ styles.main}>
            <div className={styles.container}>
                    <div className={styles.textBox}>
                                            <div className={styles.imgBox}><Image priority={true} src="/1.jpg" width={450} height={280} alt="Юрій Білека" /></div>

                    <p className={styles.text}>Вітаю Вас на своєму сайті!

Спочатку давайте познайомимося. Я - адвокат. Звати мене Аветисян Роберт Миколайович. Народився я в 1967 році.

Після закінчення юридичного інституту я працював юрисконсультом на підприємстві, старшим слідчим прокуратури.

19 квітня 1995 я отримав свідоцтво про право на заняття адвокатською діяльністю № 340 і з цього часу працюю адвокатом.

Я є автором 5 книжок: науково-практичний посібник «100 зразків заяв до суду за цивільними справами», науково-практичний посібник «Зразки позовних заяв по сімейних справах», практичний посібник «100 зразків заяв до суду з цивільних справ», практичні посібник «Захист цивільних прав в суді: зразки процесуальних документів», науково-практичний посібник «Зразки заяв до суду з сімейних справ» (детальніше).

Рано чи пізно багато з нас у повсякденному житті зіштовхуються з такими проблемами, які дуже складно, а часом навіть неможливо вирішити без допомоги фахівця.

Відповідно до Конституції України кожен має право на правову допомогу. Дуже важливо, щоб така допомога була якісною і результативною. </p>
      </div>
                               </div>
                 <div className={styles.items}>
                    <p className={styles.docText}>сертифікати та документи</p>
                    <ul className={styles.docs} >
                        <li className={styles.item} ><div><Image Image priority={true} src="/no.jpg" width={400} height={300} alt="Юрій Білека" /></div></li>
                        <li className={styles.item}><div><Image Image priority={true} src="/no.jpg" width={400} height={300} alt="Юрій Білека" /></div></li>
                        <li className={styles.item}><div><Image Image priority={true} src="/no.jpg" width={400} height={300} alt="Юрій Білека" /></div></li>
                         <li className={styles.item}><div><Image Image priority={true} src="/no.jpg" width={400} height={300} alt="Юрій Білека"/></div></li>
                    </ul>
                </div>
                </div>
               
        </MainLayout>
    );
};