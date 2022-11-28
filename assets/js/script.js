/*Name*/ 
const formname = document.querySelector('.form__question--name');
const suitcaseName = document.querySelectorAll('.suitcase__name');
const initialText = document.querySelector('.suitcase__initialText');

function showName() {
    formname.onsubmit = function(e) {
        e.preventDefault();
    
        for (let i = 0; i < suitcaseName.length; i++) {
            suitcaseName[i].innerHTML = this.name.value;
        }
        initialText.innerHTML = "Continue preenchendo o questionário para completar sua mala.";
    }
}

showName();

/*Total duration*/
const formTotalVariation = document.querySelector('.form__question--totalDuration');
const amountOfLingerie = document.querySelector('.amountOf__lingerie'); 
const amountOfPajama = document.querySelector('.amountOf__pajama'); 
const amountOfBikini = document.querySelector('.amountOf__bikini');
const amountOfBeachRobe = document.querySelector('.amountOf__beachRobe');

function calculateItens() {
    formTotalVariation.onsubmit = function(e) {
        e.preventDefault();
        

        if(this.totalVariation.value < 4) {
            amountOfLingerie.innerHTML = parseInt(this.totalVariation.value) + 2;
            amountOfPajama.innerHTML = 1;
            amountOfBikini.innerHTML = "no máximo 2";
            amountOfBeachRobe.innerHTML = "1 ou 2";
        } else if (this.totalVariation.value < 15) {
            amountOfLingerie.innerHTML = parseInt(this.totalVariation.value) + 2;
            amountOfPajama.innerHTML = parseInt(this.totalVariation.value) / 2; 
            amountOfBikini.innerHTML = "no máximo 3";
            amountOfBeachRobe.innerHTML = "2";
        } else {
            amountOfPajama.innerHTML = 5;
            amountOfLingerie.innerHTML = 18;
            amountOfBikini.innerHTML = "no máximo 4";
            amountOfBeachRobe.innerHTML = "3 ou 4";
        }

    
       
    }
}

calculateItens();

/*Temperature variation*/
const formTemperatureVariation = document.querySelector('.form__question--temperatureVariation');

const temperatureDuration = document.querySelectorAll('.temperatureDuration');

const moreThan25clothing = document.querySelectorAll('.moreThan25clothing');
const t20and25clothing = document.querySelectorAll('.t20and25clothing');
const t15and20clothing = document.querySelectorAll('.t15and20clothing');
const t10and15clothing = document.querySelectorAll('.t10and15clothing');
const lessThan10clothing = document.querySelectorAll('.lessThan10clothing');

function checkTemperatureVariation() {
    formTemperatureVariation.onsubmit = function(e) {
        e.preventDefault();

        function activeInputs() {
            if(e.target.elements['tv--tMoreThan25'].checked == true){
                temperatureDuration[0].disabled = false;
                temperatureDuration[0].required = true;
            }
            if(e.target.elements['tv--t20and25'].checked == true) {
                temperatureDuration[1].disabled = false;
                temperatureDuration[1].required = true;
            }
            if(e.target.elements['tv--t15and20'].checked == true) {
                temperatureDuration[2].disabled = false;
                temperatureDuration[2].required = true;  
            }
            if(e.target.elements['tv--10and15'].checked == true) {
                temperatureDuration[3].disabled = false;
                temperatureDuration[3].required = true;   
            }
            if(e.target.elements['tv--t5and10'].checked== true) {
                temperatureDuration[4].disabled = false;
                temperatureDuration[4].required = true;    
            }
            if(e.target.elements['tv--t0and5'].checked == true) {
                temperatureDuration[5].disabled = false;
                temperatureDuration[5].required = true;    
            }
            if(e.target.elements['tv--tNegative'].checked == true) {
                temperatureDuration[6].disabled = false;
                temperatureDuration[6].required = true;  
            }
        }

        function showClothing() {
            for(i = 0; i < moreThan25clothing.length; i++) {
                if(e.target[1].checked == true) {
                    moreThan25clothing[i].hidden = false;
                }
            }   
            for(i = 0; i < t20and25clothing.length; i++) {
                if(e.target[2].checked == true) {
                    t20and25clothing[i].hidden = false;
                }
            }
            for(i = 0; i < t15and20clothing.length; i++) {
                if(e.target[3].checked == true) {
                    t15and20clothing[i].hidden = false;
                }
            }
            for(i = 0; i < t10and15clothing.length; i++) {
                if(e.target[4].checked == true) {
                    t10and15clothing[i].hidden = false;
                }
            }
            for(i = 0; i < lessThan10clothing.length; i++) {
                if(e.target[5].checked == true || e.target[6].checked == true || e.target[7].checked == true) {
                    lessThan10clothing[i].hidden = false;
                }
            }
        }

        activeInputs();
        showClothing();
    }
}

