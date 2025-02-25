var x = "";
var first = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "שירת", "דביר", "קרן", "שושנת", "יד", "עץ", "בני", "נצח", "שיח", "אוהל", "אור", "רצון", "תיקון", "נר", "תורת", "משכן"];
var w_jeshurun = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "בני", "נצח", "שיח", "אוהל"];
var w_olam = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "אור", "רצון", "תיקון", "נר", "תורת", "משכן", "שם"];
var rand_first;

function generator1()
{
    clear_box();
    if (document.getElementById("result") != "")
    {
        copy_button_gen();
    }
    var second = ["אלעזר" ,"חנניה" ,"נחמיה" ,"עזרא" ,"עזריה" ,"גבריאל" ,"רפאל" ,"שאול" ,"איתן" ,"יונה" ,"שמעון" ,"יהודה" ,"אלישע" ,"יהושע" ,"דניאל" ,"לאה" ,"רחל" ,"רבקה" ,"שרה" ,"נחמה" ,"דוד" ,"אהרון" ,"משה" ,"שלמה" ,"יונתן" ,"יעקב" ,"יצחק" ,"אברהם" ,"ישראל", "יוסף", "ראובן", "יששכר", "נפתלי", "דן", "בנימין", "מנשה", "אפרים", "עקיבא", "אסתר", "חיים", "ישורון", "עולם"];
    var second_random = Math.floor(Math.random() * second.length);
    if (second[second_random] == "ישורון")
    {
        rand_first = w_jeshurun.slice();
        document.getElementById("alshem").style.visibility="hidden";
    }
    else if (second[second_random] == "עולם")
    {
        rand_first = w_olam.slice();
        document.getElementById("alshem").style.visibility="hidden";
    }
    else
    {
        rand_first = first.slice();
        document.getElementById("alshem").style.visibility="visible";
    }
    var first_random = Math.floor(Math.random() * rand_first.length);
    document.getElementById("result").innerHTML = (rand_first[first_random] + ' ' + second[second_random]);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").innerHTML = ('');
    x = second[second_random];
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}

function generator2(f_name)
{
    if (document.getElementById("result") != "")
    {
        copy_button_gen();
    }
    var first_random = Math.floor(Math.random() * first.length);
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + f_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").style.fontSize = "x-large";
    x = f_name;
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}

}


function name_after()
{
    var third = ["שפירו" ,"פרידמן" ,"קליין" ,"אייזן" ,"רובין" ,"הימלפרב" ,"שוורץ" ,"ויינברג" ,"שכטר" ,"הורוביץ" ,"אהרונסון" ,"יעקובסון" ,"אברהמסון" ,"ליבוביץ" ,"לוין" ,"לוי" ,"כהן" ,"אבוחצירא" ,"שרייבר" ,"וייס" ,"שוורץ","גולדברג" ,"גרינברג","אדלמן", "הופמן", "גולדמן", "בלאו", "בלום", "ליברמן", "ברנשטיין", "מלמד", "שטרן", "אלטמן", "לנדאו", "ליכטנשטיין", "קפלן", "בלוך", "ברקוביץ", "בוהם", "שולמן", "פרלמן"];
    var l_name = Math.floor(Math.random() * third.length);
    document.getElementById("donor").innerHTML = (x + " " + third[l_name]);
    document.getElementById("donor").style.fontSize = "x-large";

}

function choose_name()
{
    check_field("f_name");
    check_field("l_name");
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    if (document.getElementById("text_checkf").value != 1 || document.getElementById("text_checkl").value != 1)
    {
        return 0;
    }
    document.getElementById('donor').innerHTML = f_name + " " + l_name;
    document.getElementById("alshem").style.visibility="visible";
    document.getElementById("first_check").checked = true;
    document.getElementById("first_div").style.display = "block";
    generator2(f_name);
    scroll();
}


function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
}


function open_eng()
{
    window.open("eng.html", "_self");
}



function copy_text()
{
    if (document.getElementById("donor").innerHTML == "")
    {navigator.clipboard.writeText(document.getElementById("result").innerHTML);}
    else{navigator.clipboard.writeText(document.getElementById("result").innerHTML + " על שם " + document.getElementById("donor").innerHTML);}
    document.getElementById("copy_button").innerHTML= "!הועתק";
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
    document.getElementById("copy_button").innerHTML= "העתק";
    document.getElementById("copy_button").style.borderStyle = "outset";
    document.getElementById("copy_button").classList.remove("copy_button_after");
    document.getElementById("copy_button").classList.add("btn-41");
    document.getElementById("copy_button").classList.add("btn41-43");
    document.getElementById("copy_button").onclick = function(){copy_text()};
}


function check_field(id)
{
    if (document.getElementById(id).value == "" || !(/^[\u05D0-\u05EA + ֿ\u05F3]+$/.test(document.getElementById(id).value)))
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


function scroll()
{
    document.body.scrollTop = 207;
    document.documentElement.scrollTop = 207;
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