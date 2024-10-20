let config = {
    // ... (previous configuration remains the same)
    modules: [
        // ... (other modules remain the same)
        {
            module: "MMM-APOD",
            position: "fullscreen_below",
            config: {
                appid: "UzbYQacVqdlHwYdAsgH6gsQWnPEjZqkOElHntK0h",
                updateInterval: 1 * 60 * 1000, // Update every 1 minutes
                animationSpeed: 1000,
                maxMediaWidth: 0, // 0 means use actual width
                maxMediaHeight: 0, // 0 means use actual height
                maxDescriptionLength: 0, // 0 means no limit
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOverlay: "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.75) 100%)",
                showTitle: true,
                showDescription: true,
                useShortDescription: false,
                initialLoadDelay: 0,
                retryDelay: 2500,
                apiBase: "https://api.nasa.gov/",
                apodEndpoint: "planetary/apod",
                titleLocation: "bottomCenter",
                descriptionLocation: "bottomCenter",
                numberOfDays: 30, // Fetch images from the last 30 days
                cycleWithoutFetch: true, // Cycle through fetched images without re-fetching
                cycleDuration: 5 * 60 * 1000 // Change image every 5 minutes
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}