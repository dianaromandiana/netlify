
(function (){
/*$.ajax({
url: '/data.json'
}).done(function(data){

var message_container= document.getElementById('message_container');
//var json= JSON.parse(data);
var source = document.getElementById("message_list").innerHTML;
var template = Handlebars.compile(source);
var html = template(dataMessage); // template(json);

message_container.append(html);
})*/
})()

var dataMessage={
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

