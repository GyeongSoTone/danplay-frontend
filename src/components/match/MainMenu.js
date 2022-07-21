import React from 'react'
import styles from './MainMenu.module.scss'
import classNames from 'classnames/bind'

const MainMenu = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <a className={cx('menu-item', 'view-match')} href="/">
        매치조회
      </a>
      <div className={cx('link-menu')}>
        <a className={cx('menu-item')} href="/reserve">
          구장예약
        </a>
        <a className={cx('menu-item')} href="/addmatch">
          매치등록
        </a>
      </div>
    </div>
  )
}

export default MainMenu
