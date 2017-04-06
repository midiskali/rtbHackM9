$(document).ready(function() {

    $("a[id^=swat-player-button]").click(function() {
        $("#swat-player-uuid").val($(this).data("uuid"));
        var msg = "Corrompre la police et envoyer le SWAT chez un joueur pour $" + $(this).data("price") + "?";
        $("#swat-player-description").text(msg);
    });

    $("#swat-player-submit").click(function() {
        $("#swat-player-form").submit();
    });

});