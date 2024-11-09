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
    electronOptions: {
        webPreferences: {
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        powerSaveBlocker: true
    },
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
            position: "bottom_bar",
            config: {
                compliments: {
                    anytime: [
                        "The suit is ready for deployment, sir.",
                        "Your coffee is prepared to your exact specifications.",
                        "Shall I run diagnostics on the Mark 85, sir?",
                        "Your latest invention is truly remarkable, sir.",
                        "The world continues to be in awe of your genius, Mr. Stark."
                    ],
                    morning: [
                        "Good morning, sir. The weather is perfect for a test flight.",
                        "Breakfast is ready. Shall I brief you on today's schedule?",
                        "Rise and shine, sir. Time to save the world again.",
                        "Good morning. Your new armor upgrades are complete and ready for testing."
                    ],
                    afternoon: [
                        "Sir, might I remind you of the board meeting in an hour?",
                        "Your 3 o'clock appointment has arrived. Shall I send them in?",
                        "The lab results you requested are ready for your review, sir.",
                        "Perhaps a short break is in order, sir. You've been working for 6 hours straight."
                    ],
                    evening: [
                        "Dinner reservations have been made, sir. Your favorite table.",
                        "Shall I initiate evening patrol protocols, sir?",
                        "Maybe it's time to call it a night, sir. Even geniuses need sleep.",
                        "The Avengers have sent a message. Shall I put it on screen?"
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
                style: 4,
                maxWidth: "100%",
                rotate: false,
                updateInterval: 30000
            }
        },
        {
            module: "MMM-Jast",
            position: "top_right",
            header: "Stock & Crypto Tracker",
            config: {
                currencyStyle: "code",
                fadeSpeedInSeconds: 6.9,
                maxWidth: "100%",
                numberDecimalsValues: 2,
                displayMode: "vertical",
                showColors: true,
                showCurrency: true,
                showChangePercent: true,
                showChangeValue: true,
                showLastUpdate: true,
                updateIntervalInSeconds: 300,
                useGrouping: true,
                stocks: [
                    { name: 'Tesla', symbol: 'TSLA' },
                    { name: 'NVIDIA', symbol: 'NVDA' },
                    { name: 'Bitcoin', symbol: 'BTC-USD' },
                    { name: 'Dogecoin', symbol: 'DOGE-USD' }
                ]
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}