$(document).ready(function()
{     
    $("#toggle-heading1").click(function()
    {
        if($("#toggle-content1").is(":hidden"))
        {
            $("#toggle-content1").show("slow");
            $("#top-arrow1").show();
            $("#bottom-arrow1").hide();
        }

        else
        {
            $("#toggle-content1").hide("slow");
            $("#top-arrow1").hide();
            $("#bottom-arrow1").show();
        }
    });

    $("#toggle-heading2").click(function()
    {
        if($("#toggle-content2").is(":hidden"))
        {
            $("#toggle-content2").show("slow");
            $("#top-arrow2").show();
            $("#bottom-arrow2").hide();
        }

        else
        {
            $("#toggle-content2").hide("slow");
            $("#top-arrow2").hide();
            $("#bottom-arrow2").show();
        }
    });

    $("#toggle-heading3").click(function()
    {
        if($("#toggle-content3").is(":hidden"))
        {
            $("#toggle-content3").show("slow");
            $("#top-arrow3").show();
            $("#bottom-arrow3").hide();
        }

        else
        {
            $("#toggle-content3").hide("slow");
            $("#top-arrow3").hide();
            $("#bottom-arrow3").show();
        }
    });

    $("#toggle-heading4").click(function()
    {
        if($("#toggle-content4").is(":hidden"))
        {
            $("#toggle-content4").show("slow");
            $("#top-arrow4").show();
            $("#bottom-arrow4").hide();
        }

        else
        {
            $("#toggle-content4").hide("slow");
            $("#top-arrow4").hide();
            $("#bottom-arrow4").show();
        }
    });

    $("#toggle-heading5").click(function()
    {
        if($("#toggle-content5").is(":hidden"))
        {
            $("#toggle-content5").show("slow");
            $("#top-arrow5").show();
            $("#bottom-arrow5").hide();
        }

        else
        {
            $("#toggle-content5").hide("slow");
            $("#top-arrow5").hide();
            $("#bottom-arrow5").show();
        }
    });
});


function compte_a_rebours(id, date, txt)
{
    var compte_a_rebours = document.getElementById(id);
    var date_actuelle = new Date();
    var date_evenement = new Date(date);

    var total_secondes = (date_evenement - date_actuelle) / 1000;

    var prefixe = "Étape disponible dans ";

    if (total_secondes > 0)
    {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_jour = "jours,";
        var mot_heure = "heures,";
        var mot_minute = "minutes,";
        var mot_seconde = "secondes";

        if (jours == 0)
        {
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1)
        {
            mot_jour = "jour,";
        }

        if (heures == 0)
        {
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1)
        {
            mot_heure = "heure,";
        }

        if (minutes == 0)
        {
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1)
        {
            mot_minute = "minute,";
        }

        if (secondes == 0)
        {
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1)
        {
            mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0)
        {
            et = "";
        }

        compte_a_rebours.innerHTML = prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    }

    else
    {
        compte_a_rebours.innerHTML = txt;
    }

    var actualisation = setTimeout("compte_a_rebours(\""+ id + "\", \"" + date + "\", \"" + txt + "\");", 1000);
}