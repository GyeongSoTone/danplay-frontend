import React from 'react'
import MatchItem from './MatchItem'
import { MatchData } from './mock/index'
import styles from './MatchList.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MatchList = () => {
  return (
    <div className={cx('container')}>
      {MatchData.map((data) => (
        <MatchItem key={data.id} item={data} />
      ))}
    </div>
  )
}

export default MatchList
