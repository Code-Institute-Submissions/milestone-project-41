var form = document.getElementsByTagName('form')[0],
    track = document.getElementById('track_name'),
    artist = document.getElementById('artist_name'),
    year = document.getElementById('year'),
    genre = document.getElementById('genre_name'),
    lyrics = document.getElementById('lyrics_link'),
    video = document.getElementById('video_link');

/* Below solution found here on Stackoverflow: https://stackoverflow.com/questions/28735459/how-to-validate-youtube-url-in-client-side-in-text-box */
function validateYouTubeUrl() {
    var url = $('#video_link').val();

    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            // alert(match[2]);
            $('#video_link').attr('value', match[2]);
        } else {
            $("#video_link").removeClass("valid");
            $("#video_link").addClass("invalid");
            $("#video_link_label").addClass("active");
            $("#video_link").prop("aria-invalid", "true");
            event.preventDefault();
        }
    }
}

/*original code credit: "https://github.com/Code-Institute-Submissions/dhamma1991-milestone-project-3/" */
form.addEventListener("submit", function (event) {
    if (!track.validity.valid) {
        $("#track_name").removeClass("valid");
        $("#track_name").addClass("invalid");
        $("#track_name_label").addClass("active");
        $("#track_name").prop("aria-invalid", "true");
        event.preventDefault();
    }

    if (!artist.validity.valid) {
        $("#artist_name").removeClass("valid");
        $("#artist_name").addClass("invalid");
        $("#artist_name_label").addClass("active");
        $("#artist_name").prop("aria-invalid", "true");
        event.preventDefault();
    }

    if (!year.validity.valid) {
        $("#year").removeClass("valid");
        $("#year").addClass("invalid");
        $("#year_label").addClass("active");
        $("#year").prop("aria-invalid", "true");
        event.preventDefault();
    }

    if (!genre.validity.valid) {
        $("#genre_name").removeClass("valid");
        $("#genre_name").addClass("invalid");
        $("#genre_name_label").addClass("active");
        $("#genre_name").prop("aria-invalid", "true");
        event.preventDefault();
    }

    if (!lyrics.validity.valid) {
        $("#lyrics_link").removeClass("valid");
        $("#lyrics_link").addClass("invalid");
        $("#lyrics_link_label").addClass("active");
        $("#lyrics_link").prop("aria-invalid", "true");
        event.preventDefault();
    }

    validateYouTubeUrl();
}, false);

 /* --------------------------------------------------------------
        Custom validation on <select> if 'required' property.
        This function is not supported by Materialize natively

        Original code credit to: https://github.com/TravelTimN/ci-milestone04-dcd/
    -------------------------------------------------------------- */

    // $(".select-wrapper input.select-dropdown").on("focusin", function () {
    //     $(this).parent(".select-wrapper").on("change", function () {
    //         if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () {})) {
    //             $(this).children("input").css({"border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50"});
    //         }
    //     });
    // }).on("click", function () {
    //     if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(233, 30, 99, 0.15)") {
    //         $(this).parent(".select-wrapper").children("input").css({"border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50"});
    //     } else {
    //         $(".select-wrapper input.select-dropdown").on("focusout", function () {
    //             if ($(this).parent(".select-wrapper").children("select").prop("required")) {
    //                 if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
    //                     $(this).parent(".select-wrapper").children("input").css({"border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336"});
    //                 }
    //             }
    //         });
    //     }
    // });