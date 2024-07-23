const products = [
    {
        'id': 'fc-1888',
        'name': 'do hicky',
        'averageRating': 4.5
    },
    {
        'id': 'fc-2050',
        'name': 'go-go gadjit ',
        'averageRating': 4.7
    },
    {
        'id': 'fs-1987',
        'name': 'time mechine',
        'averageRating': 3.5
    },
    {
        'id': 'ac-2000',
        'name': 'flux capacitor',
        'averageRating': 3.9
    },
    {
        'id': 'jj-1969',
        'name': 'smart phone',
        'averageRating': 5.0
    }
];

const productName = document.querySelector('#product-name');

products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.id;
    option.innerHTML = product.name;
    productName.appendChild(option);
});
