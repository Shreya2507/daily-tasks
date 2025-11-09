import miniApplications.employeeSystem.FullTimeEmployee;
import miniApplications.employeeSystem.PartTimeEmployee;

void main(){
    FullTimeEmployee employee1 = new FullTimeEmployee("Shreya", "Mathur", 101, 34, 50000);
    System.out.print("Salary of full time employee = ");
    System.out.print(employee1.calculateSalary() + "\n");

    PartTimeEmployee intern = new PartTimeEmployee("John", "Doe", 295, 7, 500, 40);
    System.out.print("Salary of part time employee = ");
    System.out.print(intern.calculateSalary());
}