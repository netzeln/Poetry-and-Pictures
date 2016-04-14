import Ember from 'ember';

export function poemFormatter(params/*, hash*/) {

  var formatted = Ember.String.htmlSafe('<div><p>' + params[0].lineOne + '<br>   ' + params[0].lineTwo + '<br>      ' + params[0].lineThree + '</p></div>');
  return formatted;
}

export default Ember.Helper.helper(poemFormatter);
