function binarySearch(list, element) {
    if ( (target < list[0]) || (target > list[list.length-1]) )
        return -1

    let half = Math.floor(list.length / 2)

    if (target == list[half])
        return half
    else if (target < list[half])
        return binarySearch(list.slice(0, half+1), target)
    else
        return half + binarySearch(list.slice(half, list.length), target)
}
