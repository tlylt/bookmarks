<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

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
  - Can you modify the binary search algorithm to return all matching ones?
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
            mid = l + ((r - l) // 2) # avoid overflow
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
        mid = l + ((r - l) // 2) # avoid overflow
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            return self.helper(nums, l, mid-1, target)
        else:
            return self.helper(nums, mid+1, r, target)
```

# Question
<h2><a href="https://leetcode.com/problems/remove-element/">27. Remove Element</a></h2><h3>Easy</h3><hr><div><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The relative order of the elements may be changed.</p>

<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p>

<p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.</p>

<p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>0 &lt;= val &lt;= 100</code></li>
</ul>
</div>

## Discussions

- Can you actually delete an element in an array?
  - Usually elements in the array are continuous blocks of memory, so you can delete an element by overwriting it with the last element and then decreasing the length of the array.
- What is the brute force approach?
  - Double for loop, O(n^2), one for loop to iterate over the elements, the other for loop to update the elements
- Can you do it with only one loop?
- What is the time and space complexity?
  - time ：O(n), space: O(1)

## Solutions

Double pointer both starting from the beginning.

```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = 0
        for i in range(len(nums)):
            if nums[i] == val:
                continue
            else:
                nums[l] = nums[i]
                l+=1
        return
```

Double pointer with one left and one right pointer.

```c++
/**
* 相向双指针方法，基于元素顺序可以改变的题目描述改变了元素相对位置，确保了移动最少元素
* 时间复杂度：O(n)
* 空间复杂度：O(1)
*/
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int leftIndex = 0;
        int rightIndex = nums.size() - 1;
        while (leftIndex <= rightIndex) {
            // 找左边等于val的元素
            while (leftIndex <= rightIndex && nums[leftIndex] != val){
                ++leftIndex;
            }
            // 找右边不等于val的元素
            while (leftIndex <= rightIndex && nums[rightIndex] == val) {
                -- rightIndex;
            }
            // 将右边不等于val的元素覆盖左边等于val的元素
            if (leftIndex < rightIndex) {
                nums[leftIndex++] = nums[rightIndex--];
            }
        }
        return leftIndex;   // leftIndex一定指向了最终数组末尾的下一个元素
    }
};
```

# Question

Replace every space with `%20`.

input: s = "We are happy."

output: "We%20are%20happy."

[Link](https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.md)

## Discussions

- Can you do it with only one loop?
- What is the time and space complexity?
  - time ：O(n), space: O(1)

## Solutions

```python
class Solution:
    def replaceSpace(self, s: str) -> str:
        n = 0
        for i in s:
            if i == ' ':
                n += 2
        ans = [""] * (len(s) + n)
        l = len(s) + n - 1
        r = len(s) - 1
        while r >= 0:
            if s[r] == ' ':
                ans[l] = '0'
                ans[l-1] = '2'
                ans[l-2] = '%'
                l -= 3
            else:
                ans[l] = s[r]
                l -= 1
            r -= 1
        return "".join(ans)
```

# Question

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Input: root = [1]
Output: 0

## Discussions
- For recursive, what order are you using?
- Can it be done iteratively?
- Can it be done via level traversal?
## Solutions

Recursive
```python
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if not root: 
            return 0
        
        left_left_leaves_sum = self.sumOfLeftLeaves(root.left)  # 左
        right_left_leaves_sum = self.sumOfLeftLeaves(root.right) # 右
        
        cur_left_leaf_val = 0
        if root.left and not root.left.left and not root.left.right: 
            cur_left_leaf_val = root.left.val 
            
        return cur_left_leaf_val + left_left_leaves_sum + right_left_leaves_sum # 中
```

Iterative
```python
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        """
        Idea: Each time check current node's left node. 
              If current node don't have one, skip it. 
        """
        stack = []
        if root: 
            stack.append(root)
        res = 0
        
        while stack: 
            # 每次都把当前节点的左节点加进去. 
            cur_node = stack.pop()
            if cur_node.left and not cur_node.left.left and not cur_node.left.right: 
                res += cur_node.left.val
                
            if cur_node.left: 
                stack.append(cur_node.left)
            if cur_node.right: 
                stack.append(cur_node.right)
                
        return res
```

# Question

349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000


## Discussion
- O(n+m) time, O(n+m) space
## Solution

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        if (nums1 == null || nums1.length == 0 || nums2 == null || nums2.length == 0) {
            return new int[0];
        }
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> resSet = new HashSet<>();
        //遍历数组1
        for (int i : nums1) {
            set1.add(i);
        }
        //遍历数组2的过程中判断哈希表中是否存在该元素
        for (int i : nums2) {
            if (set1.contains(i)) {
                resSet.add(i);
            }
        }
        //将结果几何转为数组
        return resSet.stream().mapToInt(x -> x).toArray();
    }
}
```

(Remarks from LeetCode discuss)
This is a Facebook interview question.
They ask for the intersection, which has a trivial solution using a hash or a set.

Then they ask you to solve it under these constraints:
O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).
You are told the lists are sorted.

Cases to take into consideration include:
duplicates, negative values, single value lists, 0's, and empty list arguments.
Other considerations might include
sparse arrays.

```js
function intersections(l1, l2) {
    l1.sort((a, b) => a - b) // assume sorted
    l2.sort((a, b) => a - b) // assume sorted
    const intersections = []
    let l = 0, r = 0;
    while ((l2[l] && l1[r]) !== undefined) {
       const left = l1[r], right = l2[l];
        if (right === left) {
            intersections.push(right)
            while (left === l1[r]) r++;
            while (right === l2[l]) l++;
            continue;
        }
        if (right > left) while (left === l1[r]) r++;
         else while (right === l2[l]) l++;
        
    }
    return intersections;
}
```
