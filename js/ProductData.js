module.exports = {
    init : function (){
        localStorage.clear();
        localStorage.setItem('product',JSON.stringify([
            {
                id: '1',
                name: 'Amul Milk',
                image: 'milk.jpg',
                decription: 'Milk product',
                price : 50,
                inventory: 2
            },
            {
                id: '2',
                name: 'Beer',
                image: 'bread.png',
                decription: 'Milk product',
                price : 50,
                inventory: 2
            },
            {
                id: '3',
                name: 'Amul Butter',
                image: 'butter.jpg',
                decription: 'Milk product',
                price : 50,
                inventory: 4
            }
        ]));
    }
};