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
//    Same program using ExecutorService

    MyTable obj = new MyTable();

    ExecutorService executor = Executors.newFixedThreadPool(2);


    Runnable task1 = () -> {
            try {
                obj.printTableof2();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
    };
    Runnable task2 = () -> {
        try {
            obj.printTableof4();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    };

    executor.submit(task1);
    executor.submit(task2);


    executor.shutdown(); // Stop accepting new tasks
    try {
        if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
            executor.shutdownNow(); // Force shutdown if tasks take too long
        }
    } catch (InterruptedException e) {
        executor.shutdownNow();
        Thread.currentThread().interrupt();
    }

}
