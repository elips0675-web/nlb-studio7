# Документация по настройке демо-админки

Этот документ описывает шаги, предпринятые для исправления и запуска демо-админки.

## Проблема

Изначально проект не собирался из-за конфликта зависимостей. Пакеты `@payloadcms/bundler-webpack`, `@payloadcms/db-mongodb` и `@payloadcms/richtext-slate` требовали `payload` версии `^2.0.0`, в то время как в проекте была установлена версия `1.6.26`.

## Решение

1.  **Обновление зависимостей:**
    *   Я вручную отредактировал файл `admin-demo/package.json`, чтобы обновить `payload` и связанные с ним пакеты до совместимых версий.
    *   `payload` был обновлен до `^2.0.0`.
    *   Пакеты `@payloadcms/*` были оставлены на версии `^1.0.0`, так как они совместимы с `payload@2.x`.
    *   После редактирования `package.json` я запустил `npm install` в папке `admin-demo`, чтобы установить обновленные зависимости.

2.  **Сборка проекта:**
    *   После успешной установки зависимостей я запустил команду `npm run build --prefix admin-demo`, которая успешно собрала проект.

3.  **Развертывание:**
    *   Попытка развернуть проект с помощью `classic_firebase_hosting_deploy` не удалась, так как этот инструмент не поддерживает приложения с серверной частью.
    *   **Рекомендация:** для развертывания подобных приложений используйте **Firebase App Hosting**.

## Как войти в админку

При первом запуске приложения автоматически создается пользователь-администратор. Используйте следующие данные для входа:

*   **Email:** `dev@payloadcms.com`
*   **Пароль:** `test`

Чтобы запустить приложение в режиме разработки, выполните команду:

```bash
npm run dev --prefix admin-demo
```

## Создание нового шаблона Битрикс с Bootstrap

Это классический и самый надежный способ создания темы для «1С-Битрикс: Управление сайтом». Bootstrap идеально подходит для быстрой разработки адаптивных сайтов благодаря своей готовой сетке и компонентам.

### Шаг 1: Создание структуры папок и файлов

1.  Перейдите в папку `/local/templates/` вашего проекта. Это лучшее место для кастомных шаблонов, так как оно не затрагивается обновлениями системы.

2.  Создайте новую папку для вашего шаблона. Назовем ее `bootstrap_template`.

3.  Внутри `/local/templates/bootstrap_template/` создайте следующие файлы:
    *   `description.php`: Содержит название и описание шаблона для админ-панели Битрикс.
    *   `header.php`: Верхняя часть HTML-разметки, включая `<head>` и шапку сайта.
    *   `footer.php`: Нижняя часть HTML-разметки, включая подвал и подключение скриптов.
    *   `styles.css`: Файл для стилей, который Битрикс подключает по умолчанию.
    *   `template_styles.css`: Наш основной файл для кастомных стилей. Мы будем подключать его вручную.

### Шаг 2: Наполнение базовых файлов

**1. `description.php`**

Добавьте этот код, чтобы ваш шаблон появился в списке доступных:

```php
<?php
$arTemplate = array(
    "NAME" => "Новый шаблон на Bootstrap",
    "DESCRIPTION" => "Шаблон сайта с использованием Bootstrap 5"
);
?>
```

**2. `header.php`**

Это основа вашего сайта. Скопируйте этот код, он включает все необходимое для старта.

```php
<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Page\Asset;
?>
<!doctype html>
<html lang="<?= LANGUAGE_ID; ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?$APPLICATION->ShowTitle()?></title>

    <?
    // Подключение Bootstrap 5 через CDN
    Asset::getInstance()->addString('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    
    // Подключение наших кастомных стилей
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/template_styles.css");
    
    // Вывод мета-тегов, стилей и скриптов, добавленных через API Битрикса
    $APPLICATION->ShowHead();
    ?>
</head>
<body>

<?
// Отображение панели администратора
$APPLICATION->ShowPanel();
?>

<header class="p-3 mb-3 border-bottom">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                Логотип
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">Главная</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Каталог</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">О нас</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Контакты</a></li>
            </ul>
        </div>
    </div>
</header>

<main class="container">
```

**3. `footer.php`**

Этот файл закрывает основные теги и подключает JavaScript.

```php
</main> <!-- Закрываем .container из header.php -->

<footer class="py-3 my-4">
    <div class="container">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li><a href="#" class="nav-link px-2 text-muted">Главная</a></li>
            <li><a href="#" class="nav-link px-2 text-muted">Каталог</a></li>
            <li><a href="#" class="nav-link px-2 text-muted">О нас</a></li>
        </ul>
        <p class="text-center text-muted">© <?= date("Y"); ?> Название компании</p>
    </div>
</footer>

<?
// Подключение JS Bootstrap 5 через CDN
Asset::getInstance()->addString('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
?>

</body>
</html>
```

### Шаг 3: Применение шаблона

1.  Зайдите в админ-панель Битрикс.
2.  Перейдите в **Настройки → Настройки продукта → Сайты → Список сайтов**.
3.  Откройте настройки вашего сайта (например, `s1`).
4.  В поле **"Шаблон сайта"** найдите и выберите ваш "Новый шаблон на Bootstrap".
5.  Сохраните изменения.

### Шаг 4: Как работать дальше

Теперь у вас есть рабочая основа. 

*   **Контент страниц** будет автоматически выводиться между `header.php` и `footer.php` (внутри тега `<main class="container">`).
*   **Компоненты Битрикс** (новости, каталоги, формы) размещаются на страницах через визуальный редактор или в коде.
*   Чтобы стилизовать компоненты, копируйте их шаблоны в свою папку `/local/templates/bootstrap_template/components/` и смело используйте в них HTML-теги с классами Bootstrap.
*   Ваши собственные, уникальные стили добавляйте в файл `template_styles.css`.
