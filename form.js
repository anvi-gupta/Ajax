var scriptURL = "https://script.google.com/macros/s/AKfycbzy1n8lYigfbCv9BlYYS99MvrSaR4h2cLlO24lXbdM0E5y2d8TFq4LlUjQ3nlKowAYw/exec"
var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{

var crypt = {
secret: "ProGradJunior",
encrypt: function(password){
var encrypted = CryptoJS.AES.encrypt(password,crypt.secret)
encrypted = encrypted.toString()
return encrypted
},
decrypt: function(encryptedPassword){
var decrypted = CryptoJS.AES.decrypt(encryptedPassword,crypt.secret)
decrypted = decrypted.toString(CryptoJS.enc.Utf8)
return decrypted
}
}

var encryptedPassword = crypt.encrypt(document.getElementById('password').value)
console.log(encryptedPassword)
document.getElementById('password').value = encryptedPassword
var decryptedPassword = crypt.decrypt(encryptedPassword)
console.log(decryptedPassword)

e.preventDefault()
fetch(scriptURL,{method: 'POST', body: new FormData(form)})
.then(response => document.getElementById('form_alert').innerHTML = "Data has stored")
.catch(error => document.getElementById('form_alert').innerHTML = "Data has not stored")
})

