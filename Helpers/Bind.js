import ProxyFactory from "../Services/ProxyFactory.js";
 
export class Bind {
    
    constructor(model, view, cb, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));
            
        view.update(model);
        
        return proxy;
    }
}

export default Bind;