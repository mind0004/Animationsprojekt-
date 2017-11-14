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
}

function scene1() {
    console.log("scene1");



    setTimeout(scene2, 500);
}

function scene2() {
    console.log("scene2");

    $("#scene_2").show();

    setTimeout(besked2, 4000);
}

function besked2() {
    console.log("besked2");

    //$("#besked2").removeClass("besked2_startpos");

    $("#besked2").addClass("besked2_move");

    $("#besked2").on("animationend", besked3);
}

function besked3() {
    console.log("besked3");
    $("#besked2").off("animationend", besked3);

    $("#besked3").addClass("besked3_move");

    $("#besked3").on("animationend", besked4);
}

function besked4() {
    $("#besked3").on("animationend", besked4);

    $("#besked4").addClass("besked4_move");

    $("#besked4").on("animationend", valg);
}

function valg() {
    $(".btn_del").on();
    $(".btn_del").show();

    $(".btn_del_ikke").on();
    $(".btn_del_ikke").show();

    $(".hvadvildugoere").show();

    $(".btn_del").on("click", deltBillede);
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

    $(".pos1").on("click", samleTelefoner2);
}

function samleTelefoner2() {
    console.log("samleTelefoner2");
    $(".pos1").off("click", samleTelefoner2);

    $(".pos1").hide();

    $(".pos2").show();

    $(".pos2").on("click", samleTelefoner3);
}

function samleTelefoner3() {
    console.log("samleTelefoner3");
    $(".pos2").on("click", samleTelefoner3);

    $(".pos2").hide();

    $(".pos3").show();
    $(".pos4").show();

    $(this).hide();

    antalTelefoner++;

    if (antalTelefoner = 4) {
        console.log("Der er samlet 10 tuborg!");
        erDerSamletTuborg = true;
        samleTelefoner4();
    } else {
        console.log("der er samlet" + antalTelefoner + " telefoner");
        samleTelefoner3();
    }
}

function samleTelefoner4() {
    console.log("samleTelefoner3");

    $(".pos5").show();
    $(".pos6").show();
    $(".pos7").show();
    $(".pos8").show();

}



/*******************************/


//









///



//


///


//
