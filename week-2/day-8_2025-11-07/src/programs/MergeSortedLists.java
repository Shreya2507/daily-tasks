package programs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MergeSortedLists {

        public static List<Integer> mergeLists(List<Integer> list1, List<Integer> list2) {
            List<Integer> mergedList = new ArrayList<>(list1);
            mergedList.addAll(list2);
            Collections.sort(mergedList);
            return mergedList;
        }

        public static void main(String[] args) {
            List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 3, 5, 7));
            List<Integer> list2 = new ArrayList<>(Arrays.asList(2, 4, 6, 8));

            List<Integer> result = mergeLists(list1, list2);
            System.out.println("Merged list: " + result);
        }

}
