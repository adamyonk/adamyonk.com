---
templateKey: "post"
title: "Simple Post Tagging in Gatsby"
date: 2019-10-01T11:29:53-05:00
updated: 2019-09-30T11:29:53-05:00
tags: [gatsby]
---

Some very dear friends of mine run a restaraunt called The Wheelhouse. They
recently they opened a location in a hotel where their menu is on display on a
large TV in the lobby. Unfortunatly the TV had been controlled by the hotel IT
department and they were sometimes slow to respond to requests to change the
image running on the TV, so we took matters into our own hands.

The goal was to have a Raspberry Pi running behind the TV so we could more
quickly and easily update the menu, and not be dependent on anyone else's
timeframe. I came up with two scripts to run on timers on the Pi, one to
donwload a fresh copy of the menu that is on their public website, and one to
open a browser in "kiosk" mode and refresh occasionally.

### Menu Script

I'll talk about the menu script first. Here is the source:

```bash
```

### Kiosk Script

The kiosk script is pretty straightforward. Requires the following dependencies:

```shell
$ sudo apt-get install chromium sed xdotool unclutter
```

Comments added inline below:

```bash
#!/bin/bash

# Turn off the screensaver
xset s noblank
xset s off
xset -dpms

# Hide the mouse
unclutter -idle 0.5 -root &

# Disable some chromium warnings
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

# Open chromium
chromium-browser --noerrdialogs --disable-infobars --kiosk file:///home/pi/www.wheelhousefood.com/…

# Refresh (ctrl-r) every 20 minutes
while true; do
   xdotool keydown ctrl+r; xdotool keyup ctrl+r;
   sleep 1200
done
```

### systemctl orchestration

/lib/systemd/system/kiosk.service

```[Unit]
Description=Chromium Kiosk
Wants=graphical.target
After=graphical.target

[Service]
Environment=DISPLAY=:0.0
Environment=XAUTHORITY=/home/pi/.Xauthority
Type=simple
ExecStart=/bin/bash /home/pi/kiosk.sh
Restart=on-abort
User=pi
Group=pi

[Install]
WantedBy=graphical.target
```

sudo systemctl enable kiosk.service
sudo systemctl start kiosk.service
