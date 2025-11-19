package org.example.FunctionalInterfaceDemo;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


public class Main {
    static void main(){
        NumberRule isEven = (n) -> n % 2 == 0;
        NumberRule isPrime = (n) -> {
            if (n <= 1) return false;

            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        };

        List<Integer> nums = Arrays.asList(3, 10, 15, 8, 21, 14, 7);

        List<Integer> result = nums.stream()
                .filter(n -> isEven.apply(n) && isPrime.apply(n))
                .map(n -> n * n)
                .collect(Collectors.toList());


        Optional<Integer> firstSquared = result.stream().findFirst();

        if (firstSquared.isPresent()) {
            System.out.println("First squared number: " + firstSquared.get());
        } else {
            System.out.println("No matching number found");
        }


    }
}
