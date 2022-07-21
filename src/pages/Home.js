import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'

import MainMenu from '../components/match/MainMenu'
import MatchMenu from '../components/match/MatchMenu'
import SearchMatch from '../components/match/SearchMatch'
import MatchList from '../components/match/MatchList'

const Home = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <MainMenu />
      <MatchMenu />
      <SearchMatch />
      <MatchList />
    </div>
  )
}

export default Home
