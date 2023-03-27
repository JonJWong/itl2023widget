Please DM GWen#2607 on discord if you run into issues.

## ITL 2023 Online Stream Stats Widget

You can also view the widget from the ITL 2023 Online website at:

`https://itl2023.groovestats.com/stats?entrantId={entrantId}&theme={theme}`

where `{entrantId}` is replaced with your `entrantId` and `{theme}` is one of `Dark`, `DarkVertical`, `Light`, or `LightVertical`.

## Running the Stream Stats Widget locally:

1. Install [Node](https://nodejs.org/en/download/)
2. Set the `entrantId` in `src/scripts/config.js:23` to your own `entrantId`[^1] and save.
3. Open terminal/cmd and run `npm install && npm run build && npm run preview`
4. Set your browser source in OBS to `127.0.0.1:4173`.[^2]

## Customizations:

To use a different theme, change the number next to `currentStyle` in `src/scripts/config.js:24`.

If you want to change the profile image replace Avatar.png with your desired image.

- If you want to use an alternative file format/file name specify the source in `src/scripts/cofig.js:25`.

If you want to change the background image replace bg.png with the your desired image.

- If you want to use an alternative file format/file name specify the source inside of `src/assets/common.scss:2`.

If your name is too long you can override the name shown by providing an override name in `src/assets/config.js:26`.

[^1]: You can find your `entrantId` under Preferences on the ITL 2023 website.
[^2]: Although 4173 is the default port, if it is already taken Vite may use a different port. The proper port is displayed in your command line after running `npm run preview`
