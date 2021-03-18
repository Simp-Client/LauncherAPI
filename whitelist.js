function whitelistCheck() {
  document.getElementById('launchButton').innerHTML = "Checking WL";
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
      launchBeta()
    } else if(data.indexOf('83c987216c66438ebf3c2e1d0dd6d469') >= 1) {
      launchBeta()
    } else if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
      launchBeta()
    } else if(data.indexOf('1a16f19cd20c48c1b36106789f7adfb0') >= 1) {
      launchBeta()
    } else if(data.indexOf('1a16f19cd20c48c1b36106789f7adfb0') >= 1) {
      launchBeta()
    } else {
      notWhitelisted()
    }
  });
}
