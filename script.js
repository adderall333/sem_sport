var factorTypes = ["П1", "X", "П2", "П1/Х", "П1/П2", "П2/Х"]

var sports = new Map();

var football = ["football"];
football.push(["23:00", "5 ноября", "Реал Мадрид", "Барселона", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);
football.push(["20:00", "5 ноября", "Ливерпуль", "Арсенал", [2.05, 3.85, 2.95, 1.50, 1.32, 2.70]]);
football.push(["18:00", "5 ноября", "Бавария", "Боруссия", [1.65, 4.75, 2.80, 3.5, 2.82, 1.76]]);
football.push(["15:00", "5 ноября", "Рубин", "Ростов", [1.30, 2.75, 2.30, 1.50, 1.32, 2.20]]);

var volleyball = ["volleyball"];
volleyball.push(["19:00", "5 ноября", "Зенит", "Кузбасс", [2.05, 3.85, 2.95, 1.50, 1.32, 2.70]]);
volleyball.push(["26:00", "5 ноября", "Локомотив", "Динамо", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);

var basketball = ["basketball"];
basketball.push(["23:00", "5 ноября", "Чикаго Буллс", "Голден Стейт Уорриорс", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);
basketball.push(["00:00", "5 ноября", "Бостон Селтикс", "Торонто Рэпторс", [1.30, 2.75, 2.30, 1.50, 1.32, 2.20]]);
basketball.push(["2:00", "5 ноября", "Кливленд Кавальерс", "Лос Анджелес Лейкерс", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);

var hockey = ["hockey"];
var tennis = ["tennis"];
var cybersport = ["cybersport"];
var boxing = ["boxing"];
var baseball = ["baseball"];
var fightings = ["fightings"];
var autosport = ["autosport"];

var ufc = ["ufc"];
ufc.push(["18:00", "5 ноября", "Хабиб Нурмагомедов", "Тони Фергюсон", [1.65, 4.75, 2.80, 3.5, 2.82, 1.76]]);
ufc.push(["2:00", "5 ноября", "Конор МакГрегор", "Джастин Гэтжи", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);


var gandboll = ["gandboll"];
var biatlon = ["biatlon"];
var bilyard = ["bilyard"];
var regbi = ["regbi"];

var futzal = ["futzal"];
futzal.push(["13:00", "5 ноября", "Россия", "Иран", [2.65, 3.75, 2.45, 2.50, 1.82, 2.05]]);
futzal.push(["18:00", "5 ноября", "Бразилия", "Испания", [1.30, 2.75, 2.30, 1.50, 1.32, 2.20]]);

sports.set("Футбол", football);
sports.set("Волейбол", volleyball);
sports.set("Баскетбол", basketball);
sports.set("Хоккей", hockey);
sports.set("Теннис", tennis);
sports.set("Киберспорт", cybersport);
sports.set("Бокс", boxing);
sports.set("Бейсбол", baseball);
sports.set("Единоборства", fightings);
sports.set("Автоспорт", autosport);
sports.set("UFC", ufc);
sports.set("Гандбол", gandboll);
sports.set("Биатлон", biatlon);
sports.set("Бильярд", bilyard);
sports.set("Регби", regbi);
sports.set("Футзал", futzal);

var user = new Map();
user.set("login", "user");
user.set("password", "password");
user.set("role", "user");

var admin = new Map();
admin.set("login", "admin");
admin.set("password", "123456seven");
admin.set("role", "admin");

var users = [user, admin];

var active = null;
var previousActive = null;

function makeActive(element) {
    if (element == null)
        return;

    if (active != null) {
        previousActive = active;
        active.toggleClass("active");
    }

    active = $(element);
    active.toggleClass("active");
}

function makeNonActive() {
    if (active == null)
        return;

    active.toggleClass("active");
    active = null;
}

function showEvents() {
    document.getElementsByClassName("center")[0].innerHTML = '';
    let j = 0;
    for (var [key, value] of sports) {
        document.getElementsByClassName("center")[0].innerHTML += '<div id="' + value[0] + '" class="module sport"><div class="title">' + key + '</div></div>';
        if (value.length == 1) {
            $("#" + value[0]).hide();
            document.getElementById(value[0]).innerHTML += '<div class="content row no-events">На данный момент нет событий</div>'
        }
        else {
            document.getElementsByClassName("checkbox")[j].classList.add("checked");
            for (var i = 1; i < value.length; i++) {
                document.getElementById(value[0]).innerHTML += '<div class="content row">' +
                '<div class="col-1 datetime">' +
                '<div class="row time">' + value[i][0] + '</div>' +
                '<div class="row date">' + value[i][1] + '</div>' +
                '</div>' +
                '<div class="col-5 commands">' +
                '<div>' + value[i][2] + '</div>' +
                '<div>' + value[i][3] + '</div>' +
                '</div>' +
                '<div class="col-3 factors">' +
                '<div class="row">' +
                '<div class="col factor" event="' + i + '" factor="0">' + value[i][4][0] + '</div>' +
                '<div class="col factor" event="' + i + '" factor="1">' + value[i][4][1] + '</div>' +
                '<div class="col factor" event="' + i + '" factor="2">' + value[i][4][2] + '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-3 factors">' +
                '<div class="row">' +
                '<div class="col factor" event="' + i + '" factor="3">' + value[i][4][3] + '</div>' +
                '<div class="col factor" event="' + i + '" factor="4">' + value[i][4][4] + '</div>' +
                '<div class="col factor" event="' + i + '" factor="5">' + value[i][4][5] + '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
            }
        }
        j++;
    }

    $(".factor").css("cursor", "pointer");
    $(".factor").click(function() {
        previousActive = null;
        for (var [key, value] of sports) {
            var parent = getParent(this, "#" + value[0]);
            if (parent != null)
                makeBet(value[this.getAttribute("event")][2], 
                        value[this.getAttribute("event")][3],
                        this.getAttribute("factor"),
                        value[this.getAttribute("event")][4][this.getAttribute("factor")]);
        }
    });
}

function getParent(elem, parentSelector) {
    var parents = document.querySelectorAll(parentSelector);
    
    for (var i = 0; i < parents.length; i++) {
      var parent = parents[i];
      
      if (parent.contains(elem)) {
        return parent;
      }
    }
    
    return null;
}

function makeBet(team1, team2, factorType, factor){
    $("#shading").load("make-bet.html");


    $("#shading").show(30, function() {
        //хотелось бы сделать эти действия после выполнения show(), 
        //так, как ниже в комментах, но почему-то js решает, что надо 
        //выполнять их пока show() еще не сработала до конца
        $(".make-bet-info").append("<p>" + team1 + " - " + team2 + "</p>" +
                                   "<p>" + factorTypes[factorType] + "(" + factor + ")" + "</p>");

        $("#make-bet-button").click(function() {
            var amount = $("#bet-amount").val();
            var newBet = '<details class="list-item">' +
                        '<summary><a>' + team1 + ' - ' + team2 + '</a></summary>' +
                        '<div class="bet-info">' + factorTypes[factorType] + 
                        '('+ factor +') - ' + amount + '$</div>' +
                        '</details>';
            $(".bets").append(newBet);
            $("#shading").hide();
        });
    });

    //$("#shading").show();
    //$(".make-bet-info").append("<p>" + team1 + " - " + team2 + "</p>" +
    //                            "<p>" + factorTypes[factorType] + "(" + factor + ")" + "</p>");
    //
    //$("#make-bet-button").click(function() {
    //    var amount = $("#bet-amount").val();
    //    var newBet = '<details class="list-item">' +
    //                '<summary><a>' + team1 + ' - ' + team2 + '</a></summary>' +
    //                '<div class="bet-info">' + factorTypes[factorType] + 
    //                '('+ factor +') - ' + amount + '$</div>' +
    //                '</details>';
    //    $(".bets").append(newBet);
    //    $("#shading").hide();
    //});
}

window.onload = function() {

    //Основная навигация
    active = $("#events")
    active.toggleClass("active");

    $("#events").click(function() {
        if (active != $("#events")) {
            showEvents();
            makeActive($("#events"));
        }
    });

    $("#promotions").click(function() {
        if (active != $("#promotions")) {
            $(".center").load("promotions.html");
            makeActive($("#promotions"));
        }
    });

    $("#profile").click(function() {
        if (active != $("#profile")) {
            $(".center").load("profile.html");
            makeActive($("#profile"));
        }
    });

    //Вход
    $("#login").click(function() {
        makeActive($("#login"));
        $("#shading").load("login.html");
        $("#shading").show();
    });

    $("#logout").click(function() {
        makeActive($("#events"));
        $(".login-item").css("display", "block");
        $(".registration-item").css("display", "block");
        $(".profile-item").hide();
        $(".logout-item").hide();
        showEvents();
    });

    $("#shading").click(function(e) {
        if (!$(e.target).hasClass("window") &&
            !$(e.target).parents('.window').length) {
            $("#shading").hide();
            makeActive(previousActive);
        }
    });

    
    //Регистрация
    $("#registration").click(function() {
        if (active != $("#registration")) {
            $(".center").load("registration.html");
            makeActive($("#registration"));
        }
    });


    //Чекбоксы
    $(".checkbox").click(function() {
        $(this).toggleClass("checked");
        $("#" + $(this).attr("sport")).slideToggle();
    });


    //Меню
    $("#results").click(function() {
        makeNonActive();
        $(".center").load("results.html");
    });

    $("#rules").click(function() {
        makeNonActive();
        $(".center").load("rules.html");
    });

    $("#forum").click(function() {
        makeNonActive();
        $(".center").load("forum.html");
    });

    //События
    showEvents();
}