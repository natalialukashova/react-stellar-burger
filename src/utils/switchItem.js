export const switchItems = (arr, start, end) => {
  if (start === end) {
    return arr;
  }
  let result;
  if (start > end) {
    result = [
      ...arr.slice(0, end - 1),
      arr[start],
      ...arr.slice(end + 1, start - 1),
      ...arr.slice(start + 1, arr.length - 1),
    ];
  } else {
    result = [
      ...arr.slice(0, start - 1),
      ...arr.slice(start + 1, end - 1),
      arr[start],
      ...arr.slice(end, arr.length - 1),
    ];
  }
  return result;
};
