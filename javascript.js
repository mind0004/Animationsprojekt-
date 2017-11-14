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
}



/*******************************/
