# 🪞 Smart Mirror Project (MagicMirror² Based)
[![Alt text](https://community-assets.home-assistant.io/optimized/4X/0/0/c/00c9140c3bf9a0b54cdc3f46ab437689aa1bce0c_2_450x1000.jpeg)](https://www.youtube.com/watch?v=-Wz3OT7VuQ8)
This project sets up a Smart Mirror using the [MagicMirror²]https://github.com/digital1986/timothy-smart-mirror)platform. It's intended to run on a Raspberry Pi connected to a monitor behind a two-way mirror.

## 💻 Features

- 🕒 Clock and calendar
- 🌤️ Current weather
- 📰 News feed
- 🔧 Easily extendable with custom modules

## 🚀 Installation

1. Clone this repo:
    ```bash
    git clone https://github.com/digital1986/timothy-smart-mirror
    cd timothy-smart-mirror
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

