class NotAuth extends Error {
    constructor(message, ...rest) {
      super(...rest);
      this.status = 401;
      this.message = message;
    }
  }
  
  export default NotAuth;