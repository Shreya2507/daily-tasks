package customExceptions;

public class InvalidEmailException extends Exception {
    public InvalidEmailException(String m){
        super(m);
    }
}
