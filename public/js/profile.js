//export class ProfilePage{
            const display_name= 'TestNameFromRequest';
            document.getElementById('displayName').innerHTML = display_name;

            let changeinfo = () => { };
            let changeavatar = () => {
            window.location.href =  window.location.origin +'/avataredit';
            }
            let cancel = () => {
             window.location.href =  window.location.origin +'/dashboardChat';
            }
//}