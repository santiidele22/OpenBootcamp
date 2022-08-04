//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const personalInfo = {
    name: "santiago",
    lastName: "delebecq",
    years: 21,
    heigth: 1.72,
    iamDevoloper: true,
  };
  //- Una variable que obtenga tu edad a partir del objeto anterior
  const v_years = "years";
  console.log(personalInfo[v_years]);
  //- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
  const bestFriendsInfo = [
    { ...personalInfo },
    {
      name: "valen",
      lastName: "de senzi",
      years: 21,
      heigth: 1.82,
      iamDevoloper: false,
    },
    {
      name: "Thomy",
      lastName: "Loire",
      years: 22,
      heigth: 1.75,
      iamDevoloper: false,
    }
  ];
  //- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
  const obj3 = bestFriendsInfo.sort((a, b) => b.years - a.years);