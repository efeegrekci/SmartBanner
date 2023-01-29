$(document).ready(function () {
    // Config
  let smartBannerConfigs = {
    iOS: "https://apps.apple.com/tr/app/google/id284815942",
    android:
      "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
    huawei: "https://appgallery.huawei.com",
    title: "Google App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    buttonName: "View",
    startTime: 1500,
  };
    // Config

    // Core
  $(".modernSmartBanner .close").click(function () {
    localStorage.setItem("smartBanner", "wasActive");
    $(".modernSmartBanner").removeClass("active");
  });

  if (localStorage.getItem("smartBanner") === "wasActive") {
    $(".modernSmartBanner").removeClass("active");
  } else {
    let parser = new UAParser();
    let result = parser.getResult();
    $(".modernSmartBanner .textBox .title span").text(smartBannerConfigs.title);
    $(".modernSmartBanner .textBox .description span").text(smartBannerConfigs.description);
    $(".modernSmartBanner .buttonBox a").text(smartBannerConfigs.buttonName)
    if (result.device.vendor === "Huawei") {
      $(".modernSmartBanner .buttonBox a").attr(
        "href",
        smartBannerConfigs.huawei
      );
    } else if (result.os.name === "Android") {
      $(".modernSmartBanner .buttonBox a").attr(
        "href",
        smartBannerConfigs.android
      );
    } else if (result.os.name === "iOS") {
      $(".modernSmartBanner .buttonBox a").attr("href", smartBannerConfigs.iOS);
    }
    setTimeout(function () {
      $(".modernSmartBanner").addClass("active");
    }, smartBannerConfigs.startTime);
  }
    // Core
});
