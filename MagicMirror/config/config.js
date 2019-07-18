/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "",
    port: 8080,
    ipWhitelist: [],
    language: "en",
    timeFormat: 24,
    units: "metric",

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
                        symbol: "calendar-check",
                        url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "New York",
                locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
                appid: "YOUR_OPENWEATHER_API_KEY"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "New York",
                locationID: "5128581",  //ID from https://openweathermap.org/city
                appid: "YOUR_OPENWEATHER_API_KEY"
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}