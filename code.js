function binarySearch(list, element) {

    if (list.length < 1)
        return -1
    else if (list.length == 1)
        return 0

    if ( (element < list[0]) || (element > list[list.length-1]) )
        return -1

    let half = Math.floor(list.length / 2)

    if (element <= list[half])
        if (element == list[half-1])
            return binarySearch(list.slice(0, half), element)
        else if (element <= list[half-1])
            return binarySearch(list.slice(0, half), element)
        else
            return half
    else
        return half + binarySearch(list.slice(half, list.length), element)
}
