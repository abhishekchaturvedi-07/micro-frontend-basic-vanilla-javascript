import faker from 'faker';
// import('./style.css')

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    
    el.innerHTML = cartText;

    
}

if(process.env.NODE_ENV === 'development')
    {
        const el = document.querySelector('#cartContainer')
        if(el){
            mount(el)
        }
    }
    
export { mount }
