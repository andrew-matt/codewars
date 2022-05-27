function formatDuration (seconds) {
        let y = Math.floor(seconds / 31536000)
        let d = Math.floor(seconds % 31536000 / 86400)
        let h = Math.floor(seconds % 86400 / 3600)
        let m = Math.floor(seconds % 3600 / 60)
        let s = (seconds % 3600) % 60
        let yStr = y > 1 ? `${y} years` : y === 1 ? `${y} year` : ""
        let dStr = d > 1 ? `${d} days` : d === 1 ? `${d} day` : ""
        let hStr = h > 1 ? `${h} hours` : h === 1 ? `${h} hour` : ""
        let mStr = m > 1 ? `${m} minutes` : m === 1 ? `${m} minute` : ""
        let sStr = s > 1 ? `${s} seconds` : s === 1 ? `${s} second` : ""
        let timeArr = [yStr, dStr, hStr, mStr, sStr]
        let timeArr2 = timeArr.filter(el => el !== "")
        let time

        if (timeArr2.length === 0) {
            time = "now"
        } else if (timeArr2.length === 1) {
            time = timeArr2.join()
        } else if (timeArr2.length === 2) {
            time = timeArr2.join(' and ')
        } else if (timeArr2.length > 2) {
            let arr = timeArr2.splice(timeArr2.length - 2, 2)
            time = timeArr2.join(', ') + ', ' + arr.join(' and ')
        }
  
        return time
}
