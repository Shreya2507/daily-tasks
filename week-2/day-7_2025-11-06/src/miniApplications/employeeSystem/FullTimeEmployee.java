package miniApplications.employeeSystem;

public class FullTimeEmployee extends Employee {
    private double monthlySalary;

    public FullTimeEmployee(String firstName, String lastName, int employeeId, int departmentId, double monthlySalary) {
        super(firstName, lastName, employeeId, departmentId);
        this.monthlySalary = monthlySalary;
    }

    @Override
    public double calculateSalary(){
        return monthlySalary*12;
    }

    public double getMonthlySalary() {
        return monthlySalary;
    }

    public void setMonthlySalary(double monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

    @Override
    public String toString() {
        return super.toString() + "FullTimeEmployee{" +
                "monthlySalary=" + monthlySalary +
                '}';
    }
}
