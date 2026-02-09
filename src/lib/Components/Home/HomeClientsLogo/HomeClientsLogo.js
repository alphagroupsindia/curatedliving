import Image from 'next/image';
import imgLogo1 from './1w.png'
import imgLogo2 from './2w.png'
import imgLogo3 from './3w.png'
import imgLogo4 from './4w.png'
import styles from './HomeClientsLogo.module.css';
const HomeClientsLogo=()=>{
    return  <div className={styles.homeClientsLogo}>
       <div className='container container-custom'>
        <div className='row'>
            <div className='col-sm-3 col-6'>
                <Image className={styles.image} src={imgLogo1} width={150}></Image>
            </div>
            <div className='col-sm-3 col-6'>
                <Image className={styles.image} src={imgLogo2} width={120}></Image>
            </div>
            <div className='col-sm-3 col-6'>
                <Image className={styles.image} src={imgLogo3} width={170}></Image>
            </div>
            <div className='col-sm-3 col-6'>
                <Image className={styles.image} src={imgLogo4} width={170}></Image>
            </div>
        </div>
        </div>
    </div>
}
export default HomeClientsLogo;