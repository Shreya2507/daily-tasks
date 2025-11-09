package classes;

public class MathUtils {

        //Using static

        private static int counter;

        public MathUtils(){
            counter++;
            System.out.println("No. of objects created = " + counter);
        }

        public static int getObjectCount(){
            return counter;
        }

        public static double max(double num1, double num2){
            return num1 > num2 ? num1 : num2;
        }

        public static double min(double num1, double num2){
            return num1 < num2 ? num1 : num2;
        }

        public static double avg(double num1, double num2) {
            return (num1 + num2) / 2;
        }
}
