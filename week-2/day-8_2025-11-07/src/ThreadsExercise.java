public class MyRunnable implements Runnable{
    @Override
    public void run(){
        System.out.println("Thread executing");
    }
}

public class MyTable{
    boolean flag = true;
    int i = 1;
    int j = 1;

    public synchronized void printTableof2() throws InterruptedException {
        while(i <= 10){
            while(!flag){
                wait();
            }

            //perform action
            System.out.println("2 x " + i + " = " + 2*i);

            //toggle shared variable
            flag = false;

            i++;

            //notify other thread to start
            notify();

        }
    }

    public synchronized void printTableof4() throws InterruptedException {
        while(j <= 10){
            while(flag){
                wait();
            }

            //perform action
            System.out.println("4 x " + j + " = " + 4*j);

            //toggle shared variable
            flag = true;

            j++;

            //notify other thread to start
            notify();

        }
    }

}


void main(){
//    Write a Java program with two threads: Thread 1 prints table of number 2. Thread 2 prints table of number 4.
//    Threads should be synced to print output one by one.

    MyTable obj = new MyTable();

    Thread thread1 = new Thread(new MyRunnable(){
        @Override
        public void run(){
            try {
                obj.printTableof2();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    });

    Thread thread2 = new Thread(new MyRunnable() {
        @Override
        public void run(){
            try {
                obj.printTableof4();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    });

    thread1.start();
    thread2.start();

}
