/*Name*/
const formName = document.querySelector('.form__question--name');
const suitcaseName = document.querySelectorAll('.suitcase__name');
const initialText = document.querySelector('.suitcase__initialText');

function showName() {
    formName.onsubmit = function(e) {
        e.preventDefault();

        const userName = e.target.elements['name'];
    
        for (let i = 0; i < suitcaseName.length; i++) {
            suitcaseName[i].innerHTML = userName.value;
        }
        initialText.innerHTML = "Continue preenchendo o questionário para completar sua mala.";

        localStorage.setItem("suitcaseName", JSON.stringify(userName.value));
        localStorage.getItem(userName.value);

        userName.value = "";
    }
}

showName();

/*Total duration*/
const formTotalDuration = document.querySelector('.form__question--totalDuration');
const amountOfLingerie = document.querySelector('.amountOf__lingerie'); 
const amountOfPajama = document.querySelector('.amountOf__pajama'); 
const amountOfBikini = document.querySelector('.amountOf__bikini');
const amountOfBeachRobe = document.querySelector('.amountOf__beachRobe');

function calculateItens() {
    formTotalDuration.onsubmit = function(e) {
        e.preventDefault();
        
        if(this.totalDuration.value < 4) {
            amountOfLingerie.innerHTML = parseInt(this.totalDuration.value) + 2;
            amountOfPajama.innerHTML = 1;
            amountOfBikini.innerHTML = "no máximo 2";
            amountOfBeachRobe.innerHTML = "1 ou 2";
        } else if (this.totalDuration.value < 15) {
            amountOfLingerie.innerHTML = parseInt(this.totalDuration.value) + 2;
            amountOfPajama.innerHTML = parseInt(this.totalDuration.value) / 2; 
            amountOfBikini.innerHTML = "no máximo 3";
            amountOfBeachRobe.innerHTML = "2";
        } else {
            amountOfPajama.innerHTML = 5;
            amountOfLingerie.innerHTML = 18;
            amountOfBikini.innerHTML = "no máximo 4";
            amountOfBeachRobe.innerHTML = "3 ou 4";
        }

        localStorage.setItem("totalDuration", this.totalDuration.value);
        localStorage.getItem(this.totalDuration.value);

        this.totalDuration.value = "";
    }
}

calculateItens();

/*Temperature variation
    TODO: find out how to uncheck all checkboxes at the end
    TODO: find out how to set the checked ones in localStorage
*/
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
            if(e.target.elements['tv--t10and15'].checked == true) {
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

/*Temperature duration
    TODO: set duration values in localStorage
*/
const formTemperatureDuration = document.querySelector('.form__question--temperatureDuration')

const amountOf__dress = document.querySelectorAll('.amountOf__dress');


function checkTemperatureDuration() {
    formTemperatureDuration.onsubmit = function(e) {
        e.preventDefault();

        const temperatureDurations = {
            "dMoreThan25": this.duration__moreThan25.value,
            "dT20and25": this.duration__t20and25.value,
            "dT15and20": this.duration__t15and20.value,
            "dT10and15": this.duration__t10and15.value,
            "dT5and10": this.duration__t5and10.value,
            "dT0and5": this.duration__t0and5.value,
            "dTNegative": this.duration__tNegative.value
        }

        localStorage.setItem("temperatureDurations", JSON.stringify(temperatureDurations));
        localStorage.getItem(temperatureDuration);
        
        this.duration__moreThan25.value = "";
        this.duration__t20and25.value = "";
        this.duration__t15and20.value = "";
        this.duration__t10and15.value = "";
        this.duration__t5and10.value = "";
        this.duration__t0and5.value = "";
        this.duration__tNegative.value = "";
    }
}

checkTemperatureDuration();



/*Scenary    
    TODO: find out how to uncheck all checkboxes at the end
    TODO: find out how to set the checked ones in localStorage
*/
const formScenary = document.querySelector('.form__question--scenary');

const waterClothing = document.querySelectorAll('.waterClothing');
const snowClothing = document.querySelectorAll('.snowClothing');
const mountainClothing = document.querySelectorAll('.mountainClothing');

function checkScenary() {
    formScenary.onsubmit = function(e) {
        e.preventDefault();

        for(i = 0; i < waterClothing.length; i++) {
            if (e.target.elements['checkbox--water'].checked == true) {
                waterClothing[i].hidden = false;
            }
        }
        for(i = 0; i < snowClothing.length; i++) {
            if (e.target.elements['checkbox--snow'].checked == true) {
                snowClothing[i].hidden = false;
            }
        }
        for(i = 0; i < mountainClothing.length; i++) {
            if (e.target.elements['checkbox--mountain'].checked == true) {
                mountainClothing[i].hidden = false;
            }
        }
    }
}

checkScenary();

/*Event    
    TODO: find out how to uncheck all checkboxes at the end
    TODO: find out how to set the checked ones in localStorage
*/
const formEvento = document.querySelector('.form__question--event');

function checkEvent() {
    formEvento.onsubmit = function(e) {
        e.preventDefault();

        if(e.target.elements['checkbox--nothing'].checked == true) {
            console.log("Nada");
        }
        if(e.target.elements['checkbox--party'].checked == true) {
            console.log("Balada");
        }
        if(e.target.elements['checkbox--formal'].checked == true) {
            console.log("Festa Formal");
        }
        if(e.target.elements['checkbox--costume'].checked == true) {
            console.log("Festa a fantasia");
        }
    }
}

checkEvent();

/*Anything else*/ 
const formAnythingElse = document.querySelector('.form__question--anythingElse');
const extraItemsList = document.querySelector("#list__extraItems");
const aEItems = JSON.parse(localStorage.getItem("aEItems")) || [];

aEItems.forEach((element) => {
    createAEElement(element);
})

function checkAnythingElse() {
    formAnythingElse.onsubmit = function(e) {
        e.preventDefault();

        const aEName = e.target.elements['aEName'];
        const aEAmountOf = e.target.elements['aEAmountOf'];

        const aECurrentItem = {
            "aEName": aEName.value,
            "aEAmountOf": aEAmountOf.value
        }

        createAEElement(aECurrentItem);

        aEItems.push(aECurrentItem);

        localStorage.setItem("aEItems", JSON.stringify(aEItems));

        aEName.value = "";
        aEAmountOf.value = "";
    }
}

function createAEElement(aEItem) {
    const newAEItem = document.createElement('li');
    newAEItem.classList.add("aEItem");
    newAEItem.classList.add("suitcase__item");

    const newAEIName = document.createElement('span');
    newAEIName.innerHTML = aEItem.aEName + ": ";

    newAEItem.appendChild(newAEIName);
    newAEItem.innerHTML += aEItem.aEAmountOf;

    extraItemsList.appendChild(newAEItem);
}

/*<li class="suitcase__item extraItem" hidden>Item extra</li>*/
checkAnythingElse();
