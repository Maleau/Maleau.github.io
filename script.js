$(document).ready(function()
{     
    $("#toggle-heading1").click(function()
    {
        if($("#toggle-content1").is(":hidden"))
        {
            $("#toggle-content1").show("slow");
            $('#arrow1').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content1").hide("slow");
            $('#arrow1').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }
    });

    $("#toggle-heading2").click(function()
    {
        if($("#toggle-content2").is(":hidden"))
        {
            $("#toggle-content2").show("slow");
            $('#arrow2').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content2").hide("slow");
            $('#arrow2').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }
    });

    $("#toggle-heading3").click(function()
    {
        if($("#toggle-content3").is(":hidden"))
        {
            $("#toggle-content3").show("slow");
            $('#arrow3').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content3").hide("slow");
            $('#arrow3').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }
    });

    $("#toggle-heading4").click(function()
    {
        if($("#toggle-content4").is(":hidden"))
        {
            $("#toggle-content4").show("slow");
            $('#arrow4').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content4").hide("slow");
            $('#arrow4').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }
    });

    $("#toggle-heading5").click(function()
    {
        if($("#toggle-content5").is(":hidden"))
        {
            $("#toggle-content5").show("slow");
            $('#arrow5').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content5").hide("slow");
            $('#arrow5').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }
    });

    $("#toggle-heading6").click(function()
    {
        if($("#toggle-content6").is(":hidden"))
        {
            $("#toggle-content6").show("slow");
            $('#arrow6').animate({ deg: 90 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
        }

        else
        {
            $("#toggle-content6").hide("slow");
            $('#arrow6').animate({ deg: 0 }, {duration: "slow", step: function(now) {$(this).css({ transform: 'rotate(' + now + 'deg)' });}});
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