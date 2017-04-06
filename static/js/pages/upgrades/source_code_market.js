$(document).ready(function() {

    $("a[id^='buy-source-code-button']").click(function() {
        $("#buy-source-code-uuid").val($(this).data("uuid"));
        $("#buy-source-code-dialog").text(
            "Êtes-vous sûr de vouloir acheter ce code pour $" + $(this).data("price") + "?"
        );
    });

    $("#buy-source-code-submit").click(function() {
        $("#buy-source-code-form").submit();
    });

    $("a[id^='download-source-code-button']").click(function() {
        window.open('/source_code_market/download?uuid=' + $(this).data("uuid"), '_newtab');
    });

});
