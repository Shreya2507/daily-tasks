import classes.MathUtils;
import static classes.MathUtils.*;

public class VariablesAndControlFlow {
    public static void main(String[] args){
//        System.out.println(sumOfDigits(4567));
//        printTable(3);
//        System.out.println(getFactorial(6));
//        System.out.println(getReverseDigits(1234));

        //calling static methods
        System.out.println(max(3,4));
        System.out.println(min(4.66,90.4));
        System.out.println(avg(3,4));

        MathUtils m1 = new MathUtils();
        MathUtils m2 = new MathUtils();
        System.out.println(getObjectCount());
    }

    public static int sumOfDigits(int num){
        int sum = 0;

        while(num > 0){
            int remainder = num % 10;
            sum += remainder;

            num = num / 10;
        }

        return sum;
    }

    public static void printTable(int num){
        for(int i = 1; i <= 10; i++){
            System.out.println(num + " x " + i + " = " + num*i);
        }
    }

    public static int getFactorial(int num){
        int fact = 1;
        for(int i = 2; i <= num; i++){
            fact *= i;
        }

        return fact;
    }

    public static int getReverseDigits(int num){
        double result = 0;

        int n = 0;
        int numCopy = num;
        while(numCopy > 0) {
            numCopy = numCopy / 10;
            n += 1;
        }
        n = n-1;

        while(num > 0){
            int remainder = num % 10;

            result = result + ( remainder * (Math.pow(10, n)) );

            num = num / 10;
            n = n-1;
        }

        return (int) result;
    }


}
