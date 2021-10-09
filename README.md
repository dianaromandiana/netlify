# netlify
основное приложение находится в public.
в папке app - основной код приложения.
в папке assets - картинки и стили (хотелось бы в будущем).
в папке routes - роутинги (не сделала).
в папке views - шаблонизаторы.

запуск порторитов форм происходит из терминала по команде parcel index.html

как пример
cd 'path где лежит проект'\netlifySDF\public\app\auth\login
>parcel login.html
cd 'path где лежит проект'\netlifySDF\public\app\auth\singup
>parcel singup.html

cd 'path где лежит проект'\netlifySDF\public\app\error\404
>parcel 404.html
cd 'path где лежит проект'\netlifySDF\public\app\error\500
>parcel 500.html

cd 'path где лежит проект'\netlifySDF\public\app\main\profile
>parcel profile.html
>parcel edit.html

сам чат
cd 'path где лежит проект'\netlifySDF\public\app\main\dashboard
>parcel dashboardChat.html