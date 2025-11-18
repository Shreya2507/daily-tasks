package org.example.FunctionalInterfaceDemo;

public class Main {
    static void main(){
        NumberRule<Integer, Boolean> isEven = (n) -> n % 2 == 0;
        NumberRule<Integer, Boolean> iPrime = (n) -> {

            return false;
        };
    }
}
