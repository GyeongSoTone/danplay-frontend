import React from 'react'
import styles from './MatchMenu.module.scss'
import classNames from 'classnames/bind'

const MatchMenu = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <div className={cx('menu-item', 'selected')}>풋살</div>
      <div className={cx('menu-item')}>축구</div>
      <div className={cx('menu-item')}>농구</div>
      <div className={cx('menu-item')}>테니스</div>
    </div>
  )
}

export default MatchMenu
