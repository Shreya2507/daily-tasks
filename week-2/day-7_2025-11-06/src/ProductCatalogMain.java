import classes.Customer;
import miniApplications.productCatalog.InvalidPriceException;
import miniApplications.productCatalog.Product;

void main() throws InvalidPriceException {

    try {
        Product p1 = new Product(101, "Laptop", 70000);
        Product p2 = new Product(105, "Mobile", 30000);
        Product p3 = new Product(305, "Sports shoes", 5000);
//        Product p4 = new Product(532, "TV", -90000);

        ArrayList<Product> productList = new ArrayList<>();
        productList.add(p1);
        productList.add(p2);
        productList.add(p3);
//        productList.add(p4);

        for(Product p : productList){
            System.out.println(p);
        }
    }
    catch(InvalidPriceException e){
        System.out.println(e.getMessage());
    }


}