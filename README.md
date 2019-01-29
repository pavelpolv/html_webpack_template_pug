# Html Webpack Template Pug
### Чистый Pug шаблон для быстрого старта

Данный шаблон позволяет быстро начать разработку с использованием современных инструментов. Пакет не содержит сторонних Java Script библиотек или HTML фреймворков и служит отправной точкой для Вашего приложения. Вы можете сами подключить необходимые пакеты удобным для Вас способом. Данный пакет не декларирует структуру проекта.

### Что включено
[webpack-npm]: https://img.shields.io/npm/v/webpack.svg
[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg
[pug-npm]: https://img.shields.io/npm/v/pug-loader.svg
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg

|Name|Status|Description|
|:--:|:----:|:----------|
|<a href="https://github.com/webpack/webpack"><img width="48" height="48" title="webpack" src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg"></a>|![webpack-npm]|Один из самых мощных и гибких инструментов для сборки frontend|
|<a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>|![babel-npm]|Babel.JS – это транспайлер, переписывающий код на ES-2015 и выше в код на предыдущем стандарте ES5.|
|<a href="https://github.com/pugjs/pug-loader"><img width="48" height="48" src="https://cdn.rawgit.com/pugjs/pug-logo/master/SVG/pug-final-logo-_-colour-128.svg"></a>|![pug-npm]|Pug — это шаблонизатор и html-препроцессор, написанный на javascript для node.js. |
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|Чтение и сборка a SASS/SCSS файлов|

## Стартуем

##### Склонируйте проект:

```bash
$ git clone https://github.com/pavelpolv/html_webpack_template_pug.git
$ cd <project-name>
```
##### Настройка
Добавте ваши `.pug` файлы в массив ```pages``` в файле `config/pages.js`


##### Запуск проекта
Выполните сценарии приведенные ниже `yarn run <script>` или `npm run <script>`.

| Команды        | Описание                                                           |
|----------------|--------------------------------------------------------------------|
| start          | Старт HMR ; доступен по адресу `localhost:9001`                    |
| dev            | Сборка ресурсов в режиме development в директории `~/dist`         |
| build          | Сборка ресурсов для продакшн в директории `~/dist`                 |


## Лицензия
[MIT license](https://opensource.org/licenses/MIT).

