let secret_category_word;
let secret_aleatory_word;
let dynamic_list = [];   

const words = [
    word001 = {
        name: "REAL MADRID",
        category: "EQUIPES DE FUTEBOL"
    },
    word002 = {
        name: "BARCELONA",
        category: "EQUIPES DE FUTEBOL"
    },
    word003 = {
        name: "FLAMENGO",
        category: "EQUIPES DE FUTEBOL"
    },
    word004 = {
        name: "PALMEIRAS",
        category: "EQUIPES DE FUTEBOL"
    },
    word005 = {
        name: "FORTALEZA",
        category: "EQUIPES DE FUTEBOL"
    },
    word006 = {
        name: "BOCA JUNIORS",
        category: "EQUIPES DE FUTEBOL"
    },
    word007 = {
        name: "RIVER PLATE",
        category: "EQUIPES DE FUTEBOL"
    },
    word008 = {
        name: "MANCHESTER UNITED",
        category: "EQUIPES DE FUTEBOL"
    },
    word009 = {
        name: "BAYER LEVERKUSSEN",
        category: "EQUIPES DE FUTEBOL"
    },
    word010 = {
        name: "PARIS SAINT GERMAIN",
        category: "EQUIPES DE FUTEBOL"
    },
    word011 = {
        name: "LARANJA",
        category: "COMIDA"
    },
    word012 = {
        name: "LASANHA",
        category: "COMIDA"
    },
    word013 = {
        name: "BAIAO DE DOIS",
        category: "COMIDA"
    },
    word014 = {
        name: "RISOTO DE CAMARAO",
        category: "COMIDA"
    },
    word015 = {
        name: "BOLO DE CHOCOLATE",
        category: "COMIDA"
    },
    word015 = {
        name: "FRANGO ASSADO",
        category: "COMIDA"
    },
    word016 = {
        name: "PEIXE FRITO",
        category: "COMIDA"
    },
    word017 = {
        name: "COZIDO DE CARNE",
        category: "COMIDA"
    },
    word018 = {
        name: "BANANA",
        category: "COMIDA"
    },
    word019 = {
        name: "SUSHI",
        category: "COMIDA"
    },
    word020 = {
        name: "CREME DE FRANGO",
        category: "COMIDA"
    },
    word021 = {
        name: "LEAO",
        category: "ANIMAL"
    },
    word022 = {
        name: "SERPENTE",
        category: "ANIMAL"
    },
    word023 = {
        name: "GATO",
        category: "ANIMAL"
    },
    word024 = {
        name: "URUBU",
        category: "ANIMAL"
    },
    word025 = {
        name: "CACHORRO",
        category: "ANIMAL"
    },
    word026 = {
        name: "PASSARO",
        category: "ANIMAL"
    },
    word027 = {
        name: "MACACO",
        category: "ANIMAL"
    },
    word028 = {
        name: "RINOCERONTE",
        category: "ANIMAL"
    },
    word029 = {
        name: "PEIXE",
        category: "ANIMAL"
    },
    word030 = {
        name: "CARNEIRO",
        category: "ANIMAL"
    },
    word031 = {
        name: "ONE PIECE",
        category: "MANGÁ"
    },
    word032 = {
        name: "DRAGON BALL SUPER",
        category: "MANGÁ"
    },
    word033 = {
        name: "CAVALEIROS DO ZODIACO",
        category: "MANGÁ"
    },
    word034 = {
        name: "DEATH NOTE",
        category: "MANGÁ"
    },
    word035 = {
        name: "ONE PUNCH MAN",
        category: "MANGÁ"
    },
    word036 = {
        name: "YU YU HAKUSHO",
        category: "MANGÁ"
    },
    word037 = {
        name: "NARUTO",
        category: "MANGÁ"
    },
    word038 = {
        name: "SHURATO",
        category: "MANGÁ"
    },
    word039 = {
        name: "SAILOR MOON",
        category: "MANGÁ"
    },
    word040 = {
        name: "FUSCA",
        category: "MANGÁ"
    },
    word041 = {
        name: "FIAT UNO",
        category: "CARRO"
    },
    word042 = {
        name: "ASTRA",
        category: "CARRO"
    },
    word043 = {
        name: "CREVROLET ONIX",
        category: "CARRO"
    },
    word044 = {
        name: "RENAULT KWID",
        category: "CARRO"
    },
    word045 = {
        name: "VOLKSWAGEN POLO",
        category: "CARRO"
    },
    word046 = {
        name: "FORD KA",
        category: "CARRO"
    },
    word047 = {
        name: "HONDA CIVIC",
        category: "CARRO"
    },
    word048 = {
        name: "COROLLA",
        category: "CARRO"
    },
    word049 = {
        name: "VOLKSWAGEN GOLF",
        category: "CARRO"
    },
    word050 = {
        name: "FIAT MAREA",
        category: "CARRO"
    },
    word051 = {
        name: "NAVIO",
        category: "TRANSPORTE"
    },
    word052 = {
        name: "CARRO",
        category: "TRANSPORTE"
    },
    word053 = {
        name: "BICICLETA",
        category: "TRANSPORTE"
    },
    word054 = {
        name: "MOTOCICLETA",
        category: "TRANSPORTE"
    },
    word055 = {
        name: "ONIBUS",
        category: "TRANSPORTE"
    },
    word056 = {
        name: "LANCHA",
        category: "TRANSPORTE"
    },
    word057 = {
        name: "AERONAVE",
        category: "TRANSPORTE"
    },
    word058 = {
        name: "BARCO",
        category: "TRANSPORTE"
    },
    word059 = {
        name: "METRÔ",
        category: "TRANSPORTE"
    },
    word060 = {
        name: "TREM",
        category: "TRANSPORTE"
    }
];

secret_word();
function secret_word() {
   
    const number_word = parseInt(Math.random() * words.length);

    secret_aleatory_word = words[number_word].name;
    secret_category_word = words[number_word].category;

    console.log(secret_aleatory_word); 
    console.log(secret_category_word); 
}

screen_word()     
function screen_word() {
    const word = document.getElementById("secret-word");
    word.innerHTML = "";   

    const category = document.getElementById("category");
    category.innerHTML = secret_category_word;  
    
    for( i = 0; i < secret_aleatory_word.length; i++ ){
        
        if ( dynamic_list[i] == undefined){
            
            dynamic_list[i] = "&nbsp;"   
            word.innerHTML = word.innerHTML + "<div class='letters'>" + dynamic_list[i] + "</div>"
            
        } else {
            word.innerHTML = word.innerHTML + "<div class='letters'>" + dynamic_list[i] + "</div>"
        }
    }    
}


function check_key(key) {
    
}