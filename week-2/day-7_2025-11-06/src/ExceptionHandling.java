import java.util.Scanner;

public class ExceptionHandling {
    static Scanner scanner = new Scanner(System.in);

    static void divisionWithException(){
        System.out.print("Enter the numerator : ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the denominator : ");
        int num2 = scanner.nextInt();

        try {
            double result = num1 / num2;
            System.out.println("Result = " + result);
        }
        catch(ArithmeticException e){
            System.out.println("Division by 0 is not allowed.");
        }
        finally {
            System.out.println("Division completed.");
        }
    }


    static void nestedExceptions(){
        try {
            int[] arr = {10, 20, 30, 40, 50};
//            Inner try block never executes
//            System.out.println(arr[5]);

            int num1 = 4;
            int num2 = 0;
            try {
                double result = num1 / num2;
                System.out.println("Result = " + result);
            }
            catch(ArithmeticException e){
                System.out.println("Division by 0 is not allowed.");
            }

//            Inner try block executes first
            System.out.println(arr[6]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("The array index is out of bounds.");
        }
    }


    //method chain
    static void m1(){
        try{
            m2();
        } catch (Exception e) {
            System.out.println("Error catched in m1");
//            throw new RuntimeException(e);
        }
    }
    static void m2(){
        try{
            m3();
        } catch (Exception e) {
            System.out.println("Error catched in m2 and re-thrown");
            throw new RuntimeException(e);
        }
    }
    static void m3(){
        try{
            System.out.println(5/0);
        }
        catch (Exception e) {
            System.out.println("Error catched in m3 and re-thrown");
            throw new RuntimeException(e);
        }
    }

    public static void main(String args[]){
//        divisionWithException();
//        nestedExceptions();
        m1();
    }

}
