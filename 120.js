function humanReadable (seconds) {
        let h = Math.floor(seconds / 3600)
        let m = Math.floor(seconds % 3600 / 60)
        let s = (seconds % 3600) % 60
        return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`
}