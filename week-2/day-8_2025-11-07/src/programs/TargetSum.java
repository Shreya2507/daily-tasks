package programs;

import java.util.*;

public class TargetSum {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hmap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // Check if complement exists in map
            if (hmap.containsKey(complement)) {
                return new int[]{hmap.get(complement), i};
            }

            // Store current number and its index
            hmap.put(nums[i], i);
        }

        return new int[]{-1, -1}; // No solution found
    }


    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 26;
        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
}