$(document).ready(function(){
    
    /**
     * The elements that should be in the mega-menu
     */
    
    var megaMenuItems = [
        { 'title': 'Elements', 'items': [
                { 'title': 'Headers', 'url': 'elements_headers.html' },
                { 'title': 'Messages', 'url': 'elements_messages.html' }
        ]},
        { 'title': 'Patterns', 'items': [
                { 'title': 'Quicklinks', 'url': 'patterns_quicklinks.html' }
        ]}
    ];
    
    /**
     * Populate the mega-menu per megaMenuItems
     */
    var $ul = $(document.createElement('ul'));
    $.each(megaMenuItems, function(){
        var $li = $(document.createElement('li')),
            $header = $(document.createElement(this.items ? 'h1' : 'span')),
            $a = $(document.createElement('a')).html(this.title);
            
        if(this.url)
            $a.attr('href',this.url);
        
        $li.append($header.append($a));
        
        if(this.items){
            var $inner_ul = $(document.createElement('ul'));
            $.each(this.items, function(){
                var $inner_li = $(document.createElement('li')),
                    $inner_a = $(document.createElement('a')).attr('href', this.url).html(this.title)
                $inner_ul.append($inner_li.append($inner_a));
            });
            $li.append($inner_ul);
        }
            
        $ul.append($li);
    })
    $('header.site nav.mega').append($ul);
    
    WebBlocks.navMegaMenu.call($('header.site'));
    
    $('head').append('<link rel="stylesheet" href="_core/styles.css">')
             .append('<script type="text/javascript" src="_core/formattedSection.js"></script>')
             .append('<script type="text/javascript" src="_core/prettify/prettify.js"></script>')
             .append('<link rel="stylesheet" href="_core/prettify/prettify.css">');
     
    prettyPrint();
    
})