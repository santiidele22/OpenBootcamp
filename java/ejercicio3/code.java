package ejercicio3;

public class code {
    public static void main(String[] args){
        Persona mario = new Persona();
        mario.setName("mario");
        mario.setYears(55);
        mario.setPhoneNumber(212321);
        System.out.println("mi nombre es " + mario.getName() + " tengo " + mario.getYears() +  " y mi numero de telefono es " + mario.getPhoneNumber());

        

    }
}
    class Persona {
    private String name;
    private int years;
    private int phoneNumber;
    //Nombre
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    //años
    public int getYears(){
        return this.years;
    }
    public void setYears(int years){
        this.years = years;
    }
    //numero de telefono
    public int getPhoneNumber(){
        return this.phoneNumber;
    }
    public void setPhoneNumber(int phoneNumber){
        this.phoneNumber =  phoneNumber;
    }

}
