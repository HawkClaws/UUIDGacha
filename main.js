
var objAtari = document.getElementById('win');
var atari = document.createElement('p');
var winUuid = generateUuid();
atari.innerText = winUuid;
objAtari.appendChild(atari);

function lottery() {
    var objA = document.getElementById('emission');
    var getCount = document.getElementById("textbox").value;

    var  win = false;
    for (var i = 0; i < getCount; i++) {
        var objP = document.createElement('li');
        var uuid = generateUuid();
        objP.innerText = uuid;
        objA.appendChild(objP);

        if(uuid == winUuid){
            objP.style.backgroundColor = "red";
            atari.style.backgroundColor = "red";
        }
    }
}

function generateRandTen(){
    return Math.floor(Math.random()*10);
}

function generateUuid() {
    let charArray = "RRRRRRRR-RRRR-4RRR-rRRR-RRRRRRRRRRRR".split("");

    for (let i = 0, len = charArray.length; i < len; i++) {
        switch (charArray[i]) {
            case "R":
                charArray[i] = Math.floor(secureMathRandom() * 16).toString(16);
                break;
            case "r":
                charArray[i] = (Math.floor(secureMathRandom() * 4) + 8).toString(16);
                break;
        }
    }
    return charArray.join("");
}

function secureMathRandom() {
    // 0から1の間の範囲に調整するためにUInt32の最大値(2^32 -1)で割る
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}
