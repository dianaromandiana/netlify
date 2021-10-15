//export class Singup {
            let createaccount = () => {
            // Создать аккаунт
            validAccount();
            };
            function validAccount(){
            result=false;
            // валидация аккаунта
            return result;
            }
            let cancel = () => {
             window.location.href = window.location.origin + '/login';
            }
//}