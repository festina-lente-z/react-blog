import { parseJsonByString } from '../../../../../common/utils'
import styles from './style.module.scss'

const schema = parseJsonByString(window.localStorage?.schema,{})

const Banner = () => {
  const title = schema?.children?.[0]?.attributes?.title || 'festinalente的博客'
  const description = schema?.children?.[0]?.attributes?.description || '热爱前端，热爱生活。'
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