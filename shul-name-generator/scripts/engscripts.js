var yeshivish;
var x;
var beginning = ["Temple", "Congregation", ""];
var first = [["Adath", "Adat"], ["Bet", "Beth"], ["Ahavat", "Ahavath"], ["Knesset", "Knesseth"], ["Bnai", "B'nai","B'ne"], ["Rodeph", "Rodphei"], ["Or", "Ohr"], ["Tiferet", "Tifereth"], ["Mickve", "Mikveh"], ["Anshe", "Anshei"], ["Agudat", "Agudath"], "Neveh", ["Oheiv", "Ohev"], "Ohavei", ["Shaare", "Sha'are", "Sha'arei", "Shaarei"], "Zichron", ["Brit", "Brith", "B'rit", "B'rith"], "Ner"];
var second = ["El", "Jeshurun", ["Tfila", "T'fila", "T'filah", "Tfilah", "Tfilo", "T'filo", "T'filoh", "Tfiloh", "Tefila", "Tefilah", "Tfilla", "T'filla", "T'fillah", "Tfillah", "Tfillo", "T'fillo", "T'filloh", "Tfilloh", "Tefilla", "Tefillah"], ["Chesed", "Chessed", "Hessed", "Hesed"], "Torah", "Zion", ["Emet", "Emeth"], "Achim", ["Zedek", "Tzedek"], "Sinai", "Jacob", ["Shalom", "Sholom"], "Ephraim", "David", "Abraham", "Israel", ["Shlomo", "Sh'lomo", "Solomon"], "Isaac"];
var orthfirst = ["Adas", ["Bais", "Beis"], "Ahavas", "Bnai", "Rodfei", ["Or", "Ohr"], "Tiferes", "Mikveh", "Agudas", "Neveh", "Shaarei", "Zichron", "Ner"];
var orthsecond = [["T'filah", "Tfilah", "T'filoh", "Tefilah", "T'fillah", "Tfillah", "T'filloh", "Tfilloh", "Tefilla", "Tefillah"], "Torah", "Tzion", "Emes", "Achim", "Tzedek", "Chessed", "Yeshurun", ["Yaakov", "Ya'akov"], "Shalom", "Efraim", "Dovid","Avraham"];
var nafter = [["Bet", "Beth"], ["Ahavat", "Ahavath"], ["Or", "Ohr"], ["Tiferet", "Tifereth"], ["Shaare", "Sha'are", "Sha'arei", "Shaarei"], "Zichron", "Ner", ""];
var orth_nafter = [["Bais", "Beis"], "Ahavas", "Bnai", ["Or", "Ohr"], "Tiferes", "Neveh", "Shaarei", "Zichron", "Ner"];
var last_names = ["Fried", ["Shapiro", "Schapiro", "Shapira"] ,["Friedman", "Friedmann"] ,"Klein" ,"Eisen" ,"Rubin" ,"Himmelfarb" ,"Schwartz" ,"Weinberg" ,"Schechter" ,["Horowitz", "Horovitz", "Horwitz"] ,["Aaronson", "Aronson"] ,"Jacobson" ,["Abrahamson", "Abramson"] ,["Liebowitz", "Leibowitz", "Leibovitz", "Leibovitch", "Leibovich", "Lebowitz", "Lebovitz", "Lebovits"] ,["Levin", "Lewin"] ,"Levi" ,["Cohn", "Cohen"] ,"Schreiber" ,"Weiss" ,"Schwartz","Goldberg" ,"Greenberg",["Edelman", "Edelmann"], ["Hoffman", "Hofman", "Hofmann"], ["Goldman", "Goldmann"], "Blau", ["Bloom", "Blum"], ["Lieberman", "Liebermann"], "Bernstein", "Melamed", "Stern", "Altman", "Landau", "Lichtenstein", "Kaplan", ["Berkowitz", "Berkovitz"], "Bohm", ["Shulman", "Shulmann"], "Perlman"];
var beginning_rand;
var name_worthy;
var first_random;
var second_random;
var mem_button = [" Generously donated by ", " In memory of "];


