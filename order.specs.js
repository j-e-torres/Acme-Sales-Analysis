const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
];

const users = [
{
    id: 1,
    name: 'moe'
},
{
    id: 2,
    name: 'larry'
},
{
    id: 3,
    name: 'curly'
}
];

const orders = [
    {
        id: 1,
        productId: 1,
        quantity: 3,
        userId: 1
    },
    {
        id: 2,
        productId: 1,
        quantity: 7,
        userId: 1
    },
    {
        id: 3,
        productId: 5,
        quantity: 70,
        userId: 3
    },
    {
        id: 3,
        productId: 5,
        quantity: 1,
        userId: 3
    }
];

describe('productsPurshased', function() {
    it('is a function', function() {
      expect(typeof productsPurchased).toEqual('function');
    });

    it('returns array of products purchased', function () {
        expect(productsPurchased(orders, products)).toEqual(['foo', 'bazz'])
    });

});

describe('topselling function', function () {
    it('is a function', function() {
        expect(typeof topSellingProductByQuantity).toEqual('function');
    })

    it('returns product with highest quantity sold', function() {
        expect(topSellingProductByQuantity(orders, products)).toEqual('bazz');
    })
})

describe('userWithOrdersMethods function', function () {
    it('is a function', function() {
        expect(typeof userWithOrdersMethods).toEqual('function');
    })

    it('returns an array of users that ordered', function () {
        expect(userWithOrdersMethods(users, orders)).toEqual(['moe', 'curly']);
    })
})
