# waSlideMenu

jQuery-плагин, который превращает древовидное (иерархическое) структуру в систему прокручивающихся меню.

## Примеры работы

* [JSFiddle](http://jsfiddle.net/7LnSY/)
* [demo-ru.webasyst.com](http://demo-ru.webasyst.com/?set_force_theme=default&theme_hash=fe01ce2a7fbac8fafaed7c982a04e229)

## Использование

Добавьте файл стилей
```html
<link rel="stylesheet" href="/path/to/waslidemenu.css">
```

И js файлы *после* библиотеки jQuery:
```html
<script src="jquery.js" type="text/javascript"></script>
<script src="/path/to/jquery.waslidemenu.js" type="text/javascript"></script>
```

Добавьте немного HTML
```html
```html
<nav id="mymenu">
	<ul>
		<li>
			<a href="#1">Parent</a>
			<ul>
				<li>
                    <a href="#1.1">Child</a>
                    <ul>
                    	<li>
                    		<a href="#">We need to go deeper</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#1.2">Child</a></li>
            </ul>
        </li>
        <li><a href="#2">Parent</a></li>
        <li><a href="#3">Parent</a></li>
    </ul>
</nav>
<script>
    $(document).ready(function() {
        $('#mymenu').waSlideMenu({});
    });
</script>
```

И запускайте плагин

```javascript
$(document).ready(function(){
   $(menu-selector).waSlideMenu({});
});
```

## Опции

### Скорость слайда

```javascript
$('#menu').waSlideMenu({
    slideSpeed: 500
});
```

По умолчанию ```400```.

#### Эффект слайда

```javascript
$('#menu').waSlideMenu({
    slideEasing: 'linear'
});
```

#### Контент для ссылки "Назад"

```javascript
$('#menu').waSlideMenu({
    backLinkContent: 'Take me back, sir.'
});
```

По умолчанию ```Back```.

#### Выбор расположения ссылки назад

```javascript
$('#menu').waSlideMenu({
    backOntTop: true
});
```

По умолчанию ```false```.

#### Класс для "текущего" пункта меню

```javascript
$('#menu').waSlideMenu({
    selectedClass: 'selected-menu'
});
```

По умолчанию ```'selected'```.

#### Селектор контейнера, куда загружать контент "текущего" пункта меню

```javascript
$('#menu').waSlideMenu({
    loadContainer : '#content'
});
```

По умолчанию ```''```, то есть ничего не загружается.

#### Минимальная высота меню

```javascript
$('#menu').waSlideMenu({
    minHeightMenu : 400
});
```

По умолчанию ```0```, то есть высота может быть любой.

#### Автоматическая подстройка под размер меню

```javascript
$('#menu').waSlideMenu({
    autoHeightMenu : true
});
```

По умолчанию ```true```, высота меню подстраивается под высоту текущего подменю.

#### URL исключения (не буду загружаться по ссылкам из меню)

```javascript
$('#menu').waSlideMenu({
    excludeUri : ['/dont-load/', '#pleasedontloadme']
});
```

Адреса ```'/dont-load/'``` и ```'#pleasedontloadme'``` не будут подгружаться в ```loadContainer```. По умолчанию ```['/', '#']```. 

#### Подгружать контент только последних пунктов меню

```javascript
$('#menu').waSlideMenu({
    loadOnlyLatest : true
});
```

По умолчанию ```false```. Если установлено в ```true```, то меню будет прокурчиваться, не загружая ссылки, пока мы не дойдем до крайнего пункта меню.

#### Селектор меню

```javascript
$('#menu').waSlideMenu({
    menuSelector : '.i-am-menu'
});
```

По умолчанию ```'ul'```.

#### Селектор пунктов меню

```javascript
$('#menu').waSlideMenu({
    itemSelector : '.i-am-menu-item'
});
```

По умолчанию ```'li'```.

#### Устанавливать title для страницы

```javascript
$('#menu').waSlideMenu({
    setTitle : true
});
```

По умолчанию ```false```. После загрузки url из пункта меню, устанавливается Title страницы такой же, как и текст ссылки.

#### Скорость прокрутки страницы вверх до "текущего" пункта меню

```javascript
$('#menu').waSlideMenu({
    scrollToTopSpeed : 100
});
```

По умолчанию ```0```. Возникают моменты, когда после слайда к следующему подменю его пункты пропадают из видимой области. В этом случае страница прокрутиться наверх, до выбранного пункта меню.

#### Callbacks

Здесь ```this``` относится к плагину.

##### После инициализации

```javascript
$('#menu').waSlideMenu({
    onInit : function(){
        alert('Here I am!');
    }
});
```

##### После слайда на следующее подменю

```javascript
$('#menu').waSlideMenu({
    onSlideForward : function(){
        alert('I slide forward (deeper)!');
    }
});
```

##### После слайда на меню уровнем выше

```javascript
$('#menu').waSlideMenu({
    onSlideBack : function(){
        alert('I slide back (bubling)!');
    }
});
```

##### После завершения прокрутки

```javascript
$('#menu').waSlideMenu({
    afterSlide : function(){
        alert('Yep! I just slide!!');
    }
});
```

##### После клика на крайнем элементе в дереве меню

```javascript
$('#menu').waSlideMenu({
    onLatestClick : function(){
        alert('Last element clicked: ' + $(this).text());
    }
});
```

Здесь ```this``` - это контекст элемента, на который кликнули.

##### Всегда, незвасимо от результат загрузки URL

```javascript
$('#menu').waSlideMenu({
    afterLoadAlways : function(){
        alert('You URL request just completed!');
    }
});
```

##### После успешной загрузки URL

```javascript
$('#menu').waSlideMenu({
    afterLoadDone : function(){
        alert('Nice URL! 200 OK!');
    }
});
```

##### После провальной загрузки URL

```javascript
$('#menu').waSlideMenu({
    afterLoadFail : function(){
        alert('Bad URL :(');
    }
});
```

#### Event triggers

Так же доступны следующие события ```onInit.waSlideMenu```, ```afterLoadDone.waSlideMenu```, ```afterLoadFail.waSlideMenu```, ```afterLoadAlways.waSlideMenu```.

```javascript
$('#menu').on('onInit.waSlideMenu', function(){
    alert('After INIT waSlideMenu Event');
}).on('afterLoadDone.waSlideMenu', function(){
    alert('After URL load success Event');
}).on('afterLoadFail.waSlideMenu', function(){
    alert('After URL load fails Event');
}).on('afterLoadAlways.waSlideMenu', function(){
    alert('After URL request completed Event');
});
```

### И еще раз

* Не зависит от тегов, главное чтобы меню было вложенным

```html
<nav id="menu">
    <div class="menu">
        <div class="item">
            <a href="#1">1</a>
            <div class="menu">
                <div class="item"><a href="#1.1">1.1</a></div>
                <div class="item"><a href="#1.2">1.2</a></div>
            </div>
        </div>
        <div class="item"><a href="#2">2</a></div>
        <div class="item"><a href="#3">3</a></div>
    </div>
</nav>
<script>
    $('#menu').waSlideMenu({
        menuSelector : '.menu',
        itemSelector : '.item'
    });
</script>
```

* Опции и сallback можно устанваливать после инициализации плагина

```javascript
var slidemenu = $('#menu').waSlideMenu({});
slidemenu.waSlideMenu({
    slideSpeed : 3000, // veeeeeeeery smooooooth
    afterSlide : function(){
        alert('Yeah!!11 This was coooool smoooth sliiide!');
    }
});
```

* На одной странице может быть сколько угодно меню

* Можно всё вернуть как было до инициализации :(

```javascript
$('#menu').waSlideMenu('exec','destroy');
```

## Совместимость

* IE9+
* Google Chrome
* Firefox
* надо еще потестировать...
