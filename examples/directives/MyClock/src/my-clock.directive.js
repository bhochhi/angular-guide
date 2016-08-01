
angular.directives('myClock',function(){
'use strict';

return {
  restrict:'EA',
  controller:'myClockController',
  template:'{{currentTime}}'
};
});
