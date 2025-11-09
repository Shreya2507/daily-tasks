package miniApplications.productCatalog;

public class Product {
    private int id;
    private String name;
    private double price;

    public Product(int id, String name, double price) throws InvalidPriceException {
        this.id = id;
        this.name = name;

        if(price < 0){
            throw new InvalidPriceException("Price must be positive");
        }
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) throws InvalidPriceException {
        if(price < 0){
            throw new InvalidPriceException("Price must be positive");
        }

        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
