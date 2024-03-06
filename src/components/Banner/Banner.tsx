import * as React from 'react'
import styles from './Banner.module.scss'
import IncludeTheme from '../IncludeTheme/IncludeTheme'

export interface IBannerProps {
  bannerTitle: string
}

const Banner = ({ bannerTitle }: IBannerProps) => {
  return (
    <IncludeTheme>
      <div className={styles.wrapper}>
        <div className={styles.divider} />
        <div className={styles.content}>
          <span>{bannerTitle}</span>
        </div>
        <div className={styles.divider} />
      </div>
    </IncludeTheme>
  )
}

export default Banner
