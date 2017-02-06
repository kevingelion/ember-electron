/* jshint browser: true */
;(function () {
  if (window && window.process && window.process.type) {
    window.ELECTRON = true;
  }

  window.requireNode = window.require;
  window.moduleNode = window.module;
  window.processNode = window.process;

  delete window.process;
  delete window.require;
  delete window.module;
})();