function generator1()
{   if (document.getElementById("result") != "")
    {
        copy_button_gen();
    }
    document.getElementById("donor").innerHTML = "";
    clear_radio();
    clear_box();
    set_buttons();
    reset_field("f_name");
    reset_field("l_name");
    if (yeshivish == true)
    {yeshivishf();}
    else
    {
        not_yeshivish();
    }
    document.getElementById("alshem").innerHTML = mem_button[Math.floor(Math.random() * mem_button.length)];
    x = second_random;
    if (isMobile.any()){document.getElementById("copy_button").style.visibility = "visible";}
}



function not_yeshivish()
{
    beginning_rand = beginning[Math.floor(Math.random() * beginning.length)];
    first_random = first[Math.floor(Math.random() * first.length)];
    second_random = second[Math.floor(Math.random() * second.length)];
    if(second.indexOf(second_random)>9)
    {
        document.getElementById("alshem").style.visibility = "visible";
    }
    else{
        document.getElementById("alshem").style.visibility = "hidden";
    }
    if (Array.isArray(first_random)) {
        first_random = first_random[Math.floor(Math.random() * first_random.length)]
    }
    if (Array.isArray(second_random)) {
        second_random = second_random[Math.floor(Math.random() * second_random.length)]
    }
    document.getElementById("result").innerHTML = (beginning_rand + " " + first_random + ' ' + second_random);
    document.getElementById("result").style.fontSize = "x-large";
}

function yeshivishf()
{
    first_random = orthfirst[Math.floor(Math.random() * orthfirst.length)];
    second_random = orthsecond[Math.floor(Math.random() * orthsecond.length)];
    if(orthsecond.indexOf(second_random)>7)
    {
        document.getElementById("alshem").style.visibility = "visible";
    }
    else{
        document.getElementById("alshem").style.visibility = "hidden";
    }
    if (Array.isArray(first_random)) {
        first_random = first_random[Math.floor(Math.random() * first_random.length)]
    }
    if (Array.isArray(second_random)) {
        second_random = second_random[Math.floor(Math.random() * second_random.length)]
    }
    document.getElementById("result").innerHTML = (first_random + ' ' + second_random);
    document.getElementById("result").style.fontSize = "x-large";
}


function generator2(f_name)
{
    document.getElementById("alshem").style.visibility = "visible";
    if (document.getElementById("result") != "")
    {
        copy_button_gen();
    }
    if (yeshivish == true)
    {
        first = orth_nafter;
        beginning_rand = "";
    }
    else
    {
        first = nafter;
        beginning_rand = beginning[Math.floor(Math.random() * beginning.length)];
    }
    var first_random = first[Math.floor(Math.random() * first.length)];
    if (Array.isArray(first_random)) {
        first_random = first_random[Math.floor(Math.random() * first_random.length)]
    }
    if (first_random == "")
    {
        beginning_rand = "Temple";
    }
    document.getElementById("result").innerHTML = (beginning_rand+ " " + first_random + ' ' + f_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").style.fontSize = "x-large";
    x = f_name;
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}


function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    document.getElementById('donor').innerHTML = f_name + " " + l_name;
    generator2(f_name);
}

function check_radio()
{
    var checkBox1 = document.getElementById("isdonor");
    var checkBox2 = document.getElementById("isdead");
    if(checkBox1.checked == true)
    {
        document.getElementById("alshem").innerHTML = " Generously donated by ";
    }
    else if(checkBox2.checked == true)
    {
        document.getElementById("alshem").innerHTML = " In memory of ";
    }
}


function three_things()
{
    var checkBox1 = document.getElementById("isdonor");
    var checkBox2 = document.getElementById("isdead");
    check_field("f_name");
    check_field("l_name");
    if (checkBox1.checked == false && checkBox2.checked == false)
    {
        document.getElementById("border_button1").style.borderColor = "red";
        document.getElementById("border_button2").style.borderColor = "red";
    } 
    if (document.getElementById("text_checkf").value != 1 || document.getElementById("text_checkl").value != 1 || (checkBox1.checked == false && checkBox2.checked == false))
    {
        return 0;
    }
    document.getElementById("first_check").checked = true;
    document.getElementById("first_div").style.display = "block";
    choose_name();
    check_radio();
    scroll();
}



