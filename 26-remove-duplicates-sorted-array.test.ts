import { expect, test } from "bun:test";

function removeDuplicates(nums: Array<number>): number {
  let replace = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[replace] = nums[i];
      replace++;
    }
  }
  return replace;
}

test("first", () => {
  let nums = [1, 1, 2];
  let res = removeDuplicates(nums);

  console.log(nums);

  expect(res).toBe(2);
});

test("second", () => {
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let res = removeDuplicates(nums);

  console.log(nums);

  expect(res).toBe(5);
});
