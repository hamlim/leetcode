import { expect, test } from "bun:test";

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    // Burnt through second list
    // exit
    if (second < 0) {
      break;
    }

    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      // replace current element in the first array with the element from the second array
      nums1[i] = nums2[second];
      second--;
    }
  }

  // // no elements in nums2, bail
  // if (n === 0) {
  //   return;
  // }

  // if (m === 0) {
  //   for (let i = 0; i < n; i++) {
  //     nums1[i] = nums2[i];
  //   }
  //   return;
  // }

  // let first = m - 1;
  // let second = n - 1;
  // let end = m + n - 1;

  // while (second >= 0) {
  //   if (nums2[second] > nums1[first]) {
  //     nums1[end] = nums2[second];
  //     second--;
  //     end--;
  //   } else if (nums2[second] < nums1[first]) {
  //     nums1[end] = nums1[first];
  //     end--;
  //     if (first === 0) {
  //       nums1[first] = 0;
  //     } else {
  //       first--;
  //     }
  //   }
  //   console.log(nums1);
  // }
}

test("first", () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("second", () => {
  let nums1 = [1];
  merge(nums1, 1, [], 0);
  expect(nums1).toEqual([1]);
});

test("third", () => {
  let nums1 = [0];
  merge(nums1, 0, [1], 1);
  expect(nums1).toEqual([1]);
});

test("first failure", () => {
  let nums1 = [4, 5, 6, 0, 0, 0];
  merge(nums1, 3, [1, 2, 3], 3);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

test("second failure", () => {
  let nums1 = [4, 0, 0, 0, 0, 0];
  merge(nums1, 1, [1, 2, 3, 5, 6], 5);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});
