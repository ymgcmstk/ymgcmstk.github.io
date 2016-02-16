$(function(){
    $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "es"});
    $("#change-lang").click(function(){
        if ($("#cur-lang").text() == "ja") {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "en"});
        } else {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "ja"});
        }
    });
});
