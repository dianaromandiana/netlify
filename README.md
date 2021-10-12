
[Pull request 1](https://github.com/dianaromandiana/middle.messenger.praktikum.yandex/pull/1)
[Pull request 2](https://github.com/dianaromandiana/middle.messenger.praktikum.yandex/pull/2)
[Pull request 3](https://github.com/dianaromandiana/middle.messenger.praktikum.yandex/pull/3)


https://github.com/dianaromandiana/netlify/pull/14#issue-1021950143

https://github.com/dianaromandiana/netlify/pull/14

*Готов ли проект к использованию?
По заданию спринта 1.

Нарисованы стили,формочки.
* Что ещё сделано по функционалу
Работают переходы по всем ссылкам(Change info,Change avatar,Cancel и т.д) и кнопкам (LOGIN,Create an account (на форме login),
LOGIN OUT,Profile(в самом чате Chat), CANCEL,SIGN UP (на форме регистрации sing up)
Так же выбор картинки на форме "Change avatar" в /avataredit.

Реализованы методы пустышки для кнопок
save (в profile.hbs,avaedit.hbs);
find, +, -, send (в dashboardChat.hbs).
как я понимаю это и пока не нужно было, можно сделать во 2ом спринте).

Использовала Helpers в чате, для сообщений чата и для списка чатов.

Основное приложение запускается через файл index.js на 3000ом порту (http://localhost:3000);
Запуск самого приложения из терминала командой node index.js.

По структуре проекта:
в папке public/app - лежит уже не актуальный код!

в папке public/assets/css - лежит все стили.
в папке public/assets/img - лежит все картинки.
в папке public/js - лежат внешние js файлы нужные для соответстующих шаблонизатороров.
в папке views - шаблонизаторы:
avataredit-редактировать аву
dashboardChat-сам чат
edit-редактировать профиль
login-главная страница и логин
profile-профиль
singup-регестрация


*ссылка на netlify
https://goofy-wiles-325126.netlify.app/

*ссылка на figma
https://www.figma.com/file/o2UHTKtKGLe0ww6Lbxr2ta/Hybrid-Theory-v2
https://www.figma.com/file/QQBjSsLqZalesmpYZ6HF1A/Hybrid-Theory-v1


package.json - зависимости и команды,скрипты

*посмотреть формы 404 и 500(стили хромают,доделю во 2ом спринте) след. образом
cd 'path где лежит проект'\netlify\public\app\error\404
>parcel 404.html
cd 'path где лежит проект'\netlify\public\app\error\500
>parcel 500.html
