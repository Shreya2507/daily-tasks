package miniApplications.employeeSystem;

public class Employee {
    private String firstName;
    private String lastName;
    private int employeeId;
    private int departmentId;

    public Employee(String firstName, String lastName, int employeeId, int departmentId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.departmentId = departmentId;
    }

    public double calculateSalary(){
        return 0.0;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }


    @Override
    public String toString() {
        return "Employee{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", employeeId=" + employeeId +
                ", departmentId='" + departmentId + '\'' +
                '}';
    }
}
