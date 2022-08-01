# Question
<h2><a href="https://leetcode.com/problems/binary-search/">704. Binary Search</a></h2><h3>Easy</h3><hr><div><p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>

<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 9
<strong>Output:</strong> 4
<strong>Explanation:</strong> 9 exists in nums and its index is 4
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 2
<strong>Output:</strong> -1
<strong>Explanation:</strong> 2 does not exist in nums so return -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></code></li>
	<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>
</div>

## Discussions

- Must the input be unique? What happens if it is not unique? Can you still use binary search?
  - Yes, but the result may not be the only matching value
- How do you define the boundary of the while loop,  `[left, right]` or `[left, right)`? Can you come up with both solutions?
- Can you do it both iteratively and recursively?
- What is the time and space complexity?

## Solutions

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                r = mid - 1
            else:
                l = mid + 1
        return -1
```

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return self.helper(nums, 0, len(nums)-1, target)
    def helper(self, nums, l, r, target):
        if l > r:
            return -1
        mid = (l+r) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            return self.helper(nums, l, mid-1, target)
        else:
            return self.helper(nums, mid+1, r, target)
```
