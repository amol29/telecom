export const getTimeStampFromDate = (date)=> {
  if(!date) return null
  const [d, m, y] = date.split(/-|\//); // splits "26-02-2012" or "26/02/2012"
  return new Date(y, m - 1, d).getTime()
}

export const addDays = (days) => {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result.toLocaleDateString();
}