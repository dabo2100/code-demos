let code = 112233;
axios.post(
  "https://www.facebook.com/recover/code",
  {
    jazoest: 21024,
    lsd: "AVqmYxjHPMk",
    n: "code",
    reset_action: 1,
  },
  {
    params: {
      "em[0]": "tota_s_eg@yahoo.com",
      rm: "send_email",
      spc: 0,
      cuid: "AYhRbX-635uw7vsVeBywlCD3BOs0EscgNk-Hv9HBAme42eH3ZWKSOVap1CJzQ9Qj-Ta2fXkFpjl6WQrJjv95MFPlG7oajBfcxjqBjrhfcHBT5MJOVQ8vyI6fSvYCpMkGnNweWgEeQVxrks3zj9V1BYK4_GjrSyBnt-SSFxVDJXBqWxdajhCEqC5BBbjSx3FzsOI",
      fl: "default_recover",
      wsr: 0,
    },
  }
);
