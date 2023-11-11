import moment from "moment/moment"

export const moneyFormat = (money = 0) => {
    let converted = new Intl.NumberFormat('en-US',{
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(money)
  
    return converted
  
}

export const dateFormat = (date ="", format ="YYYY-MM-D", outputFormat = "dddd, DD MMM") => {
  let momentDate = moment(date, format)

  return momentDate.format(outputFormat)
}
  