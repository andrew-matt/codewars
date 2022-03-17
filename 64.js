var min = function(list){
    return list.reduce((min, cur) => min < cur ? min : cur)
}

var max = function(list){
    return list.reduce((max, cur) => max > cur ? max : cur)
}