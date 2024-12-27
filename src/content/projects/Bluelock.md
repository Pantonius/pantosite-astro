---
title: Bluelock - Bluetooth Screen Locker
pubDate: 2023-02-15T15:00:00Z
description: A little tool to automatically lock your screen when you leave your desk.
---
[Bluelock](https://github.com/Pantonius/Bluelock) is a little bash script I wrote that automatically locks your linux desktop when you leave your desk and conveniently unlocks it as soon as you get back. It accomplishes this with the bluetooth signal strength to your smartphone, smartwatch or any other device.

## But how does it work?
Bluelock uses bluez and bluez-utils, particularly the 'bluetoothctl' tool to read the *receiver signal strength indicator* (RSSI) of your connection. It is important to point out the last part of that name: **indicator**. It is not an actual metric for the signal strength and varies greatly between chip manufacturarers. But in general, the higher the RSSI, the better the signal strength, with 0 being the optimal value and -100 being the worst.

The script then uses a simple if statement to check if the RSSI is above or below a certain threshold. If it is above, it will lock the screen, if it is below, it will unlock it. If, for any reason, the script is unable to read the RSSI or the bluetooth connection is lost, it will simply do nothing. This is a precaution to prevent the script from perpetually locking your screen if push comes to shove (though it remembers that it locked your screen and will not lock it again until the bluetooth connection is re-established and below the rssi threshold).

Anyhow: To be perfectly honest, this method is not very reliable when it comes to detecting when you are actually moving away from your desk. It is very easy to get a false positive when a lot of bluetooth devices are in the vicinity and/or the bluetooth connection gets flakey.

In later versions I'd like to look into other ways of detecting when you leave your desk.

Even then the goal would still be to keep the whole experience as seemless and accessible as possible. While solutions like using the accelerometer in your smart device would be more reliable, they would also add a level of complexity that would render the whole thing undesirable for most users.

## Setup and Usage
### Setup
First install bluez. On Ubuntu this can be done with the following command:
```bash
sudo apt-get install bluez
```

Then clone the repository and make the script executable:
```bash
git clone www.github.com/Pantonius/Bluelock
cd Bluelock
chmod +x bluelock.sh
```

### Usage
While in the directory, you can also run the script to check if everything is working as expected:
```bash
./bluelock.sh
```
The script helps you out quite a bit here. If you run it without any arguments, it will check if any bluetooth devices are currently connected and if so, it will offer you to use one of those. You may choose one by entering the associated number. Should you decide against it and want to run a search for all available bluetooth devices, you can simply press the <kbd>Enter</kbd> key.  
The script will now proceed to search for about two seconds before displaying a list of all available devices. After which you may select one of them by entering its number or press <kbd>Enter</kbd> to search again.

Alternatively, you can just pass the bluetooth address of your device and the RSSI threshold as arguments.
```bash
./bluelock.sh <bluetooth address> <rssi threshold>
```
This way you can automate the process and have it run without any additional input.

## Automating the process

### Run it from anywhere
If you want to be able to run bluelock from anywhere you may do so in a number of ways.
The best one in my humble opinion is making a script directory in which you have symlinks to all of your favourite scripts.

Let's create one in your home directory:
```bash
mkdir ~/scripts
```

Now we can create a symlink to the bluelock script like so, assuming you are in the directory of the cloned repository:
```bash
sudo ln bluelock.sh ~/scripts/bluelock
```

You'll find a file called "bluelock" in the scripts directory which really only is a redirection to the script in the cloned repository. If you were to edit this "bluelock" file, you'd change the original script as well. How neat!

However, what we really wanted to achieve is being able to run the script from anywhere on your system, which this solution doesn't do yet! The last step towards that goal is adding the path of the scripts directory to the [`$PATH` environment variable](/Nice%20To%20Know/PATH%20Environment%20Variable%20on%20Linux).

To do so you can simply edit the `.bashrc` file located in your home directory:
```bash
nano ~/.bashrc
```
And add this line, with your username instead of "pantonius", to the very end of the file:
```bash
$PATH=/home/pantonius/scripts/:$PATH
```

You should now be able to run the `bluelock` command from anywhere on your system!

You are now in a pretty good position to include the `bluelock` command in your own scripts or to automatically run it on startup with a set bluetooth address and rssi threshold.