$(document).ready(function () {
    $(".product-card").on("click", function () {
        window.location.assign("product-detail.html")
    })
    $("input.custom-search").on("focusout", function () { $(".custom-search-container").removeClass("search-focused") })
    $("input.custom-search").on("focusin", function () { $(".custom-search-container").addClass("search-focused") })
}

)