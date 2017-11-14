var antalTelefoner = 2;

$(window).on("load", startSkaerm);

function startSkaerm() {
    console.log("startSkaerm");

    $("#titel").addClass("titel_start_pos");
    $("#titel").addClass("titel_ind");

    $(".btn_del").off();
    $(".btn_del").hide();

    $(".btn_del_ikke").off();
    $(".btn_del_ikke").hide();

    $(".hvadvildugoere").hide();

    $(".btn_billede_er_delt").hide();
    $(".btn_billede_er_delt").off();

    $(".btn_indsaml").hide();

    $(".telefon_container").hide();
    $(".telefon_container").off();

    $("#scene_2").hide();

    $(".btn_start").show();
    $(".btn_start").on("click", startHistorie);
}

function startHistorie() {
    console.log("startHistorie");
    $(".btn_start").off("click", startHistorie);

    //$("#titel").removeClass("titel_start_pos");
    $("#titel").removeClass("titel_ind");

    $("#titel").addClass("titel_ud");

    $("#titel").on("animationend", scene1);

    $("#blablabla")[0].play();
    $("#blablabla")[0].volume = 0.1;

    $("#baggrundslyd")[0].play();
    $("#baggrundslyd")[0].volume = 0.5;




    setTimeout(function () {
        new Audio('sound/vibration.mp3').play();
    }, 1000);
}


function scene1() {
    console.log("scene1");


    setTimeout(scene2, 500);
}

function scene2() {
    console.log("scene2");

    $("#scene_2").show();

    setTimeout(function () {
        new Audio('sound/unlock.mp3').play();
    }, 2000);

    setTimeout(besked2, 4000);
}

function besked2() {
    console.log("besked2");

    //$("#besked2").removeClass("besked2_startpos");

    $("#besked2").addClass("besked2_move");

    $("#besked2").on("animationend", besked3);


    $("#send")[0].play();
    $("#send")[0].volume = 1;
}

function besked3() {
    console.log("besked3");
    $("#besked2").off("animationend", besked3);

    $("#besked3").addClass("besked3_move");

    $("#besked3").on("animationend", besked4);

    $("#modtag2")[0].play();
    $("#modtag2")[0].volume = 0.2;
}

function besked4() {
    $("#besked3").off("animationend", besked4);

    $("#besked4").addClass("besked4_move");

    $("#besked4").on("animationend", valg);

    $("#modtag2")[0].play();
    $("#modtag2")[0].volume = 0.2;
}

function valg() {
    console.log("Valg");

    $("#besked4").off("animationend", valg);

    $(".btn_del").on();
    $(".btn_del").show();

    $(".btn_del_ikke").on();
    $(".btn_del_ikke").show();

    $(".hvadvildugoere").show();

    $(".btn_del").on("click", deltBillede);
    $(".btn_del_ikke").on("click", moveUp);

}


function deltBillede() {
    console.log("deltBillede");
    $(".btn_del").off("click", deltBillede);

    $(".btn_del").off();
    $(".btn_del").hide();

    $(".btn_del_ikke").off();
    $(".btn_del_ikke").hide();

    $(".hvadvildugoere").hide();

    $(".btn_billede_er_delt").show();
    $(".btn_billede_er_delt").on();

    $(".btn_billede_er_delt").on("click", samleTelefoner);
}


function moveUp() {
    console.log("beskeder_up");
    $("#besked4").off("animationend", valg);

    $(".btn_del_ikke").off("click", moveUp);

    $(".btn_del").off();
    $(".btn_del").hide();

    $(".btn_del_ikke").off();
    $(".btn_del_ikke").hide();

    $(".hvadvildugoere").hide();

    $("#besked1").removeClass("");
    $("#besked2").removeClass("besked2_move");
    $("#besked3").removeClass("besked3_move");
    $("#besked4").removeClass("besked4_move");
    $("#besked5").removeClass("besked5_move");

    $("#besked1").addClass("besked1_up");
    $("#besked2").addClass("besked2_up");
    $("#besked3").addClass("besked3_up");
    $("#besked4").addClass("besked4_up");

    $("#besked5").removeClass("besked5_startpos");
    $("#besked5").addClass("besked5_ind");

    $("#send")[0].play();
    $("#send")[0].volume = 1;
    setTimeout(slutTitel, 3000);
}

