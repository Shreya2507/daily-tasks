package programs;

import java.util.*;

public class NonRepeating {

    public static Character findFirstNonRepeating(String str) {
        HashMap<Character, Integer> hmap = new HashMap<>();

        //get frequency of each character
        for (char c : str.toCharArray()) {
            if(hmap.containsKey(c)){
                int freq = hmap.get(c);
                hmap.put(c, freq + 1);
            }
            else{
                hmap.put(c, 1);
            }
        }

        // get first character with frequency 1
        for (char c : str.toCharArray()) {
            if (hmap.get(c) == 1) {
                return c;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        String str = "ShreyaMathur";
        System.out.println("First non-repeating character is : " + findFirstNonRepeating(str));
    }

    // LinkedHashMap to maintain order
}