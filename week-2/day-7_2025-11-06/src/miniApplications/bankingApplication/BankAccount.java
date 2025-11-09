package miniApplications.bankingApplication;

public class BankAccount {
    private int accountNumber;
    private String name;
    private double balance;
    private static int totalCurrentAccounts;

    public BankAccount(int accountNumber, String name, double balance) throws InvalidAmountException {
        if (balance <= 0) {
            throw new InvalidAmountException("Initial balance must be positive.");
        }

        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;

        totalCurrentAccounts++;
    }

    public static int getTotalCurrentAccounts() {
        return totalCurrentAccounts;
    }

    public double deposit(double amount) throws InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Deposit amount must be positive.");
        }

        balance += amount;
        return balance;
    }

    public double withdraw(double amount) throws InvalidAmountException, InsufficientFundException {
        if (amount <= 0) {
            throw new InvalidAmountException("Withdrawal amount must be positive.");
        }

        if (amount > balance) {
            throw new InsufficientFundException("You do not have sufficient funds for withdrawal.");
        }

        balance -= amount;
        return balance;
    }

    public double getBalance(){
        return balance;
    }
}
