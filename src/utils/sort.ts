/**
 * @desc sort排序
 * @param src 源数组
 * @param positiveSequence 是否正序
 */
export function sort(src: number[], positiveSequence: boolean = true): number[] {
    return src.sort(function (a, b) {
        return positiveSequence ? a - b : b - a
    })
}

/**
 * @desc 冒泡排序
 * @param src 源数组
 */
export function bubbleSort(src: number[]): number[] {
    for (let i = 0; i < src.length - 1; i++) {
        let flag = false
        for (let j = 0; j < src.length - 1 - i; j++) {
            if (src[j] > src[j + 1]) {
                [src[j], src[j + 1]] = [src[j + 1], src[j]]
                flag = true
            }
        }
        if (!flag) {
            break
        }
    }
    return src
}

/**
 * @desc 选择排序 从数组内遍历出最大值，加入新数组，将最大值从原数组中删除
 * @param src 源数组
 */
export function chooseSort(src: number[]): number[] {
    let minIndex: number
    for (let i = 0; i < src.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < src.length; j++) {
            if (src[i] < src[minIndex]) {
                minIndex = i
            }
        }
        [src[i], src[minIndex]] = [src[minIndex], src[i]]
    }
    return src
}

/**
 * 插入排序
 * @param src 源数组
 */
export function insertSort(src: number[]): number[] {
    for (let i = 1; i < src.length; i++) {
        let firstNum = src[i]
        let j = i - 1
        for (; j >= 0; j--){
            if (firstNum >= src[j]) {
                break;
            }
            src[j+1] = src[j]
        }
        src[j+1] = firstNum
    }
    return src
}

// export function sort(src: number[]): number[] {
//
//
//     return src
// }




