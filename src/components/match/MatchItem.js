import React from 'react'
import dayjs from 'dayjs'
import styles from './MatchItem.module.scss'
import classNames from 'classnames/bind'

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import WcOutlinedIcon from '@mui/icons-material/WcOutlined'

const cx = classNames.bind(styles)

const MatchItem = ({ item }) => {
  const { maxNumberOfParticipants, place, startTime, gender, participants } =
    item
  const numberOfPlayer = maxNumberOfParticipants / 2
  const numberOfParticipants = participants.length

  const dayjsDate = dayjs(startTime)

  const dateTxt =
    (dayjsDate.get('month') + 1).toString().padStart(2, '0') +
    '/' +
    dayjsDate.get('date').toString().padStart(2, '0')

  const timeTxt =
    dayjsDate.get('hour').toString().padStart(2, '0') +
    ':' +
    dayjsDate.get('minute').toString().padStart(2, '0')

  const genderTxt = (() => {
    if (gender === 'male') {
      return '남자'
    } else if (gender === 'female') {
      return '여자'
    } else {
      return '모두'
    }
  })()

  const backColor = (() => {
    if (numberOfParticipants / maxNumberOfParticipants > 0.7) {
      return 'red'
    } else {
      return 'yellow'
    }
  })()

  return (
    <div className={cx('container')}>
      <div className={cx('container-data')}>
        <div className={cx('date-time')}>
          <div className={cx('date')}>{dateTxt}</div>
          <div className={cx('time')}>
            {timeTxt}
            <div className={cx('mark')} />
          </div>
        </div>
        <div className={cx('data-box')}>
          <div className={cx('data')}>
            <PinDropOutlinedIcon
              sx={{ stroke: '#ffffff', strokeWidth: 1, fontSize: 24 }}
            />
            <div className={cx('data-txt')}>{place}</div>
          </div>
          <div className={cx('data')}>
            <GroupOutlinedIcon
              sx={{ stroke: '#ffffff', strokeWidth: 1, fontSize: 24 }}
            />
            <div className={cx('data-txt')}>
              {numberOfPlayer} vs {numberOfPlayer}
            </div>
          </div>
          <div className={cx('data')}>
            <WcOutlinedIcon
              sx={{ stroke: '#ffffff', strokeWidth: 1, fontSize: 24 }}
            />
            <div className={cx('data-txt')}>{genderTxt}</div>
          </div>
        </div>
      </div>
      <div className={cx('num-of-participants', backColor)}>
        {numberOfParticipants}/{maxNumberOfParticipants}
      </div>
    </div>
  )
}

export default MatchItem
