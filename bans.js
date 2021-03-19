function bannedCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('fdasfadsfdsafdsa') >= 1) {
     banUser()
    } else if(data.indexOf('fa70437f798349c6997f191a52afd6d7') >= 1) {
      banUser()
    } else if(data.indexOf('f9253756dc8744ed81f8f03811ab89b4') >= 1) {
      banUser()
    } else if(data.indexOf('7841d78f9294417fa8ba2dcf69ee0cf4') >= 1) {
      banUser()
    } else {
      checkFirstPatch();
    }
  });
}

function bannedCheck2() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('fdasfdafdasfdasfdasfasd') >= 1) {
     banUser()
    } else if(data.indexOf('fa70437f798349c6997f191a52afd6d7') >= 1) {
      banUser()
    } else if(data.indexOf('f9253756dc8744ed81f8f03811ab89b4') >= 1) {
      banUser()
    } else if(data.indexOf('7841d78f9294417fa8ba2dcf69ee0cf4') >= 1) {
      banUser()
    } else {
      quickMain1();
    }
  });
}

function bannedCheck3() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('fdsafdasfdasfdas') >= 1) {
     banUser()
    } else if(data.indexOf('fa70437f798349c6997f191a52afd6d7') >= 1) {
      banUser()
    } else if(data.indexOf('f9253756dc8744ed81f8f03811ab89b4') >= 1) {
      banUser()
    } else if(data.indexOf('7841d78f9294417fa8ba2dcf69ee0cf4') >= 1) {
      banUser()
    } else {
      quickMain2();
    }
  });
}

function bannedCheck4() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('fdasfdasfdsafasdfdsa') >= 1) {
     banUser()
    } else if(data.indexOf('fa70437f798349c6997f191a52afd6d7') >= 1) {
      banUser()
    } else if(data.indexOf('f9253756dc8744ed81f8f03811ab89b4') >= 1) {
      banUser()
    } else if(data.indexOf('7841d78f9294417fa8ba2dcf69ee0cf4') >= 1) {
      banUser()
    } else {
      quickMain3();
    }
  });
}