checkTemperatureVariation();

/*Temperature duration*/
const formTemperatureDuration = document.querySelector('.form__question--temperatureDuration')

const amountOf__dress = document.querySelectorAll('.amountOf__dress');


function checkTemperatureDuration() {
    formTemperatureDuration.onsubmit = function(e) {
        e.preventDefault();
        
        /*amountOf__dress[0].innerHTML = parseInt(this.duration__moreThan25.value / 3) + parseInt(this.duration__t20and25.value / 3) /*+ parseInt(this.duration__t15and20.value / 5) + parseInt(this.duration__t10and15.value / 5) + parseInt(this.duration__t5and10.value / 5) / parseInt(this.duration__t0and5.value / 5) + parseInt(this.duration__tNegative.value / 5);
        amountOf__dress[1].innerHTML =  4/*(this.duration__moreThan25.value / x) + (this.duration__t20and25.value / x) + (this.duration__t15and20.value / x) + (this.duration__t10and15.value / x) + (this.duration__t5and10.value / x) / (this.duration__t0and5.value / x) + (this.duration__tNegative.value);*/
        /*amountOf__dress[2].innerHTML = 8/*(this.duration__moreThan25.value / x) + (this.duration__t20and25.value / x) + (this.duration__t15and20.value / x) + (this.duration__t10and15.value / x) + (this.duration__t5and10.value / x) / (this.duration__t0and5.value / x) + (this.duration__tNegative.value);*/

        /*verificaInputAtivo();*/
    }
}

checkTemperatureDuration();



/*Scenary*/
const formScenary = document.querySelector('.form__question--scenary');

const waterClothing = document.querySelectorAll('.waterClothing');
const snowClothing = document.querySelectorAll('.snowClothing');
const mountainClothing = document.querySelectorAll('.mountainClothing');

function checkScenary() {
    formScenary.onsubmit = function(e) {
        e.preventDefault();

        for(i = 0; i < waterClothing.length; i++) {
            if (e.target[1].checked == true) {
                waterClothing[i].hidden = false;
            }
        }
        for(i = 0; i < snowClothing.length; i++) {
            if (e.target[2].checked == true) {
                snowClothing[i].hidden = false;
            }
        }
        for(i = 0; i < mountainClothing.length; i++) {
            if (e.target[3].checked == true) {
                mountainClothing[i].hidden = false;
            }
        }
    }
}

checkScenary();

/*Event*/
const formEvento = document.querySelector('.form__question--event');

function checkEvent() {
    formEvento.onsubmit = function(e) {
        e.preventDefault();

        if(e.target[1].checked == true) {
            console.log("Nada");
        }
        if(e.target[2].checked == true) {
            console.log("Balada");
        }
        if(e.target[3].checked == true) {
            console.log("Festa Formal");
        }
        if(e.target[4].checked == true) {
            console.log("Festa a fantasia");
        }
    }
}

checkEvent();

/*Anything else*/ /*Sugestion change the function to add an new list item instead of creating in HTML and using disable = false structure, so the user can add as many items as he wants*/
const formAnythingElse = document.querySelector('.form__question--anythingElse');
const extraItem = document.querySelector('.extraItem');
const extraItemCompleted = document.querySelector('.extraItemCompleted');

function checkAnythingElse() {
    formAnythingElse.addEventListener("submit", (e) => {
        e.preventDefault();
        if(this.anythingElse.value != "") {
            extraItem.hidden = false;
            extraItemCompleted.innerHTML = this.anythingElse.value;
        }

        initialText.innerHTML = "Tudo certo! Verifique sua mala pronta abaixo.";
    })
}

checkAnythingElse();