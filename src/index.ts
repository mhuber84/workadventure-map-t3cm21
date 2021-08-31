/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;

WA.room.onEnterZone('twitter', () => {
    currentPopup = WA.openPopup(
        'followUsPopup',
        'Hey! Want to follow us on Twitter?',
        [
          {
              label: 'Twitter',
              className: 'primary',
              callback: () => WA.nav.openTab('https://twitter.com/t3cm'),
          }
      ]
    )
})
WA.room.onLeaveZone('twitter', closePopUp)

WA.room.onEnterZone('instagram', () => {
    currentPopup = WA.openPopup(
        'followUsPopup',
        'Hey! Want to follow us on Instagram?',
        [
          {
              label: 'Instagram',
              className: 'primary',
              callback: () => WA.nav.openTab('https://www.instagram.com/typo3camp/'),
          }
      ]
    )
})
WA.room.onLeaveZone('instagram', closePopUp)

WA.room.onEnterZone('facebook', () => {
    currentPopup = WA.openPopup(
        'followUsPopup',
        'Hey! Want to follow us on Facebook?',
        [
          {
              label: 'Facebook',
              className: 'primary',
              callback: () => WA.nav.openTab('https://www.facebook.com/TYPO3campMunich'),
          }
      ]
    )
})
WA.room.onLeaveZone('facebook', closePopUp)

WA.room.onEnterZone('slack', () => {
    currentPopup = WA.openPopup(
        'followUsPopup',
        'Hey! Want to follow us on Slack?',
        [
          {
              label: 'Slack',
              className: 'primary',
              callback: () => WA.nav.openTab('https://typo3.slack.com/archives/CC4DW9479'),
          }
      ]
    )
})
WA.room.onLeaveZone('slack', closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
