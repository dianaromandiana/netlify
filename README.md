#netlify

[Sprint 1](https://github.com/dianaromandiana/netlify/pull/10#issue-754576639)

[Pull request](https://github.com/dianaromandiana/netlify/pull/10#issue-754576639)

#Готов ли проект к использованию?
нет. Не настроенны связи(переходы) между формами.

основное приложение находится в public.
в папке app - основной код приложения.
auth - всё что связано с авторизацией
error - ошибки
main - сам чат, и профиль

в папке assets - картинки и стили (хотелось бы в будущем перенести их сюда).
в папке routes - роутинги (не сделала).
в папке views - шаблонизаторы.

ссылка на netlify
https://goofy-wiles-325126.netlify.app/

запуск самого приложения из терминала командой node index.js

запуск порторитов форм происходит из терминала по команде parcel index.html
как пример
cd 'path где лежит проект'\netlify\public\app\auth\login
>parcel login.html
cd 'path где лежит проект'\netlify\public\app\auth\singup
>parcel singup.html

cd 'path где лежит проект'\netlify\public\app\error\404
>parcel 404.html
cd 'path где лежит проект'\netlify\public\app\error\500
>parcel 500.html

cd 'path где лежит проект'\netlify\public\app\main\profile
>parcel profile.html
>parcel edit.html

сам чат
cd 'path где лежит проект'\netlify\public\app\main\dashboard
>parcel dashboardChat.html