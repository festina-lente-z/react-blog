import styles from './style.module.scss'

const Banner = () => {
  const title = window.localStorage.title || 'festinalente的博客'
  const description = window.localStorage.description || '热爱前端，热爱生活。'
  return (
    <div className="wrapper">
      <div className={styles.banner}>
        <div className={styles.person}>
          <img className={styles.avatar} src="https://festinalente-serverless-project-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg" alt="avatar"/>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div> 
  )
}

export default Banner;