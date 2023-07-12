export const moveInArray = function (arr, from, to) {
  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error("Please provide a valid array");
  }

  const item = arr.splice(from, 1);

  if (!item.length) {
    throw new Error("There is no item in the array at index " + from);
  }

  arr.splice(to, 0, item[0]);
  return arr;
};

// export const switchItems = ([1, 2, 3], start = 2, end = 0) => {
//   if (start === end) {
//     return arr;
//   }
//   let result; [3, 1, 2]
//   if (start > end) {
//     result = [
//       ...arr.slice(0, end - 1),
//       arr[start],
//       ...arr.slice(end + 1, start - 1),
//       ...arr.slice(start + 1, arr.length - 1),
//     ];
//   } else {
//     result = [
//       ...arr.slice(0, start - 1),
//       ...arr.slice(start + 1, end - 1),
//       arr[start],
//       ...arr.slice(end, arr.length - 1),
//     ];
//   }
//   return result;
// };
