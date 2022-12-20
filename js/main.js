$(document).ready(function () {
  $(".wrapper-main-slider-content").owlCarousel({
    loop: $(".wrapper-main-slider-content a").length > 1 ? true : false,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
  });

  $(".wrapper-slider-project-content").owlCarousel({
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        loop: $(".wrapper-slider-project-content a").length > 1 ? true : false,
        items: 1,
      },
      991: {
        loop: $(".wrapper-slider-project-content a").length > 3 ? true : false,
        items: 3,
      },
    },
  });

  $(".wrapper-slider-category-content").owlCarousel({
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        loop: $(".wrapper-slider-category .category-item").length > 1 ? true : false,
        items: 1,
      },
      450: {
        loop: $(".wrapper-slider-category .category-item").length > 2 ? true : false,
        items: 2,
      },
      768: {
        loop: $(".wrapper-slider-category .category-item").length > 3 ? true : false,
        items: 3,
      },
      991: {
        loop: $(".wrapper-slider-category .category-item").length > 5 ? true : false,
        items: 5,
      },
    },
  });

  $(".wrapper-slider-blog-content").owlCarousel({
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        loop: $(".wrapper-slider-blog .wrapper-card-news").length > 1 ? true : false,
        items: 1,
      },
      450: {
        loop: $(".wrapper-slider-blog .wrapper-card-news").length > 2 ? true : false,
        items: 2,
      },
      991: {
        loop: $(".wrapper-slider-blog .wrapper-card-news").length > 3 ? true : false,
        items: 3,
      },
    },
  });

  $(".wrapper-slider-product-detail-content").owlCarousel({
    loop: $(".wrapper-slider-product-detail-content .slider-item-product-detail").length > 1 ? true : false,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
  });

  $(".wrapper-slider-product-detail-content").on("changed.owl.carousel", function (e) {
    let index = $(".wrapper-slider-product-detail-content").find(".owl-dots .active").index() + 1;
    $(".wrapper-sub-image-product img").removeClass("active");
    $(".wrapper-sub-image-product img:nth-child(" + index + ")").addClass("active");
  });

  $(".wrapper-sub-image-product img").click(function () {
    let index = $(this).index();
    $(".wrapper-slider-product-detail-content").trigger("to.owl.carousel", index);
  });

  $(".wrapper-slider-product-detail-content").on("changed.owl.carousel", function (e) {
    $(".wrapper-slider-product-detail-content").trigger("stop.owl.autoplay");
    $(".wrapper-slider-product-detail-content").trigger("play.owl.autoplay");
  });

  if ($(".wrap-action-menu").length > 0) {
    $(".wrap-action-menu").click(function () {
      $(this).toggleClass("active");
      $(".header-content-menu").slideToggle();
    });
  }

  if (window.innerWidth > 768) {
    $(".wrapper-slider-project-content").on("changed.owl.carousel", function (e) {
      $(".wrapper-slider-project-content .owl-item").removeClass("active-center");
      $(".wrapper-slider-project-content .owl-item:nth-child(" + (e.item.index + 2) + ")").addClass("active-center");
    });
    $(".wrapper-slider-project-content").trigger("next.owl.carousel");
  }

  if ($(".toggle-data").length > 0) {
    $(".toggle-data").click(function () {
      if ($(this).attr("data-toggle-only")) {
        let _this = $(this);

        $("[data-toggle-only]").each(function () {
          if ($(this).attr("data-toggle") == _this.attr("data-toggle")) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });

        $("div[data-toggle]").each(function () {
          if ($(this).attr("data-toggle") == _this.attr("data-toggle")) {
            $(this).slideDown();
          } else {
            $(this).hide();
          }
        });
      } else {
        $(this).toggleClass("active");
        $("div[data-toggle='" + $(this).attr("data-toggle") + "']").slideToggle();
      }

      AOS.refresh();
    });
  }

  if ($(".control-action-slider .action-slider-prev").length > 0) {
    $(".control-action-slider .action-slider-prev").click(function () {
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("stop.owl.autoplay");
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("play.owl.autoplay");
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("prev.owl.carousel");
    });
  }

  if ($(".control-action-slider .action-slider-next").length > 0) {
    $(".control-action-slider .action-slider-next").click(function () {
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("stop.owl.autoplay");
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("play.owl.autoplay");
      $(this).closest(".basic-slider").find(".owl-carousel").trigger("next.owl.carousel");
    });
  }

  var root = document.querySelector(":root");

  var scaleFont = 0;

  $("#font-down").click(function () {
    if (scaleFont > 0) {
      root.style.setProperty("--scale-font", (scaleFont = scaleFont - 2) + "px");
    }
  });

  $("#font-up").click(function () {
    root.style.setProperty("--scale-font", (scaleFont = scaleFont + 2) + "px");
  });

  $("#font-reset").click(function () {
    root.style.setProperty("--scale-font", (scaleFont = 0) + "px");
  });

  $(".form-cancel").click(function () {
    $(this).closest(".form-content").find("input").val("");
    $(this).closest(".form-content").find("textarea").val("");
  });

  $("#icon_top").click(function () {
    window.scroll({ top: 0, behavior: "smooth" });
  });

  $(".wrapper-slider-blog .wrapper-card-news").addClass("wrapper-card-news-slider");

  function resizeImage() {
    let arrClass = [
      { class: "top-card-product", number: 296 / 296 },
      { class: "category-item", number: 296 / 296 },
      { class: "top-card-image", number: 221 / 332 },
      { class: "wrapper-card-news-slider", number: 221 / 332 },
      { class: "post-image", number: 520 / 775 },
      { class: "services-img", number: 214 / 300 },
    ];
    for (let i = 0; i < arrClass.length; i++) {
      let width = $("." + arrClass[i]["class"]).width();
      $("." + arrClass[i]["class"]).css("height", width * arrClass[i]["number"] + "px");
    }
  }

  if (!(window.innerWidth > 991)) {
    $(".header-content-social").append($(".wrapper-header-top-content-right").children());

    $(".header-top-box-input i").click(function (e) {
      e.preventDefault();
      $(this).closest(".header-top-box-input").find("input").slideToggle();
    });
  }

  // handle btn ingr
  let totalPriceBillElement = $(".payment-bill-info-wrapper").find(".product-total-price span");

  function handleTotalBill() {
    let sum = 0;
    $(".bill-product-item .price-left-value").each(function () {
      let tt = $(this).attr("data-total-price");
      sum += Number(tt);
    });
    let formatPrice = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    $(".payment-bill-info-wrapper").find(".product-total-price span").attr("data-total-bill", sum);
    return formatPrice;
  }

  $(".wrapper-control-amount .control.deduction").click(function () {
    let amountElement = $(this).closest(".wrapper-control-amount").find(".amount");
    let amount = +$(this).closest(".wrapper-control-amount").find(".amount").text();
    let totalPriceElement = $(this).closest(".bill-product-item").find(".price-left-value");
    let dataPrice = $(this).closest(".bill-product-item").find(".price-left-value").attr("data-price");
    let dataTotalPrice = $(this).closest(".bill-product-item").find(".price-left-value");

    amount--;
    if (amount < 1) {
      amount = 1;
    } else {
      amountElement.text(amount);
      let totalPrice = dataPrice * amount;
      let formatPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
      totalPriceElement.text(formatPrice);
      dataTotalPrice.attr("data-total-price", totalPrice);
      totalPriceBillElement.text(handleTotalBill());
    }
  });

  $(".wrapper-control-amount .control.add").click(function () {
    let amountElement = $(this).closest(".wrapper-control-amount").find(".amount");
    let amount = +$(this).closest(".wrapper-control-amount").find(".amount").text();
    let totalPriceElement = $(this).closest(".bill-product-item").find(".price-left-value");
    let dataPrice = $(this).closest(".bill-product-item").find(".price-left-value").attr("data-price");
    let dataTotalPrice = $(this).closest(".bill-product-item").find(".price-left-value");

    amount++;
    amountElement.text(amount);
    let totalPrice = dataPrice * amount;
    let formatPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    totalPriceElement.text(formatPrice);
    dataTotalPrice.attr("data-total-price", totalPrice);
    totalPriceBillElement.text(handleTotalBill());
  });

  // handle active menu
  const contentMainElement = $(".wrapper-content-main .content-main-list");
  const textHidden = $(".wrapper-content-main .content-main-list .wrapper-title a");
  $(".wrapper-content-main .wrapper-title a").click((e) => {
    e.preventDefault();
    if (contentMainElement.hasClass("active")) {
      contentMainElement.removeClass("active");
      textHidden.text("[hiện]");
    } else {
      contentMainElement.addClass("active");
      textHidden.text("[ẩn]");
    }
  });

  // swap img
  $(".wrapper-views .wrapper-sub-image-product img").click(function () {
    let imgPath = $(this).prop("src");
    $(".wrapper-views .wrapper-image-product img").attr("src", imgPath);
  });

  resizeImage();
  $(window).on("resize", function () {
    resizeImage();

    AOS.refresh();
  });
});

