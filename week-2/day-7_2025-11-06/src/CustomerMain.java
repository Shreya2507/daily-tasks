import classes.Customer;
import customExceptions.InvalidEmailException;

void main() throws InvalidEmailException {
    Customer c1 = new Customer(101, "Customer 1", "cust1@gmail.com");
    Customer c2 = new Customer(102, "Customer 2", "cust2@gmail.com");
    Customer c3 = new Customer(103, "Customer 3", "cust3@gmail.com");

    ArrayList<Customer> customerList = new ArrayList<>();
    customerList.add(c1);
    customerList.add(c2);
    customerList.add(c3);

    for (Customer customer : customerList) {
        System.out.println(customer);
    }

    //check only for '@' character
    Customer c4 = new Customer(104, "Customer 4", "invalidEmail_gmail-com");

}
