---
title: Recover Data from a Mac without Target Disk Mode
date: "2016-03-14T09:17:28-0500"
tags: [apple, macos, command-line]
---

I was recently trying to pull data off of an iMac for a friend, but didn't have any Macs around with FireWire ports to get at the iMac HD in target disk mode<sup><a name="1-ref"></a>[1](#1)</sup>. This method does require an external hard drive.

Start up your Mac in single-user mode<sup><a name="2-ref"></a>[2](#2)</sup>, then run the following commands<sup><a name="3-ref"></a>[3](#3)</sup>:

```bash
# Check the filesystem
/sbin/fsck -y

# Mount the root volume
mount -uw /

# Create mount destination
mkdir /Volumes/backup

# Get a list of available drives
df -h

# Plug in USB backup drive, look for new drive name
df -h

# Mount the drive with the name you got from last step. Probably looks
# something like /dev/rdisk2s2. Note the rdisk / disk name difference.
mount -t hfs /dev/disk2s2 /Volumes/backup

# rsync data to your backup
rsync -ahz /Users/you/ /Volumes/backup/
```

<sup><a name="1"></a><a href="#1-ref">1</a></sup>Share files between two computers with target disk mode: [https://support.apple.com/en-us/HT201462][target disk mode]

<sup><a name="2"></a><a href="#2-ref">2</a></sup>How to start up your Mac in single-user or verbose mode: [https://support.apple.com/en-us/HT201573][single user mode]

<sup><a name="3"></a><a href="#3-ref">3</a></sup>Mount USB Memory Sticks in single user mode: [http://hints.macworld.com/article.php?story=20030714194313542][macworld]

[target disk mode]: https://support.apple.com/en-us/HT201462
[single user mode]: https://support.apple.com/en-us/HT201573
[macworld]: http://hints.macworld.com/article.php?story=20030714194313542
