Bug
==============

Download this addon from [addons.mozilla.org] (https://addons.mozilla.org/en-US/firefox/addon/bug/)

Source Code Repository For Bug

Source code released under [MPL 2.0] (https://www.mozilla.org/MPL/2.0/)

#### What it does: 

Select any BugZilla bug number and press the button to go there or select and right click.


### About this Add-on:

- Helps make it easier to view bugzilla bugs.

This addon was created in visual studios code.

####  To build (Platform):

- `Windows:` __CTRL + SHIFT + B__
- `Linux:` __CTRL + SHIFT + B__

#### Task Runner (Visual Studio Code):

- `Windows:` __CTRL + SHIFT + P__
- `Linux:` __CTRL + SHIFT + P__

| Task | Command | Result |
|----------|:-------------:|------:|
| Build | task build | Builds addon *.xpi |
| Test | task test | Runs tests printing to task console. |
| Run | task run | Spawns firefox with new profile instance. |
| Sign | task sign | Builds then signs the addon using AMO signing api. |
