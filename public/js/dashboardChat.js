            let clickOnChat = () => {
            //подгружать чат в правый блок
            }
            let addChat = () => {
            //создание чата;
            }
            let delChat = () => {
            //удаление чата;
            }
            let findChat = () => {
            //поиск по всем чатам;
            }

            let cancel = () => {
             window.location.href =  window.location.localhost +'/login';
            }
            let openProfile = () => {
             //открыть профиль
             window.location.href =  window.location.localhost +'/profile';
            }

            let send = () => {
            let  sendTextMessage = document.getElementById('message').value;
            let  message_container = document.getElementById('message_container').innerHTML;
            let  htmlTextMessage = `\n<div class="container"><p>${sendTextMessage}</p>\n</div>\n`
            /*'\n<div class="container">\n
            <p>sendTextMessage!</p>\n
            <span class="time-right">Kate</span>\n
            <span class="time-right">10:10:01</span>\n
            </div>\n'*/
            message_container = message_container.concat(htmlTextMessage);
            }


(function (){
/*$.ajax({
url: '/data.json'
}).done(function(data){

let  message_container= document.getElementById('message_container');
//let  json= JSON.parse(data);
let  source = document.getElementById("message_list").innerHTML;
let  template = Handlebars.compile(source);
let  html = template(dataMessage); // template(json);

message_container.append(html);
})*/
})()

const dataMessage={
       message_list:[
         {
           message : "Hello!",
           time : "10:10:01",
           author : "Kate"
         },
         {
           message : "Wow,Hi!",
           time : "10:11:02",
           author : "Anny"
         }/*,
         {
           "message" : "How are you?",
           "time" : "10:11:03",
           "author" : "Kate"
         },
         {
           "message" : "Fine! What about u?",
           "time" : "10:11:04",
           "author" : "Anny"
         }*/
       ]
};
