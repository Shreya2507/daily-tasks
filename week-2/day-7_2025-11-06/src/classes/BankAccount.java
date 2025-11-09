package classes;

public class BankAccount {
        private int accountNumber;
        private String holderName;
        private double balance;

        public BankAccount(int accountNumber, String holderName, double balance) {
            this.accountNumber = accountNumber;
            this.holderName = holderName;
            this.balance = balance;
        }

        public int getAccountNumber() {
            return accountNumber;
        }

        public void setAccountNumber(int accountNumber) {
            this.accountNumber = accountNumber;
        }

        public String getHolderName() {
            return holderName;
        }

        public void setHolderName(String holderName) {
            this.holderName = holderName;
        }

        public double getBalance() {
            return balance;
        }

        public void setBalance(double balance) {
            this.balance = balance;
        }

        @Override
        public String toString() {
            return "BankAccount{" +
                    "accountNumber=" + accountNumber +
                    ", holderName='" + holderName + '\'' +
                    ", balance=" + balance +
                    '}';
        }
}