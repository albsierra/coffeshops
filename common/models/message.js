module.exports = function(Message) {
  Message.greet = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hola';
      cb(null, 'El emisor dice ' + msg + ' al receptor');
    });
  };
};
