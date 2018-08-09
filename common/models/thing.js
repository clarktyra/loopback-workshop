'use strict';

module.exports = function(Thing) {
  Thing.disableRemoteMethod('delete', true);
};
