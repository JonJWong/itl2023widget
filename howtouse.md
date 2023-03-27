Please DM GWen#2607 on discord if you run into issues.

## ITL 2023 Online Stream Stats Widget

You can also view the widget from the ITL 2023 Online website at:

`https://itl2023.groovestats.com/stats?entrantId={entrantId}&theme={theme}`

where `{entrantId}` is replaced with your `entrantId` and `{theme}` is one of `Dark`, `DarkVertical`, `Light`, or `LightVertical`.

## Running the Stream Stats Widget locally:

1. Install [Node](https://nodejs.org/en/download/)
2. Set the `entrantId` in `src/scripts/config.js:23` to your own `entrantId`[^1] and save.
3. _Optional_ Make any additional customizations/changes, such as background image, avatar, overrideName, currentStyle.
4. Open terminal/cmd and type `npm install && npm run build && npm run preview`, then press enter[^2].[^3]
5. Set your browser source in OBS to `127.0.0.1:4173`.[^4]

## Customizations:

To use a different theme, change the number next to `currentStyle` in `src/scripts/config.js:24`.

If you want to change the profile image, replace `public/Avatar.png` with your desired image. If you do this and your file is not named `Avatar.png`,
you must specify an `avatarSource` in `src/scripts/cofig.js:25`.

If you want to change the background image, replace `public/bg.png` with the your desired image. If you do this and your file is not named `bg.png`,
you must change `bg.png` in `src/assets/common.scss:2` to the correct file name.

If your name is too long you can override the name shown by providing an override name in `src/assets/config.js:26`.

[^1]: You can find your `entrantId` under Preferences on the [ITL 2023 website](https://itl2023.groovestats.com/).
[^2]: If you make any changes to the widget, you must run `npm run build` before `npm run preview` for the changes to be displayed.
[^3]: If you've done this step before, you do not need to run `npm install` again. Use `npm run build && npm run preview` instead.
[^4]: Although 4173 is the default port, if it is already taken Vite may use a different port. The proper port is displayed in your command line after running `npm run preview`
