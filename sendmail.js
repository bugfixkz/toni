function validate(){
    var name = document.getElementById('username').value;
    var phone = document.getElementById('userphone').value;
    Email.send({
        SecureToken : "c0ddc224-b6eb-4f7a-b8d9-93336a9126a8",
        To : 'admin@astana.toniandguy.kz',
        From : "request@astana.toniandguy.kz",
        Subject : "Заявка с сайта astana.toniandguy.kz",
        Body : "<b>Имя: </b>" + name + "<br/> <b>Номер телефона: </b>" + phone
    }).then(
      message => alert(message)
    );
}

function validateTrain(){
    var name = document.getElementById('username').value;
    var phone = document.getElementById('userphone').value;
    Email.send({
        SecureToken : "c0ddc224-b6eb-4f7a-b8d9-93336a9126a8",
        To : 'admin@astana.toniandguy.kz',
        From : "request@astana.toniandguy.kz",
        Subject : "Заявка на обучение с сайта astana.toniandguy.kz",
        Body : "<b>Имя: </b>" + name + "<br/> <b>Номер телефона: </b>" + phone
    }).then(
      message => alert(message)
    );
}