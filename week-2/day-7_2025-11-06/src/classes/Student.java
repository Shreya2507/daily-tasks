package classes;

public class Student {
    private String name;
    private double mark1;
    private double mark2;
    private double mark3;

    public double getTotalMarks(){
        return mark1 + mark2 + mark3;
    }

    public double getAvgMarks(){
        return getTotalMarks() / 3;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMark1() {
        return mark1;
    }

    public void setMark1(double mark1) {
        this.mark1 = mark1;
    }

    public double getMark2() {
        return mark2;
    }

    public void setMark2(double mark2) {
        this.mark2 = mark2;
    }

    public double getMark3() {
        return mark3;
    }

    public void setMark3(double mark3) {
        this.mark3 = mark3;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", mark1=" + mark1 +
                ", mark2=" + mark2 +
                ", mark3=" + mark3 +
                '}';
    }
}
