var makeFormattedSection = function(element){
    var $element = $(element),
        $section = $(document.createElement('section')),
        $figure = $(document.createElement('figure')).appendTo($section),
        $code = $(document.createElement('pre')).addClass('prettyprint').appendTo($section);
    $element.after($section)
    $figure.append($element);

    updateFormattedSectionCode($section);
}

var updateFormattedSectionCode = function(element){
    var $section = $(element),
        $figure = $section.children('figure'),
        $code = $section.children('pre'),
        $figureClone = $figure.clone();

    $figureClone.find('[id]').each(function(){
        if($(this).attr('id').indexOf('aria-') === 0)
            $(this).attr('id', null)
    })
    $figureClone.find('[aria-labeledby]').each(function(){
        if($(this).attr('aria-labeledby').indexOf('aria-') === 0)
            $(this).attr('aria-labeledby',null)
    })

    $code.html($figureClone.html().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    
    if(typeof prettyPrint !== 'undefined')
        prettyPrint();
}
