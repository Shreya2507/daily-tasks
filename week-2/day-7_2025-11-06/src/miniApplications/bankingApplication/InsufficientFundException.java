package miniApplications.bankingApplication;

public class InsufficientFundException extends Exception{
    public InsufficientFundException(String m){
        super(m);
    }
}