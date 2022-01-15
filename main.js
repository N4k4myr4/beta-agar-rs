loadCSS() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@9';
    document.getElementsByTagName("head")[0].appendChild(script);
    $('head').append(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`);
    if (!localStorage.getItem('agarUnlimited3UUID')) localStorage.setItem('agarUnlimited3UUID', this.createUUID());
    this.uuid = localStorage.getItem('agarUnlimited3UUID');
}

loadGUI() {
    $('#keys').replaceWith(`
    <input onchange="localStorage.setItem('botNick', this.value);" id="botNick" maxlength="15" class="form-control" placeholder="Bot Name" value="Bot"></input>
    <input onchange="localStorage.setItem('botAmount', this.value);" id="BotAmount" maxlength="3" class="form-control" placeholder="Bot Amount" value="10"></input>
    <center><button id="toggleButton" onclick="window.client.startBots(localStorage.getItem('botAmount'));" class="btn btn-success">Start Bots</button></center>
    `);
    if (!localStorage.getItem('botAmount')) localStorage.setItem('botAmount', 10);
    if (!localStorage.getItem('botNick')) localStorage.setItem('botNick', 'Sanik');
    console.log('[AgarUnlimited] Ready!');
}
