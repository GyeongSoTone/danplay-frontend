import React, { useState } from 'react'
import styles from './SearchMatch.module.scss'
import classNames from 'classnames/bind'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const cx = classNames.bind(styles)

const DateBox = ({ name }) => {
  const [date, setDate] = useState()

  const handleChange = (date) => {
    setDate(dayjs(date).format('YYYY-MM-DD'))
  }

  return (
    <div className={cx('date-container')}>
      <DatePicker
        onChange={(selectedDate) => handleChange(selectedDate)}
        minDate={new Date()}
        customInput={
          <CalendarMonthOutlinedIcon
            className={cx('calendar-icon')}
            sx={{ stroke: '#ffffff', strokeWidth: 1, fontSize: 16 }}
          />
        }
      />
      <input name={name} type="date" value={date} />

      <div>{date}</div>
    </div>
  )
}

const SearchMatch = () => {
  return (
    <div className={cx('container')}>
      <form className={cx('search-box')}>
        <div className={cx('search-form')}>
          <div className={cx('search-option', 'search-date')}>
            <div className={cx('search-label')}>기간 설정</div>
            <DateBox name="startDate" />
            <div className={cx('search-wave')}>~</div>
            <DateBox name="endDate" />
          </div>
          <div className={cx('search-option')}>
            <div className={cx('search-label')}>성별</div>
            <input type="radio" name="gender" value="male" defaultChecked />
            <div className={cx('radio-label')}>남자</div>
            <input type="radio" name="gender" value="female" />
            <div className={cx('radio-label')}>여자</div>
            <input type="radio" name="gender" value="both" />
            <div className={cx('radio-label')}>모두</div>
          </div>
        </div>
        <button className={cx('form-btn')} type="submit">
          검색
        </button>
      </form>
    </div>
  )
}

export default SearchMatch
