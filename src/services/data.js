export const brands = [
  'Alfa Romeo',
  'BMW',
  'Dacia',
  'Fiat',
  'Ford',
  'Hyundai',
  'Renault'
]

export const brandsObjs = [
  { label: 'Alfa Romeo', value: 'Alfa Romeo'},
  { label: 'BMW', value: 'BMW'},
  { label: 'Dacia', value: 'Dacia'},
  { label: 'Fiat', value: 'Fiat'},
  { label: 'Ford', value: 'Ford'},
  { label: 'Hyundai', value: 'Hyundai'},
  { label: 'Renault', value: 'Renault'}

]

export const fuels = [
  { label: 'Diesel', value: 'D'},
  { label: 'Electrico', value: 'Elc'},
  { label: 'Gasolina', value: 'G'},
  { label: 'Super', value: 'S'},
  { label: 'Hibrido Diesel', value: 'DyE'},
  { label: 'Hibrido Gasolina', value: 'GyE'}
]

export const labels =
     {
      brand: "Marca",
      model: "Modelo",
      period: "2015-2020",
      cc: "Cilindrada",
      cylinders: "Cilindros",
      fuel: "Combustivle",
      kw: "Potencia (kW)",
      cvf: "Potencia Fiscal",
      cv: "Potencia (CV)",
      value: "Valor"
    }

export const sampleModels = [
    "GIULIA 2.2 Diesel Aut. 8V 150l",
    "GIULIA 2.2 Diesel Super 6V 180",
    "GIULIA 2.2 Diesel Veloce Q4 Aut. 8V 210",
    "GIULIETTA 1.6 JTD Super / JTDm SS 6V 120",
    "Giuliietta 1.6 JTD 120CV B-TECH",
    "Giuliietta 1.6 JTD 120CV SPORT"
]

export const sampleTaxValue = [
  {year:"2019", valueTaxYear:28500 },
  {year:"2020", valueTaxYear:26650 },
  {year:"2021", valueTaxYear:22800 },
  {year:"2022", valueTaxYear:19950 },
  {year:"2023", valueTaxYear:17100 },
  {year:"2024", valueTaxYear:14250 }
]


export const sampleCars = {
  cars: [
    {
        brand: "BMW",
        model: "iX3 80 kWh",
        period: "2020-",
        cc: null,
        cylinders: null,
        fuel: "Elc",
        kw: "210",
        cvf: null,
        cv: "286",
        value: "60000"
    },
    {
        brand: "BMW",
        model: "i3 120 Ah (I01)",
        period: "2019-",
        cc: null,
        cylinders: null,
        fuel: "Elc",
        kw: "125",
        cvf: null,
        cv: "170",
        value: "32500"
    },
    {
        brand: "BMW",
        model: "i3 s 120 Ah (I01)",
        period: "2019-",
        cc: null,
        cylinders: null,
        fuel: "Elc",
        kw: "135",
        cvf: null,
        cv: "184",
        value: "35500"
    }
]
}

export const sampleVehicle = {
    brand: "BMW",
    model: "i3 120 Ah (I01)",
    period: "2019-",
    cc: null,
    cylinders: null,
    fuel: "Elc",
    kw: "125",
    cvf: null,
    cv: "170",
    value: "32500",
    yearTax: 2019,
    labelfuel: "Electrico",
    amortable: [
        {
            year: 2019,
            valueTaxYear: "32.500,00 €",
            coeficiente: 100
        },
        {
            year: 2020,
            valueTaxYear: "29.250,00 €",
            coeficiente: 90
        },
        {
            year: 2021,
            valueTaxYear: "26.000,00 €",
            coeficiente: 80
        },
        {
            year: 2022,
            valueTaxYear: "22.750,00 €",
            coeficiente: 70
        },
        {
            year: 2023,
            valueTaxYear: "19.500,00 €",
           coeficiente: 60
        },
        {
            year: 2024,
            valueTaxYear: "16.250,00 €",
            coeficiente: 50
        },
        {
            year: 2025,
            valueTaxYear: "13.000,00 €",
            coeficiente: 40
        },
        {
            year: 2026,
            valueTaxYear: "9.750,00 €",
            coeficiente: 30
        },
        {
            year: 2027,
            valueTaxYear: "6.500,00 €",
            coeficiente: 20
        },
        {
            year: 2028,
            valueTaxYear: "3.250,00 €",
            coeficiente: 10
        }
    ]
}
