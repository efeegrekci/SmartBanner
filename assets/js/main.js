$(document).ready(function () {
    // Config
  let smartBannerSettings = {
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
    $(".modernSmartBanner .textBox .title span").text(smartBannerSettings.title);
    $(".modernSmartBanner .textBox .description span").text(smartBannerSettings.description);
    $(".modernSmartBanner .buttonBox a").text(smartBannerSettings.buttonName)
    if (result.device.vendor === "Huawei") {
      $(".modernSmartBanner .buttonBox a").attr(
        "href",
        smartBannerSettings.huawei
      );
    } else if (result.os.name === "Android") {
      $(".modernSmartBanner .buttonBox a").attr(
        "href",
        smartBannerSettings.android
      );
    } else if (result.os.name === "iOS") {
      $(".modernSmartBanner .buttonBox a").attr("href", smartBannerSettings.iOS);
    }
    setTimeout(function () {
      $(".modernSmartBanner").addClass("active");
    }, smartBannerSettings.startTime);
  }
    // Core
});
