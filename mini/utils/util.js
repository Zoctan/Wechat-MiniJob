const formatTime = unixTime => {
  const date = new Date(parseInt(unixTime))
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const currentTime = (split='/') => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join(split) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isEmpty = v => {
  let flag = false
  switch (typeof v) {
    case 'undefined':
      flag = true
      break
    case 'string':
      if (v.length === 0 || !v.trim()) {
        flag = true
      }
      break
    case 'boolean':
      if (!v) {
        flag = true
      }
      break
    case 'number':
      if (0 === v || isNaN(v)) {
        flag = true
      }
      break
    case 'object':
      if (v === null || v.length === 0) {
        flag = true
        break
      }
      if (Object.keys(v).length === 0) {
        flag = true
      }
      break
  }
  return flag
}

const isPhone = (value) => value && value.length === 11 && /^1\d{10}$/.test(value)

const isChinese = (value) => value && value.length >= 2 && /^[\u4E00-\u9FA5]*$/.test(value)

const isEmail = (value) => value && /^([a-zA-Z0-9_-]{1,16})@([a-zA-Z0-9]{1,9})(\.[a-zA-Z0-9]{1,9}){0,3}(\.(?:com|net|org|edu|gov|mil|cn|us)){1,4}$/.test(value)

module.exports = {
  formatTime: formatTime,
  currentTime: currentTime,
  isEmpty: isEmpty,
  isPhone: isPhone,
  isChinese: isChinese,
  isEmail: isEmail
}