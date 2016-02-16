$(function(){
    var opts_en = {
        language: "en",
        pathPrefix: "json"
    };
    var opts_ja = {
        language: "ja",
        pathPrefix: "json"
    };
    // How can I get the language that is currently used?
    $("[data-localize]").localize("mypage", {pathPrefix: "json"});
    $("#change-lang").click(function(){
        if ($("#cur-lang").text() == "ja") {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "en"});
        } else {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "ja"});
        }
    });
});
