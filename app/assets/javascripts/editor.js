$E = {
  initialize: function(args) {
    args = args || {}
    args['textarea'] = args['textarea'] || 'text-input'
    $E.textarea = $('#'+args['textarea'])
    console.log($E.textarea)
  },
  is_editing: function() {
    return ($E.textarea[0].selectionStart == 0 && $E.textarea[0].selectionEnd == 0)
  },
  // wraps currently selected text in textarea with strings a and b
  wrap: function(a,b) {
    var len = $E.textarea.val().length;
    var start = $E.textarea[0].selectionStart;
    var end = $E.textarea[0].selectionEnd;
    var sel = $E.textarea.val().substring(start, end);
    var replace = a + sel + b;
    $E.textarea.val($E.textarea.val().substring(0,start) + replace + $E.textarea.val().substring(end,len));
  },
  bold: function() {
    $E.wrap('**','**')
  },
  italic: function() {
    $E.wrap('__','__')
  },
  link: function(uri) {
    uri = uri || prompt('Enter a URL')
    $E.wrap('[',']('+uri+')')
  },
  image: function(src) {
    src = src || prompt('Enter an image URL')
    $E.wrap('\n![',']('+src+')\n')
  },

  h1: function() {
    $E.wrap('#','')
  },
  h2: function() {
    $E.wrap('##','')
  },
  h3: function() {
    $E.wrap('###','')
  },
  h4: function() {
    $E.wrap('####','')
  },
  h5: function() {
    $E.wrap('#####','')
  },
  h6: function() {
    $E.wrap('######','')
  },
  h7: function() {
    $E.wrap('#######','')
  },
}