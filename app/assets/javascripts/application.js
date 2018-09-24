/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('HMCTS API portal - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
