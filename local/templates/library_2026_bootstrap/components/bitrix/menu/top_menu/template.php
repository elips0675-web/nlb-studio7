<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?php if (!empty($arResult)):?>
<ul class="navbar-nav ms-auto mb-2 mb-lg-0">

<?php
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;
?>
	<?php if($arItem["SELECTED"]):
    if ($arItem["LINK"] == "/books/"):?>
		    <li class="nav-item"><a href="<?=$arItem["LINK"]?>" class="nav-link active" aria-current="page"><?=$arItem["TEXT"]?></a></li>
    <?else:?>
        <li class="nav-item"><a href="<?=$arItem["LINK"]?>" class="nav-link active" aria-current="page"><?=$arItem["TEXT"]?></a></li>
    <?endif?>
	<?php else:?>
		<li class="nav-item"><a href="<?=$arItem["LINK"]?>" class="nav-link"><?=$arItem["TEXT"]?></a></li>
	<?php endif?>
	
<?php endforeach?>

</ul>
<?php endif?>
