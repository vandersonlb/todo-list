class ProxyFactory {

  static create(object, methods, run) {
    return new Proxy(object, {

      get: function(target, prop, receiver) {
        if(methods.includes(prop) && target[prop] instanceof Function){ 
          return function(){
            // console.log(`Método ${prop} interceptado em ${target.constructor.name}`)
            let Return = Reflect.apply(target[prop], target, arguments)
            run(prop);
            return Return
          } 
        }
        return Reflect.get(target, prop, receiver);
      }      
    });
  }
}

export default ProxyFactory;
