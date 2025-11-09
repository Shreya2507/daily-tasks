package classes;

import customExceptions.InvalidEmailException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Customer {
    private int id;
    private String name;
    private String email;

    public Customer(int id, String name, String email) throws InvalidEmailException {
        this.id = id;
        this.name = name;
        validateEmail(email);
        this.email = email;
    }

    public void validateEmail(String email) throws InvalidEmailException{
//        final String EMAIL_REGEX = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
//        Pattern pattern = Pattern.compile(EMAIL_REGEX);
//        Matcher matcher = pattern.matcher(email);

//        if(!matcher.matches()){
//            throw new InvalidEmailException("Email must be valid");
//        }

        //check only if email contains '@' character
        if(email == null || !email.contains("@")){
            throw new InvalidEmailException("Email must be valid");
        }
    }

    public long getId() {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) throws InvalidEmailException {
        validateEmail(email);
        this.email = email;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
