package ejercicio1;
public class code{
public static void main(String[] args) {
    var resultado = suma(10,20,30);
    System.out.println(resultado);

    Coche miCoche = new Coche();
    miCoche.setDoors(4);
    miCoche.setSpeedMax(220);
    miCoche.setSwitchedOn(true);
    System.out.println("la velocidad maxima del coche es:" + miCoche.getSpeedMax());
    System.out.println("el coche esta encendido:?" + miCoche.getSwitchedOn());
    System.out.println(miCoche.getDoors());
}
public static int suma(int a, int b, int c) {
    return a + b + c;
}
}
class Coche{
    private int doors;
    private int speedMax;
    public boolean switchedOn = false;
    //encendido /apagado
    public void setSwitchedOn(boolean switchedOn){
        this.switchedOn = switchedOn;
    }
    public boolean getSwitchedOn(){
        return this.switchedOn;
    } 
    //velocidad
    public void setSpeedMax(int speedMax){
        this.speedMax = speedMax;
    }
    public int getSpeedMax(){
        return this.speedMax;
    }
    //puertas
    public void setDoors(int doors){
        this.doors = doors;
    }
    public int getDoors(){
        return this.doors;
    }
 }
    

