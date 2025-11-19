package org.example;

public class Resource {
//    int[] buffer = new int[5];
    int buffer_size = 0;

    synchronized void  produce(int i) throws InterruptedException {
        //if buffer full, wait
        while(buffer_size == 5){
            wait();
        }

        //produce data
        System.out.println("Produced " + i);
        buffer_size++;

        //notify other threads
        notify();
    }

    synchronized void consume(int i) throws InterruptedException {
        //if no data to consume, wait
        while(buffer_size == 0 ){
            wait();
        }

        //consume data
        System.out.println("Consumed " + i);
        buffer_size--;

        //notify other threads
        notify();
    }

}
