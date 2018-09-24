/* global $ */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('HMCTS API portal - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
