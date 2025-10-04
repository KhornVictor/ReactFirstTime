function calculateStat(num) {
  return (num < 1000) ? num :
         (num >= 1000000000) ? (num / 1000000000).toFixed(1) + "B" :
         (num >= 1000000) ? (num / 1000000).toFixed(1) + "M" :
         (num / 1000).toFixed(1) + "k";
}

export default calculateStat;