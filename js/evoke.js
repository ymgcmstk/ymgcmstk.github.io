$(function(){
    $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "en"});
    $("#change-lang").click(function(){
        if ($("#cur-lang").text() == "ja") {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "en", skipLanguage: "ja"});
        } else {
            $("[data-localize]").localize("mypage", {pathPrefix: "json", language: "ja", skipLanguage: "en"});
        }
    });
});