function slutTitel() {
    console.log("sluttitel");

}

function samleTelefoner() {
    console.log("samleTelefoner");

    $(".btn_billede_er_delt").off("click", samleTelefoner);

    $(".btn_billede_er_delt").hide();
    $(".btn_billede_er_delt").off();

    $(".btn_indsaml").show();

    $(".telefon_container").show();
    $(".telefon_container").on();

    $(".pos2").hide();
    $(".pos3").hide();
    $(".pos4").hide();
    $(".pos5").hide();
    $(".pos6").hide();
    $(".pos7").hide();
    $(".pos8").hide();
    $(".pos9").hide();
    $(".pos10").hide();
    $(".pos11").hide();
    $(".pos12").hide();

    $(".iphone").on("click", samleTelefoner2);
}

function samleTelefoner2() {
    console.log("samleTelefoner2");
    $(".iphone").off("click", samleTelefoner2);

    $(".pos1").hide();

    $(".pos2").show();

    $(".iphone").on("click", samleTelefoner2Check);
}

function samleTelefoner2Check() {
    $(".iphone").off("click", samleTelefoner2Check);

    $(".pos2").hide();

    $(".pos3").show();
    $(".pos4").show();

    samleTelefoner3();
}

function samleTelefoner3() {
    console.log("samleTelefoner3");

    $(".iphone").on("click", samleTelefoner3Check);
}

function samleTelefoner3Check() {
    $(".iphone").off("click", samleTelefoner3Check);

    $(this).hide();

    antalTelefoner++;

    if (antalTelefoner == 4) {
        console.log("4 telefoner!");
        samleTelefoner4();
        $(".pos5").show();
        $(".pos6").show();
        $(".pos7").show();
        $(".pos8").show();
    } else {
        console.log("der er samlet" + antalTelefoner + " telefoner");
        samleTelefoner3();
    }
}

function samleTelefoner4() {
    console.log("samleTelefoner4");

    $(".iphone").on("click", samleTelefoner4Check);
}

function samleTelefoner4Check() {
    console.log("samleTelefoner4Check");

    $(".iphone").off("click", samleTelefoner4Check);

    $(this).hide();

    antalTelefoner++;

    if (antalTelefoner == 8) {
        console.log("8 telefoner!");

        samleTelefoner5();

        $(".pos1").show();
        $(".pos2").show();
        $(".pos3").show();
        $(".pos5").show();
        $(".pos6").show();
    } else {
        console.log("der er samlet" + antalTelefoner + " telefoner");
        samleTelefoner4();
    }
}

function samleTelefoner5() {
    console.log("samleTelefoner5");

    $(".iphone").on("click", samleTelefoner5Check);
}

function samleTelefoner5Check() {
    console.log("samleTelefoner5Check");

    $(".iphone").off("click", samleTelefoner5Check);

    $(this).hide();

    antalTelefoner++;

    if (antalTelefoner == 13) {
        console.log("13 telefoner!");

        samleTelefoner6();

        $(".pos1").show();
        $(".pos2").show();
        $(".pos3").show();
        $(".pos4").show();
        $(".pos5").show();
        $(".pos6").show();
        $(".pos7").show();
        $(".pos8").show();
        $(".pos9").show();
        $(".pos10").show();
        $(".pos11").show();
        $(".pos12").show();


    } else {
        console.log("der er samlet" + antalTelefoner + " telefoner");
        samleTelefoner5();
    }
}

function samleTelefoner6() {
    console.log("samleTelefoner6");

}


/*******************************/


//
