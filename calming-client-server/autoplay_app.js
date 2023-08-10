// JavaScript source code
function onCLIck() {
    var hasBeenFound = false;
    while (hasBeenFound == false) {
        setTimeout(function () {
            if (document.querySelector(".btn-common-play-game-lg")) {
                hasBeenFound = true;
            }
        }, 500)
    };
    document.querySelector(".btn-common-play-game-lg").click();
};