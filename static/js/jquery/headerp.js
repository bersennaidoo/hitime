$(function() {
    var $dropdownToggle = $(".c-headerp__dropdown-toggle")
    let $dropdownMenu = $(".c-headerp__dropdown-menu")
    var isOpen = false

    $($dropdownToggle).on("click", function(e) {
        e.preventDefault()
        if (isOpen === false) {
        $($dropdownMenu).css("display", "block")
        isOpen = true
        } else {
            $($dropdownMenu).css({"display": "none"})
            $(".c-headerp").css({"margin": 0, "padding": 0})
            isOpen = false
        }
    })
})