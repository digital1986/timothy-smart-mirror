# 🪞 Smart Mirror Project (MagicMirror² Based)

This project sets up a Smart Mirror using the [MagicMirror²](https://github.com/MichMich/MagicMirror) platform. It's intended to run on a Raspberry Pi connected to a monitor behind a two-way mirror.

## 💻 Features

- 🕒 Clock and calendar
- 🌤️ Current weather
- 📰 News feed
- 🔧 Easily extendable with custom modules

## 🚀 Installation

1. Clone this repo:
    ```bash
    git clone https://github.com/your-username/smart-mirror.git
    cd smart-mirror
    ```

2. Run the install script:
    ```bash
    ./install.sh
    ```

3. Start MagicMirror:
    ```bash
    cd MagicMirror
    npm run start
    ```

## 🧩 Configuration

Edit `config/config.js` to customize modules, API keys, weather locations, etc.

Get your OpenWeatherMap API key at: https://openweathermap.org/api

## 📸 Example Setup

- Raspberry Pi 3/4
- HDMI Monitor
- Two-way mirror acrylic/glass
- Frame enclosure

## 📜 License

MIT
