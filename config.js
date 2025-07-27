let config = {
  address: "localhost",
  port: 8080,
  language: "en",
  timeFormat: 24,
  units: "metric",
  modules: [
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      position: "top_right",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "https://calendar.google.com/calendar/ical/your_calendar.ics"
          }
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "London",
        locationID: "2643743",
        appid: "YOUR_OPENWEATHER_API_KEY"
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "BBC News",
            url: "https://feeds.bbci.co.uk/news/rss.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
};

module.exports = config;
