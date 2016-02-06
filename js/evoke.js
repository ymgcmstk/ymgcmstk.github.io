$(function(){
    var opts = {
        language : lang,
        skipLanguage : "en",
        pathPrefix: "json"
    };
    $("[data-localize]").localize("mypage", opts);
});
