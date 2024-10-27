// Hide and Show dropdown on mobile devices
$(function () {
  var $dropdownToggle = $(".c-headerp-grid-item__dropdown-toggle");
  let $dropdownMenu = $(".c-headerp-grid-item__dropdown-menu");
  var isOpen = false;

  $($dropdownToggle).on("click", function (e) {
    e.preventDefault();
    if (isOpen === false) {
      $($dropdownMenu).css("display", "block");
      isOpen = true;
    } else {
      $($dropdownMenu).css({ display: "none" });
      isOpen = false;
    }
  });
});
