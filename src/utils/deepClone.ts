/*
 * @Description: 文件描述
 * @version: 1.0
 * @Author: 吴东宇
 * @Date: 2022-08-22 15:39:03
 * @LastEditors: 吴东宇
 * @LastEditTime: 2022-08-22 16:14:06
 */
function deepClone<T>(target: Array<T>): Array<T>
function deepClone<T>(target: T): T
/**
 * @desc 深拷贝函数 （引用数据类型只考虑数组和普通对象）
 * @param target 目标变量
 * @returns 深拷贝后的值
 */
function deepClone<T>(target: Array<T> | T): Array<T> | T {
    // 原始数据类型
    if (
        target === null ||
        ['bigint', 'symbol', 'string', 'undefined', 'number', 'boolean'].includes(
            typeof target
        )
    ) {
        return target;
    }
    // 数组
    if (target instanceof Array) {
        return target.map((e) => deepClone(e));
    }
    // 函数 直接原型继承
    if (typeof target === 'function') {
        return target;
    }

    // 普通对象
    if (Object.prototype.toString.call(target) === '[object Object]') {
        if (target instanceof Object) {
            const res = {} as any;
            Object.entries(target).forEach(([a, b]) => {
                res[a] = deepClone(b);
            });
            return res;
        }
    }

    return target;
};

export {
    deepClone
}