$(document).ready(function () {
  var showChar = 500;
  var ellipsestext = "...";
  var moretext = "Xem thêm";
  var lesstext = "Thu gọn";

  $(".more").each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html =
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        '&nbsp;</span><span class="morecontent"><span>' +
        h +
        '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
        moretext +
        "</a></span>";
      console.log("html", html);

      $(this).html(html);

      AOS.refresh();
    }
  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();

    AOS.refresh();
    return false;
  });
  // thu gon
  $(".less").each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar); //500 den het

      var html =
        c +
        '&nbsp;</span><span class="morecontent"><span>' +
        h +
        '</span>&nbsp;&nbsp;<a href="" class="lessLink">' +
        lesstext +
        "</a></span>";

      $(this).html(html);

      AOS.refresh();
    }
  });

  $(".lessLink").click(function () {
    if ($(this).hasClass("more")) {
      $(this).removeClass("more");
      $(this).html(lesstext);
    } else {
      $(this).addClass("more");
      $(this).html(moretext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();

    AOS.refresh();
    return false;
  });

  $(".payment-info-2").css("display", "none");
  $(".payment-1").click(function () {
    $(this).addClass("active");
    if ($(this).hasClass("active")) {
      $(".payment-info-1").css("display", "block");
      $(".payment-2").removeClass("active");
      $(".payment-info-2").css("display", "none");
    }
  });
  $(".payment-2").click(function () {
    $(this).addClass("active");
    if ($(this).hasClass("active")) {
      $(".payment-info-2").css("display", "block");
      $(".payment-1").removeClass("active");
      $(".payment-info-1").css("display", "none");
    }
  });

  // Handle subcontents
  $(".sub-contents .contens-list .content-item").each(function (index, item) {
    item.onclick = function () {
      $(".sub-contents .contens-list .content-item").removeClass("active");
      $(this).addClass("active");
      console.log($(this).attr("data-show"));
      $(".data-product-show").hide();
      $(".data-product-show." + $(this).attr("data-show") + "").slideDown();
      AOS.refresh();
    };
  });

  $(".sub-contents .contens-list .content-item a").click((e) => {
    e.preventDefault();
  });

  const line = $(".sub-contents .contens-list .line");

  const widthScreen = $(window).width();

  // hover
  if (widthScreen >= 991) {
    $(".sub-contents .contens-list .content-item").map((tab) => {
      $(".sub-contents .contens-list .content-item")[tab].onmouseout = function () {
        line[0].style.left = this.offsetLeft + "px";
        line[0].style.width = 0 + "px";
      };
      $(".sub-contents .contens-list .content-item")[tab].onmouseover = function () {
        line[0].style.left = this.offsetLeft + "px";
        line[0].style.width = this.offsetWidth + "px";
      };
    });
  }

  // back-to-top
  $(".wrapper-option.back-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 750);
  });
});

$(document).ready(function () {
  if (window.innerWidth < 991) {
    $(".wrapper-menu").append($(".header-content-menu").children()[0]);

    $(".wrapper-menu .has-child a").click(function (e) {
      e.preventDefault();

      $(this).closest(".has-child").find(".menu-child").slideToggle();
    });
  }
});
