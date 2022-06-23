package ejercicio4;
public class code{
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setName("mario");
        cliente.setYears(55);
        cliente.setCredito(2000);
        cliente.setPhoneNumber(2415242);
        System.out.println("Hola me llamo " + cliente.getName() + " tengo " + cliente.getYears() + " años " + "y tengo un credito de : " + cliente.getCredito() + " para comunicarse conmigo mi numero de telefono es: " + cliente.getPhoneNumber());
        Trabajador trabajador1 = new Trabajador();
        trabajador1.setName("rodolfo");
        trabajador1.setYears(65);
        trabajador1.setPhoneNumber(2929292);
        trabajador1.setSalario(1500);
        System.out.println("Hola me llamo " + trabajador1.getName() + " tengo " + trabajador1.getYears() + " años " + "y tengo un salario de : " + trabajador1.getSalario() +  " euros por mes" + " para comunicarse conmigo mi numero de telefono es: " + trabajador1.getPhoneNumber());

    }
}
class Persona {
    String name;
    int years;
    int phoneNumber;
    //name
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return this.name;
    }
    //years
    public void setYears(int years){
        this.years = years;
    }
    public int getYears(){
        return this.years;
    }
    //phone
    public void setPhoneNumber(int phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public int getPhoneNumber(){
        return this.phoneNumber;
    }
}
class Cliente extends Persona {
    int credito;
    public void setCredito(int credito){
        this.credito = credito;
    }
    public int getCredito(){
        return this.credito;
    }
}
class Trabajador extends Persona{
    int salario;
    public void setSalario(int salario){
        this.salario = salario;
    }
    public int getSalario(){
        return this.salario;
    }
}