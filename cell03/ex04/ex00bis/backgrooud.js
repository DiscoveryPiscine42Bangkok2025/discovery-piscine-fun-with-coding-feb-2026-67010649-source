$(function () {

    let scale = 1;

    $("#btn").click(function () {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        $("body").css(
            "background-color",
            `rgb(${r}, ${g}, ${b})`
        );

        scale += 0.1;
        $(this).css(
            "transform",
            `scale(${scale})`
        );
    });

});
