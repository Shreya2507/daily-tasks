package classes;

public class Car {

    private String modelName;
    private double price;

    Car(String modelName){
        this.modelName = modelName;
    }

    Car(String modelName, double price){
        this.modelName = modelName;
        this.price = price;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Car{" +
                "modelName='" + modelName + '\'' +
                ", price=" + price +
                '}';
    }


}
