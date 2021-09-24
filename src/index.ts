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

WA.room.onEnterZone('info', () => {
    currentPopup = WA.openPopup(
        'infoPopup',
        'Etherpad with links to Jitsi rooms and other usefull stuff.',
        [
          {
              label: 'Show',
              className: 'primary',
              callback: () => WA.nav.openTab('https://ffmuc.net/pad/p/t3cm2021-info'),
          }
      ]
    )
})
WA.room.onLeaveZone('info', closePopUp)

WA.room.onEnterZone('docstypo3', () => {
    currentPopup = WA.openPopup(
        'libraryPopup',
        'TYPO3 documentation',
        [
          {
              label: 'Show',
              className: 'primary',
              callback: () => WA.nav.openTab('https://docs.typo3.org'),
          }
      ]
    )
})
WA.room.onLeaveZone('docstypo3', closePopUp)

WA.room.onEnterZone('docsmozilla', () => {
    currentPopup = WA.openPopup(
        'libraryPopup',
        'MDN Web Docs',
        [
          {
              label: 'Show',
              className: 'primary',
              callback: () => WA.nav.openTab('https://developer.mozilla.org/de/docs/Web'),
          }
      ]
    )
})
WA.room.onLeaveZone('docsmozilla', closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
