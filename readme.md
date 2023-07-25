# Appricot модуль для отображения слайдов

**Модуль обладает 2-мя версиями.** 

Amd - для проектов, использующих node.js

Common - для обычных html страничек.

## Установка

`npm i appricot-slides`

### Использование: 

Amd - скрипт импортирует библиотеку zuck.js из модулей node_modules

Common - требует добавить скрипт в .html: 
 `<script src="https://unpkg.com/zuck.js/dist/zuck.js"></script>`

---

**Необходимо добавить соответствующие стили из папки node_modules**

    <!-- demo styles -->
    <link rel="stylesheet" href="node_modules/appricot-slides/styles/style.css" />

    <!-- lib styles -->
    <link rel="stylesheet" href="node_modules/appricot-slides/styles/zuck.css" />

    <!-- lib skins -->
    <link rel="stylesheet" href="node_modules/appricot-slides/styles/default.css" />

---

 Функция, отображающая слайды называется drawStories (./stories.js). Аргументы json + id на страничке, в котором будут отображаться слайды.


