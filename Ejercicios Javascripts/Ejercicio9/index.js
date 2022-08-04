//- La fecha de hoy
const dateToday = new Date();
//- La fecha de tu nacimiento
const dateBirth = new Date(2001,4,21);
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const v = dateToday > dateBirth;
//- Una variable que contenga el día de tu nacimiento
const dayBirth = dateBirth.getDate();
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthBirth = dateBirth.getMonth() + 1;
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearsBirth = dateBirth.getFullYear();