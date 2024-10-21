let config = {
    address: "localhost",
    port: 8080,
    basePath: "/",
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",
    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"],
    timeFormat: 24,
    units: "imperial",
    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "calendar",
            header: "US Holidays",
            position: "top_left",
            config: {
                calendars: [
                    {
                        fetchInterval: 7 * 24 * 60 * 60 * 1000,
                        symbol: "calendar-check",
                        url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: "lower_third",
            config: {
                compliments: {
                    anytime: [
                        "You look great today!",
                        "Looking good!",
                        "Wow, you look fantastic!"
                    ],
                    morning: [
                        "Top of the morning!",
                        "Enjoy your day!",
                        "How was your sleep?"
                    ],
                    afternoon: [
                        "You look charming!",
                        "Looking good today!"
                    ],
                    evening: [
                        "You look nice!",
                        "Good evening!"
                    ]
                }
            }
        },
        {
            module: "weather",
            position: "top_right",
            config: {
                weatherProvider: "openmeteo",
                type: "current",
                lat: 37.30338,
                lon: -121.8091
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                weatherProvider: "openmeteo",
                type: "forecast",
                lat: 37.30338,
                lon: -121.8091
            }
        },
        {
            module: "MMM-IronManGIF",
            position: "middle_center",
            config: {
                style: 4,              // Changed to style 4
                maxWidth: "100%",      // Sizes the images. 
                rotate: false,         // Rotate through images
                updateInterval: 30000  // Interval between image rotations (30 seconds)
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}