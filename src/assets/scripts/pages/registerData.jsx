/**
 * 
 * Manage the process of saving the register data locally
 * 
 **/

export function loadAES(callback){
    if(typeof CryptoJS != "object"){
        let script = document.createElement('script');
        script.onload = callback;
        script.src = '/libraries/aes.js';
        document.head.appendChild(script);
    }else{
        callback();
    }
}

export function hash(data){
    return CryptoJS.MD5(data).toString();
}

function cleanRegisterDataObject () {
    return {
        name: {
            first: undefined,
            last: undefined
        },
        username: undefined,
        passwordHash: undefined,
        birthdate: {
            day: undefined,
            month: undefined,
            year: undefined
        },
        gender: undefined, // male, female, custom<String>
        pronounce: undefined, // 1 (he/him), 2 (she/her), 0 (they/them)
        securityQuestions: {
            q1: undefined, // 1-6
            q2: undefined, // 1-6
            q3: undefined, // 1-6
            a1: undefined,
            a2: undefined,
            a3: undefined
        },
        quickSettings: {
            //
        }
    };
}

export let registerData = cleanRegisterDataObject();

export function resetRegisterData(){
    registerData = cleanRegisterDataObject();
}

export var dataOrder = {
    // 1
    1: ["name.first", "name.last"],
    // 2
    2: ["username"],
    // 3
    3: ["passwordHash"],
    // 4
    4: ["birthdate.day", "birthdate.month", "birthdate.year",
    "gender", "pronounce"],
    // 5
    5: ["securityQuestions.q1", "securityQuestions.q2", "securityQuestions.q3",
    "securityQuestions.a1", "securityQuestions.a2", "securityQuestions.a3"]
}, dataSectionsN = Object.keys(dataOrder).length;

export function checkDataByOrder(section, callback){
    console.log(registerData);
    if(section < 1 || section > dataSectionsN){
        throw new Error("Incorrect section ID!");
    }
    let call = false;
    for (var key in dataOrder) {
        key = Number(key);
        if(key <= section){
            dataOrder[Number(key)].forEach(dataAddress => {
                dataAddress = dataAddress.split(".").reverse();
                let data = registerData[dataAddress.pop()];
                dataAddress.forEach(function(k){
                    data = data[k];
                });
                if(!call && data == undefined){
                    call = true;
                    callback(true);
                }
            });
        }
    }
    if(!call){
        callback(false);
    }
}