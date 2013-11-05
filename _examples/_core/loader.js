$(document).ready(function(){
    
    /**
     * The elements that should be in the mega-menu
     */
    
    var megaMenuItems = [
        { 'title': 'Messages', 'url': 'messages.html' }
    ];
    
    /**
     * Populate the mega-menu per megaMenuItems
     */
    var $ul = $(document.createElement('ul'));
    $.each(megaMenuItems, function(){
        var $li = $(document.createElement('li')),
            $header = $(document.createElement(this.children ? 'h1' : 'span')).html(this.title);
        $li.append($(document.createElement('a')).attr('href',this.url).html($header))
        $ul.append($li);
    })
    $('header.site nav.mega').append($ul);
    
    $('head').append('<link rel="stylesheet" href="_core/styles.css">')
    
    $('head').append('<script type="text/javascript" src="_core/prettify/prettify.js"></script>')
    $('head').append('<link rel="stylesheet" href="_core/prettify/prettify.css">')
    prettyPrint();
    
})