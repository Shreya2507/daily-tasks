package miniApplications.employeeSystem;

public class PartTimeEmployee extends Employee{
    private double hourlyRate;
    private int hoursWorked;

    public PartTimeEmployee(String firstName, String lastName, int employeeId, int departmentId, double hourlyRate, int hoursWorked) {
        super(firstName, lastName, employeeId, departmentId);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public double calculateSalary(){
        return hourlyRate*hoursWorked;
    }

    public double getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(double hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public int getHoursWorked() {
        return hoursWorked;
    }

    public void setHoursWorked(int hoursWorked) {
        this.hoursWorked = hoursWorked;
    }

    @Override
    public String toString() {
        return super.toString() + "PartTimeEmployee{" +
                "hourlyRate=" + hourlyRate +
                ", hoursWorked=" + hoursWorked +
                '}';
    }
}
