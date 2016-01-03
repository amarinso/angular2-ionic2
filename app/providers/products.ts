import {Injectable} from 'angular2/core';

@Injectable()
export class Products {
  data: any[];

  constructor() {
    this.data  = [
            {
                id: 1,
                title: 'Cordero chuletas',
                subtitle: 'Paletilla fresco, Matinez Loriente, Granel',
                image: 'img/products/chuletas.png',
                comparePrice: '8,95 €/kg',
                price: 895,
                pricePer: 'kg',
                unitMultiplier: 0.2,
                aisleId: "Carnes",
                mostrador: "Carnes"
            },
            {
                id: 2,
                title: 'Champú cabello',
                subtitle: 'Repara y protege',
                image: 'img/products/champu.png',
                //comparePrice: '1,07 €/100 cc',
                aisleId: "Drogería",
                price: 290,
                isFavorite: true
            },
            {
                id: 3,
                title: 'Bolsa de basura normal',
                subtitle: 'Aroma Lavanda cierre facil 56x62',
                image: 'img/products/bolsas-basura.png',
                //comparePrice: '0,068 €/unidad',
                price: 135,
                aisleId: "Limpieza",
                information: 'La bolsa de basura Bosque verde Aroma Lavanda, tienen el tamaño adecuado para almacenar un volumen grande de residuos.  Son bolsas de 56 centímetros de ancho y 62 centímetros de alto, por tanto se ajusta muy bien a los cubos de basura cotidianos. Destacando el sistema de cierre fácil además del aroma natural a lavanda fresca.'
            },
            {
                id: 4,
                title: 'Leche semidesnatada UHT',
                subtitle: 'Asturiana, Botella 1,5L (Tapón azul)',
                image: 'img/products/leche-asturiana.png',
                //comparePrice: '0,86 €/l',
                stock: false,
                price: 129,
                aisleId: "Lácteos"
            },
            {
                id: 5,
                title: 'Lubina fresca entera',
                subtitle: 'Salvaje ***Sujeto a disponibilidad***',
                image: 'img/products/lubina.png',
                //comparePrice: '15,50 €/kg',
                price: 698,
                pricePer: 'kg',
                unitMultiplier: 0.5,
                aisleId: "Pescados",
                mostrador: "Pescados"
            },
            {
                id: 6,
                title: 'Set colonias monogotas',
                subtitle: '',
                image: 'img/products/monogotas.png',
                //comparePrice: null,
                aisleId: "Drogería",
                price: 850
            },
            {
                id: 7,
                title: 'Desodorante fresa',
                subtitle: '',
                image: 'img/products/desodorante.png',
                //comparePrice: null,
                aisleId: "Drogería",
                price: 150
            },
            {
                id: 8,
                title: 'Leche semidesnatada',
                subtitle: ' Hacendado, Brick 1 L',
                image: 'img/products/leche-hacendado.png',
                //comparePrice: null,
                price: 61,
                aisleId: "Lácteos",
                recomendable: true
            },
            {
                id: 9,
                title: 'Leche semidesnatada',
                subtitle: 'Hacendado, Brick Pack 6 X 1 L - 6 L',
                image: 'img/products/leche-hacendado-pack.png',
                //comparePrice: '1,15 €/l',
                price: 690,
                aisleId: "Lácteos",
                recomendable: true
            },
            {
                id: 10,
                title: 'Tomate kumato',
                subtitle: '',
                image: 'img/products/tomate-cumato.png',
                //comparePrice: '1,00 €/kg',
                aisleId: "Fruta y verdura",
                price: 125,
                pricePer: 'kg',
                recomendable: true
            },
            {
                id: 11,
                title: 'Salmonete fresco entero',
                subtitle: '',
                image: 'img/products/salmonete-grande.png',
                //comparePrice: '9,95 €/kg',
                price: 995,
                pricePer: 'kg',
                unitMultiplier: 0.4,
                aisleId: "Pescados",
                mostrador: "Pescados"
            },
            {
                id: 12,
                title: 'Pulpo fresco de roca',
                subtitle: '',
                image: 'img/products/pulpo-de-roca.png',
                //comparePrice: '10,00 €/kg',
                price: 1000,
                pricePer: 'kg',
                unitMultiplier: 0.6,
                aisleId: "Pescados",
                mostrador: "Pescados",
                isFavorite: true
            },
            {
                id: 13,
                title: 'Boquerón fesco grande',
                subtitle: '',
                image: 'img/products/boqueron.png',
                //comparePrice: '5,95 €/kg',
                price: 595,
                pricePer: 'kg',
                unitMultiplier: 0.1,
                aisleId: "Pescados",
                mostrador: "Pescados"
            },
            {
                id: 14,
                title: 'Faneca fresca entera',
                subtitle: 'Pieza entera sin escamas',
                image: 'img/products/faneca.png',
                //comparePrice: '9,50 €/kg',
                price: 950,
                pricePer: 'kg',
                oldPrice: 999,
                unitMultiplier: 0.3,
                aisleId: "Pescados",
                mostrador: "Pescados",
                tags: [
                    '<i class="icon-weather-snow"></i><span>Refrigerado</span>',
                    'Sin gluten',
                    'Fresco'
                ],
                information: [
                    "<p>También llamado palenca. Es un pescado blanco de agua salada. Pertenece a la familia de los Gadidae, es decir de los bacalaos. Vive en aguas frías y templadas.</p>",
                    "<p>Habita a profundidades medias. Los jóvenes prefieren zonas poco profundas en bajos rocos y arenosos mientras que los adultos viven en aguas más profundas entre 30 y 100 m. Es una especie gregaria cuyos individuos más pequeños se agrupan formando inmensos bancos.</p>",
                    "<p>Se alimenta de pequeños crustáceos, moluscos, poliquetos, calamares y otros peces pequeños.</p>"
                ].join("\n"),
                precautions: [
                    "<p>Puede contener trazas de crustáceos y moluscos.</p>"
                ].join("\n"),
                nutrition: [
                    "<table>",
                    '<tr><th class="itemdetailtable1">Tipo</th><th class="itemdetailtable2">Por 100 gr</th></tr>',
                    '<tr><td class="itemdetailtable1">Energía (Kcal)</td><td class="itemdetailtable2">740</td></tr>',
                    '<tr><td class="itemdetailtable1">Proteínas (gr)</td><td class="itemdetailtable2">154</td></tr>',
                    '<tr><td class="itemdetailtable1">Hidratos de Carbono (gr)</td><td class="itemdetailtable2">10</td></tr>',
                    '<tr><td class="itemdetailtable1">Fibra (gr)</td><td class="itemdetailtable2">0</td></tr>',
                    '<tr><td class="itemdetailtable1">Lípidos (gr)</td><td class="itemdetailtable2">10</td></tr>',
                    '<tr><td class="itemdetailtable1">Ácidos grasos saturados (gr)</td><td class="itemdetailtable2">2,5</td></tr>',
                    '<tr><td class="itemdetailtable1">Ácidos grasos monoinsaturados (gr)</td><td class="itemdetailtable2">1,8</td></tr>',
                    '<tr><td class="itemdetailtable1">Ácidos grasos poliinsaturados (gr)</td><td class="itemdetailtable2">2,7</td></tr>',
                    '<tr><td class="itemdetailtable1">Colesterol (mg)</td><td class="itemdetailtable2">480</td></tr>',
                    '<tr><td class="itemdetailtable1">Calcio (mg)</td><td class="itemdetailtable2">300</td></tr>',
                    '<tr><td class="itemdetailtable1">Hierro (mg)</td><td class="itemdetailtable2">8</td></tr>',
                    '<tr><td class="itemdetailtable1">Zinc (gr)</td><td class="itemdetailtable2">5</td></tr>',
                    "</table>"
                ].join("\n")
            },
            {
                id: 15,
                title: 'Patata',
                subtitle: 'Varios, Granel',
                image: 'img/products/patatasiembra.png',
                //comparePrice: '0,89 €/kg',
                pricePer: 'kg',
                aisleId: "Fruta y verdura",
                price: 89
            },
            {
                id: 16,
                title: 'Aceite oliva virgen extra',
                subtitle: 'Tapón negro',
                image: 'img/products/aceite-de-oliva.png',
                //comparePrice: '3,85 €/l',
                aisleId: "Aceites",
                price: 385
            },
            {
                id: 17,
                title: 'Pimentón rojo dulce',
                subtitle: 'Hacendado, Lata',
                image: 'img/products/pimenton-dulce.png',
                //comparePrice: '9,00 €/kg',
                aisleId: "Especias",
                price: 90
            },
            {
                id: 18,
                title: 'Cebolla morada',
                subtitle: 'Granel',
                image: 'img/products/cebolla-morada.png',
                //comparePrice: '0,99 €/kg',
                aisleId: "Fruta y verdura",
                price: 99
            },
            {
                id: 19,
                title: 'Brillo de labios',
                subtitle: '',
                image: 'img/products/brillo-labios.png',
                //comparePrice: null,
                aisleId: "Drogería",
                price: 150,
                promoText: "Consigue mayor intensidad con el <strong>Brillo de labios nº8.</strong>"
            },
            {
                id: 20,
                title: 'Aftersun',
                subtitle: '',
                image: 'img/products/aftersun.png',
                //comparePrice: null,
                aisleId: "Drogería",
                price: 550,
                promoText: "Hidrata tu piel tras la exposición al sol con <strong>Gel Aftersun con aloe vera</strong>",
                information: 'El Aloe vera es uno de los mejores remedios naturales para proteger la piel de los nocivos rayos solares, ya que regenera, calma e hidrata. El After sun Aloe vera tiene un gran poder de penetración, alcanzando las tres capas de la piel (epidermis, dermis e hipodermis) y, actúa absorbiendo hasta casi el noventa por ciento de las radiaciones solares, responsables de las lesiones dérmicas y quemaduras.'
            },
            {
                id: 21,
                title: 'Besugo fresco grande',
                subtitle: '',
                image: 'img/products/c-besugo-gallego.png',
                //comparePrice: '9,50 €/kg',
                price: 950,
                pricePer: 'kg',
                unitMultiplier: 0.3,
                aisleId: "Pescados",
                mostrador: "Pescados"
            },
            {
                id: 22,
                title: 'Detergente lavadora líquido capsulas',
                subtitle: '',
                image: 'img/products/detergente_capsulas.png',
                //comparePrice: '9,50 €/kg',
                price: 365,
                aisleId: "Limpieza"
            },
            {
                id: 23,
                title: 'Suavizante concentrado azul clásico',
                subtitle: '',
                image: 'img/products/suavizante_azul.png',
                //comparePrice: '9,50 €/kg',
                price: 179,
                aisleId: "Limpieza"
            },
            {
                id: 24,
                title: 'Atún claro al natural pack 6',
                subtitle: '',
                image: 'img/products/atun_natural.png',
                //comparePrice: '9,50 €/kg',
                price: 325,
                aisleId: "Alimentacón"
            },
            {
                id: 34,
                title: 'Cerveza Steinburg',
                subtitle: '',
                image: 'img/products/cerveza-steinburg.jpg',
                //comparePrice: '9,50 €/kg',
                price: 25,
                aisleId: "Alimentacón"
            },
            {
                id: 35,
                title: 'Cerveza Steinburg Pack 12 latas',
                subtitle: '',
                image: 'img/products/cerveza-steinburg.jpg',
                //comparePrice: '9,50 €/kg',
                price: 280,
                aisleId: "Alimentacón"
            },
            {
                id: 36,
                title: 'Cerveza Steinburg Pack 24 latas',
                subtitle: '',
                image: 'img/products/cerveza-steinburg.jpg',
                //comparePrice: '9,50 €/kg',
                price: 528,
                aisleId: "Alimentacón"
            },
            {
                id: 50,
                title: 'Suavizante concentrado Nutrive',
                subtitle: '',
                image: 'img/products/suavizante_blanco.png',
                //comparePrice: '9,50 €/kg',
                price: 179,
                aisleId: "Alimentacón"
            },
            {
                id: 51,
                title: 'Suavizante concetrado rosa mosqueta',
                subtitle: '',
                image: 'img/products/suavizante_rosa.png',
                //comparePrice: '9,50 €/kg',
                price: 179,
                aisleId: "Alimentacón"
            },
            {
                id: 53,
                title: 'Cerveza con limón Steinburg Shandy',
                subtitle: 'Botellín pack 6 x 250cc',
                image: 'img/products/steinburg_shandy.png',
                //comparePrice: '9,50 €/kg',
                price: 170,
                aisleId: "Alimentacón"
            },
            {
                id: 54,
                title: 'Atún aceite de oliva pack 6',
                subtitle: '',
                image: 'img/products/atun_aceite.png',
                //comparePrice: '9,50 €/kg',
                price: 355,
                aisleId: "Alimentacón"
            },
            {
                id: 55,
                title: 'Leche entera UHT',
                subtitle: 'Leche pascual',
                image: 'img/products/leche-pascual-entera.png',
                //comparePrice: '0,86 €/l',
                price: 96,
                aisleId: "Lácteos"
            },
            {
                id: 56,
                title: 'Atún',
                subtitle: 'Al corte',
                image: 'img/products/atun1.png',
                //comparePrice: '0,86 €/l',
                price: 1895,
                pricePer: 'kg',
                aisleId: "Pescados",
                mostrador: "Pescados",
                alternatives: "21,11",
                information: [
                    "<p>Recibe el nombre de atún rojo, atún de aleta azul (Bluefin tuna) o cimarrón. Es un pez óseo, de la familia de los escómbridos. Es un pescado azul, atúnido, siendo el atún de mayor tamaño. Está ampliamente distribuido por todo el Atlántico, el Mar Mediterráneo y en el Mar Negro.</p>",
                    "<p>Regula su temperatura entre los 18º y 25º. Vive por encima de los 25 años. Su estación reproductora dura alrededor de 50 días y tienen una puesta de aproximadamente 45.000.000 huevos, de los cuales una gran mayoría son malogrados por los depredadores.</p>",
                    "<p>Se diferencia del resto de los túnidos en que su aleta pectoral es la más corta, en contraposición con el otro túnido más conocido en España, el atún blanco o bonito del norte.</p>"
                ].join("\n"),
                precautions: [
                    "<p>Puede contener trazas de crustáceos y moluscos.</p>"
                ].join("\n"),
                nutrition: [
                    "<table>",
                    '<tr><th class="itemdetailtable1">Tipo</th><th class="itemdetailtable2">Por 100 gr</th></tr>',
                    '<tr><td class="itemdetailtable1">Energía (Kcal)</td><td class="itemdetailtable2">200</td></tr>',
                    '<tr><td class="itemdetailtable1">Proteínas (gr)</td><td class="itemdetailtable2">23</td></tr>',
                    '<tr><td class="itemdetailtable1">Grasas (gr)</td><td class="itemdetailtable2">12</td></tr>',
                    '<tr><td class="itemdetailtable1">Hierro (mg)</td><td class="itemdetailtable2">1,3</td></tr>',
                    '<tr><td class="itemdetailtable1">Magnesio (mg)</td><td class="itemdetailtable2">28</td></tr>',
                    '<tr><td class="itemdetailtable1">Yodo (mg)</td><td class="itemdetailtable2">10</td></tr>',
                    '<tr><td class="itemdetailtable1">B2 o riboflavina (mg)</td><td class="itemdetailtable2">0,2</td></tr>',
                    '<tr><td class="itemdetailtable1">B3 o niacina (mg)</td><td class="itemdetailtable2">17,8</td></tr>',
                    '<tr><td class="itemdetailtable1">B9 o ácido fólico (mcg)</td><td class="itemdetailtable2">15</td></tr>',
                    '<tr><td class="itemdetailtable1">B12 o cianocobalamina (mcg)</td><td class="itemdetailtable2">5</td></tr>',
                    '<tr><td class="itemdetailtable1">Vitamina A (mcg)</td><td class="itemdetailtable2">60</td></tr>',
                    '<tr><td class="itemdetailtable1">Vitamina D (mcg)</td><td class="itemdetailtable2">25</td></tr>',
                    "</table>"
                ].join("\n")
            }
        ];
      }
  getProductsRandom(count: number){
    var products = [];
    for(var i=0;i<count;i++){
      var n = Math.floor(Math.random()*this.data.length);
      products.push(this.data[n]);
    }
    return products;
  }
}
