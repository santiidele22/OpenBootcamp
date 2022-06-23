package java.ejercicio2;

public class code {
    public static void main(String[] args) {
        var numeroIf = 10;
        var numeroWhile = 1;
        var numeroDo = 3;
        var estacion = "verano";
        //parte 1
       if(numeroIf > 0){
            System.out.println("Es positivo");
        } else if (numeroIf < 0){
            System.out.println("Es negativo");
        } else {
            System.out.println("Es cero");
        } 
        //parte 2
        while(numeroWhile < 3){
            System.out.println("number while:" + numeroWhile);
            numeroWhile++;
        }
        //parte 3
        do {
            System.out.println("number do:" + numeroDo);
            numeroDo++;
        } 
        while(numeroDo < 3);
        //parte 4
        for(var numberFor = 0; numberFor < 3; numberFor++){
            System.out.println("numbers for:" + numberFor);
        }
        //ultima parte
        switch(estacion){
            case "verano":
            System.out.println("es verano");
            break;
            case "invierno":
            System.out.println("es invierno");
            break;
            case "otoño":
            System.out.println("es otoño");
            break;
            case "primavera":
            System.out.println("es primavera");
            break;
            default:
            System.out.println(estacion);
            break;
        }
    }
}
