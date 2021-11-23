import styles from './style.module.scss'
import avatarImg from './avatar.jpeg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.person}>
        <img className={styles.avatar} src={avatarImg} alt="avatar"/>
        <div className={styles.title}>festinalente 的博客</div>
        <div className={styles.description}>热爱前端，热爱生活。</div>
      </div>
    </div>
  )
}

export default Banner;