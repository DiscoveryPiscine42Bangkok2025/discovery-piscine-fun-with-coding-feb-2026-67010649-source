$(function () {

    let size = 200;
    let colors = ["red", "green", "blue"];
    let index = 0;

    function updateBalloon() {
        $("#balloon").css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[index]
        });
    }

    // Click → grow + change color
    $("#balloon").click(function () {
        size += 10;

        if (size > 420) {
            size = 200;
            index = 0;
        } else {
            index = (index + 1) % colors.length;
        }

        updateBalloon();
    });

    // Mouse leave → shrink + reverse color
    $("#balloon").mouseleave(function () {
        if (size > 200) {
            size -= 5;
            index = (index - 1 + colors.length) % colors.length;
            updateBalloon();
        }
    });

});
