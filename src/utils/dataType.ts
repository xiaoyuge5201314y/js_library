type Type =
  | 'Number'
  | 'String'
  | 'Bigint'
  | 'Boolean'
  | 'Undefined'
  | 'Null'
  | 'Symbol'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Math'
  | 'Date'
  | 'Set'
  | 'Map'
  | 'TypeError'
  | 'WeakMap'
  | 'WeakSet'
  | 'JSON'
  | 'RegExp';
/**
 * @desc 获取数据类型
 * @param target 目标变量
 * @returns {Type} 数据类型
 */
export const dataType = function (target: unknown) {
  return Object.prototype.toString.call(target).slice(8, -1) as Type;
};

