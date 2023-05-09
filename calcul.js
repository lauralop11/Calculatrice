
var numAttendre= [];
var numberString='';
var ecran = '';

function addNumber(number) {
    
    if (number == '+' || number == '-' || number == '*' || number == '/' || number =='%'){
        ecran+=number;
        numAttendre.push(numberString);
        numAttendre.push(number);
        numberString ='';
        numAttendre = numAttendre.filter((item) => {
            return item != '';
          });
    } else {
       numberString+=(number); 
       ecran+=number;
    }  
    document.getElementById('windows').value = ecran;
}

function egalite (){
    numAttendre.push(numberString);

    while (numAttendre.length > 1) {
        const mult = numAttendre.indexOf('*');
            if ( mult != -1){
            numAttendre[mult] = (numAttendre[mult - 1]) * (numAttendre[mult + 1]);
            numAttendre[mult - 1] = '';
            numAttendre[mult + 1] = '';
            numAttendre = numAttendre.filter((item) => {
            return item != '';
            });
        } 
        const div = numAttendre.indexOf('/');
        if ( div != -1){
            numAttendre[div] = (numAttendre[div - 1]) / (numAttendre[div + 1]);
            numAttendre[div - 1] = '';
            numAttendre[div + 1] = '';
            numAttendre = numAttendre.filter((item) => {
            return item != '';
            });
        } 
        const modulo = numAttendre.indexOf('%');
        if ( modulo != -1){
            numAttendre[modulo] = (numAttendre[modulo - 1]) % (numAttendre[modulo + 1]);
            numAttendre[modulo - 1] = '';
            numAttendre[modulo + 1] = '';
            numAttendre = numAttendre.filter((item) => {
            return item != '';
            });
        } 
        const moins = numAttendre.indexOf('-');
        if ( moins != -1){
            numAttendre[moins] = (numAttendre[moins - 1]) - (numAttendre[moins + 1]);
            numAttendre[moins - 1] = '';
            numAttendre[moins + 1] = '';
            numAttendre = numAttendre.filter((item) => {
            return item != '';
            });
        } 
        const plus = numAttendre.indexOf('+');
        if ( plus != -1){
            numAttendre[plus] = parseInt(numAttendre[plus - 1]) + parseInt(numAttendre[plus + 1]);
            numAttendre[plus - 1] = '';
            numAttendre[plus + 1] = '';
            numAttendre = numAttendre.filter((item) => {
                return item != '';
            });
        }
        if (numAttendre.length == []){
            document.getElementById('windows').value = '0';
        } else {
            document.getElementById('windows').value = numAttendre;
    
        }
     ecran = numAttendre;
    numberString='';
    return;
    }
   
}

function reset (){
    numAttendre= [];
    numberString='';
    ecran = '';
    document.getElementById('windows').value = ecran;

}