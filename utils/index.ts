export const joinCleanly = (arr: (string | number | null | undefined)[], separator = " ") =>
  arr.filter((item) => !!item).join(separator)
