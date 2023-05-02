const dateCalc = (param: number) => {
  const now = new Date()
  const date = new Date(now.getTime() - param * 24 * 60 * 60 * 1000)
  
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,'0')
  //날짜 계산
  const day = String(date.getDate()).padStart(2,'0')
  return `${year}${month}${day}`
}

export default dateCalc