function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
}


function clear_radio()
{
    document.getElementById("isdonor").checked = false;
    document.getElementById("isdead").checked = false;
}


function open_heb()
{
    window.open("heb.html", "_self");
}


function checkbox(){
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true)
    {
        yeshivish = true;
    } 
    else
    {
        yeshivish = false;
    }
}



function copy_text()
{
    if (document.getElementById("donor").innerHTML == "")
    {navigator.clipboard.writeText(document.getElementById("result").innerHTML);}
    else{navigator.clipboard.writeText(document.getElementById("result").innerHTML + document.getElementById("alshem").innerHTML + document.getElementById("donor").innerHTML);}
    document.getElementById("copy_button").innerHTML= "Copied!";
    document.getElementById("copy_button").style.borderStyle = "inset";
    document.getElementById("copy_button").classList.remove("btn41-43");
    document.getElementById("copy_button").classList.remove("btn-41");
    document.getElementById("copy_button").classList.add("copy_button_after");
    document.getElementById("copy_button").onclick = "";
}



var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



function copy_button_gen(){
    document.getElementById("copy_button").innerHTML= "Copy";
    document.getElementById("copy_button").style.borderStyle = "outset";
    document.getElementById("copy_button").classList.remove("copy_button_after");
    document.getElementById("copy_button").classList.add("btn-41");
    document.getElementById("copy_button").classList.add("btn41-43");
    document.getElementById("copy_button").onclick = function(){copy_text()};
}


function check_field(id)
{
    if (document.getElementById(id).value == "")
    {   
        if (id == "f_name")
        {document.getElementById("text_checkf").value = 0;}
        else{document.getElementById("text_checkl").value = 0;}
        document.getElementById(id).style.borderColor = "red";
    }
    else
    {
        reset_field(id);
    }
}


function reset_field(id)
{
    document.getElementById(id).style.borderColor = "#49493c";
    if (id == "f_name")
        {document.getElementById("text_checkf").value = 1;}
    else{document.getElementById("text_checkl").value = 1;}
}


function set_buttons()
{
    document.getElementById("border_button1").style.borderColor = "#678eb4";
    document.getElementById("border_button2").style.borderColor = "#678eb4"
}


function scroll()
{
    document.body.scrollTop = 255;
    document.documentElement.scrollTop = 255;
}


function name_after()
{
    var l_name = last_names[Math.floor(Math.random() * last_names.length)];
    if (Array.isArray(l_name))
    {
        l_name = l_name[Math.floor(Math.random() * l_name.length)];
    }
    document.getElementById("donor").innerHTML = (x + " " + l_name);
    document.getElementById("donor").style.fontSize = "x-large";
}



function display_gen()
{
    if (document.getElementById("first_div").style.display == "none")
    {
        document.getElementById("first_div").style.display = "block";
        document.body.scrollTop = window.scrollY + document.querySelector('#first_div').getBoundingClientRect().top;
        document.documentElement.scrollTop = window.scrollY + document.querySelector('#first_div').getBoundingClientRect().top;
    }
    else{
        document.getElementById("first_div").style.display = "none";
        document.body.scrollTop = window.scrollY + document.querySelector('#second_div').getBoundingClientRect().top;
        document.documentElement.scrollTop = window.scrollY + document.querySelector('#second_div').getBoundingClientRect().top;
    }
}

function display_name()
{
    if (document.getElementById("second_div").style.display == "none")
    {
        document.getElementById("second_div").style.display = "block";
        document.body.scrollTop = window.scrollY + document.querySelector('#second_div').getBoundingClientRect().top;
        document.documentElement.scrollTop = window.scrollY + document.querySelector('#second_div').getBoundingClientRect().top;
    }
    else{
        document.getElementById("second_div").style.display = "none";
        document.body.scrollTop = window.scrollY + document.querySelector('#first_div').getBoundingClientRect().top;
        document.documentElement.scrollTop = window.scrollY + document.querySelector('#first_div').getBoundingClientRect().top;
    }
}