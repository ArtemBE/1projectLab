//import fetchMock from "fetch-mock";

const email = document.querySelector('.input-fields__field_email');
const password = document.querySelector('.input-fields__field_password');
const remember = document.querySelector('.remember-checkbox');
const login = document.querySelector('.login-button');
const forgot = document.querySelector('.forgot-button');
const signin = document.querySelector('.top-links__sign-in');
const signup = document.querySelector('.top-links__sign-up');

login.addEventListener('click', ()=>{
    if(email.value!=='example@gmail.com') console.log(email.value) || alert('Такого пользователя не существует');
    else if(password.value!=='password') console.log(password.value) || alert('Такого пользователя не существует');
    else alert('Отправка данных на сервер сымитирована');
})
login.addEventListener('click', ()=>{
    
})

function onclick(e){
    e.preventDefault();
    alert("Это не задумывается");
}
forgot.addEventListener('click', onclick);
signin.addEventListener('click', onclick);
signup.addEventListener('click', onclick);

//fetchMock.get('/api/data', {data: 5})