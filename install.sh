#!/bin/bash
# Install MagicMirror² on Raspberry Pi

echo "Updating system..."
sudo apt-get update && sudo apt-get upgrade -y

echo "Installing Node.js..."
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git

echo "Cloning MagicMirror..."
git clone https://github.com/MichMich/MagicMirror
cd MagicMirror
npm install

echo "MagicMirror installed. Run with:"
echo "  cd MagicMirror"
echo "  npm run start"
