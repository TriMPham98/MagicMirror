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
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 37.7749,
				lon: -122.4194
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 37.7749,
				lon: -122.4194
			}
		},
		// {
		// 	module: "MMM-APOD",
		// 	position: "fullscreen_below",
		// 	config: {
		// 		appid: "UzbYQacVqdlHwYdAsgH6gsQWnPEjZqkOElHntK0h", // Replace with your actual NASA API key
		// 		updateInterval: 6 * 60 * 60 * 1000, // Update every 6 hours
		// 		animationSpeed: 1000,
		// 		maxMediaWidth: 0, // 0 means use actual width
		// 		maxMediaHeight: 0, // 0 means use actual height
		// 		maxDescriptionLength: 200,
		// 		backgroundSize: "cover",
		// 		backgroundPosition: "center",
		// 		backgroundOverlay: "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.75) 100%)",
		// 		showTitle: true,
		// 		showDescription: false,
		// 		useShortDescription: true,
		// 		initialLoadDelay: 0,
		// 		retryDelay: 2500,
		// 		apiBase: "https://api.nasa.gov/",
		// 		apodEndpoint: "planetary/apod"
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }