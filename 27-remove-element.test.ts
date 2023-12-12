import { expect, test } from "bun:test";

// fundamentally it's a sorting algo....

function removeElement(nums: number[], val: number): number {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
}

test("first", () => {
  let nums = [3, 2, 2, 3];
  let val = 3;
  let res = removeElement(nums, val);
  expect(res).toBe(2);
  expect(nums.slice(0, 2).sort()).toEqual([2, 2]);
});

test("second", () => {
  let nums = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  let res = removeElement(nums, val);
  expect(res).toBe(5);
  expect(nums.slice(0, 5).sort()).toEqual([0, 0, 1, 3, 4]);
});
