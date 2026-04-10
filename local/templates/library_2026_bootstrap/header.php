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
    // Подключение Bootstrap 5
    Asset::getInstance()->addString('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    
    // Подключение кастомных стилей
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/template_styles.css");
    
    $APPLICATION->ShowHead();
    ?>
</head>
<body class="bg-light">

<? $APPLICATION->ShowPanel(); ?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/">Библиотека 2026</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <?$APPLICATION->IncludeComponent(
                "bitrix:menu",
                "top_menu", // Создадим этот шаблон меню позже
                Array(
                    "ALLOW_MULTI_SELECT" => "N",
                    "DELAY" => "N",
                    "MAX_LEVEL" => "1",
                    "MENU_CACHE_GET_VARS" => array("v"),
                    "MENU_CACHE_TIME" => "3600",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "ROOT_MENU_TYPE" => "top", // Укажем тип меню для шапки
                    "USE_EXT" => "N"
                )
            );?>
        </div>
    </div>
</nav>

<main class="container mt-4">
    <h1 class="mb-4"><?= $APPLICATION->GetTitle(false) ?></h1>
