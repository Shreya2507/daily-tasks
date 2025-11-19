package org.example;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ProducerConsumer {

    static void main() {
        Resource resource = new Resource();

        ExecutorService service = Executors.newFixedThreadPool(2);

        Runnable producer = () -> {
            try{
                for(int i = 1; i <= 50; i++){
                    resource.produce(i);
                }
            }
            catch(InterruptedException e){
                throw new RuntimeException(e);
            }
        };

        Runnable consumer = () -> {
            try{
                for(int i = 1; i <= 50; i++){
                    resource.consume(i);
                }
            }
            catch(InterruptedException e){
                throw new RuntimeException(e);
            }
        };

        service.submit(producer);
        service.submit(consumer);

        service.shutdown();

    }
}
