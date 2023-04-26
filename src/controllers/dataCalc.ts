const dateCalc = (param: number) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,'0')
  //날짜 계산
  const day = String(date.getDate()-param).padStart(2,'0')
  return `${year}${month}${day}`
}

export default dateCalc