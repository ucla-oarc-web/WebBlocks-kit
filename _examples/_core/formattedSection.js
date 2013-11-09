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
        $code = $section.children('pre');
    console.log($section)
    $code.html($figure.html().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    if(typeof prettyPrint !== 'undefined')
        prettyPrint();
}