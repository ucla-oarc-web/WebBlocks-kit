$(document).ready(function(){
    
    /**
     * The elements that should be in the mega-menu
     */
    
    var megaMenuItems = [
        { 'title': 'Site Structure', 'items': [
                { 'title': 'Site Header', 'url': 'element_site_header.html' },
                { 'title': 'Site Layouts', 'url': 'pattern_site_layouts.html' },
                { 'title': 'Grids', 'url': 'pattern_grids.html' }
        ]},
        { 'title': 'Page Elements', 'items': [
                { 'title': 'Messages', 'url': 'element_messages.html' },
                { 'title': 'Buttons', 'url': 'element_buttons.html' },
                { 'title': 'Badges', 'url': 'element_badges.html' }
        ]},
        { 'title': 'Patterns', 'items': [
                { 'title': 'Site Layouts', 'url': 'pattern_site_layouts.html' },
                { 'title': 'Grouping Text', 'url': 'pattern_text.html' },
                { 'title': 'Quicklinks Box', 'url': 'pattern_quicklinks.html' },
                { 'title': 'Tabbed Sections', 'url': 'pattern_tabs.html' }
        ]},
        { 'title': 'Foundation', 'items': [
                { 'title': 'Colors', 'url': 'foundation_colors.html' },
                { 'title': 'Text', 'url': 'foundation_text.html' }
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
                    
                if(this.subtitle){
                    $inner_a.append('<br><small><em class="text-neutral">'+this.subtitle+'</em></small>')
                }
                $inner_ul.append($inner_li.append($inner_a));
            });
            $li.append($inner_ul);
        }
            
        $ul.append($li);
    })
    $('header.site:not(main header) nav.mega').append($ul);
    
    WebBlocks.navMegaMenu.call($('header.site'));
    
    $('head').append('<link rel="stylesheet" href="_core/styles.css">')
             .append('<script type="text/javascript" src="_core/formattedSection.js"></script>')
             .append('<script type="text/javascript" src="_core/prettify/prettify.js"></script>')
             .append('<link rel="stylesheet" href="_core/prettify/prettify.css">');
     
    prettyPrint();
    
})