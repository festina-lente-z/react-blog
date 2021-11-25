import styles from './style.module.scss'

const Banner = () => {
  return (
    <div className="wrapper">
      <div className={styles.banner}>
        <div className={styles.person}>
          <img className={styles.avatar} src="https://festinalente-serverless-project-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg" alt="avatar"/>
          <div className={styles.title}>festinalente 的博客</div>
          <div className={styles.description}>热爱前端，热爱生活。</div>
        </div>
      </div>
    </div> 
  )
}

export default Banner;