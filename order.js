

// productId matches up with product in products
// userId matches up with user in users


//logs foo and bazz products
function productsPurchased(orders, products) {
    return orders.reduce((accum, orderObj) => {
        products.forEach(productObj => {
            if (!accum.includes(productObj.name) && orderObj.productId === productObj.id) {
                accum.push(productObj.name);
            }
        })
        return accum;
    }, [])
}

function topSellingProductByQuantity(orders, products) {
    /*
    when i use {} as accum
    keep reassigning accum.name everytime in the forEach
    just so happens last product is bazz and logs
    need to figure this one out
    intent is to create new objects with unique ids, if accum has it then just add quantity
    */
    const condensedOrders = orders.reduce((accum, orderObj) => {
        products.forEach(productObj => {
            if (orderObj.productId === productObj.id) {
                if (accum.name === productObj.name) {
                    accum.quantity += orderObj.quantity;
                }
                else {
                    accum.name = productObj.name;
                    accum.quantity = orderObj.quantity;
                }
            }
        })
        return accum;
    }, {})
    return condensedOrders.name;
}

    //loop thro orders and products, find match
    //if found push or create a new obj with the match and add qty value
    //once loop is done, then the new arr or obj and iterate through that to find max

//     const condensedOrders = orders.reduce((accum, orderObj) => {
//         for (let key in orderObj) {
//             if (key.hasOwnProperty(key) && !accum.includes(orderObj)) {
                
//             }
//         }
//         return accum;
//     }, [])
//     return condensedOrders;
// }

//logs info on moe and curly
function userWithOrdersMethods (users, orders) {
    return orders.reduce((accum, orderObj) => {
        users.forEach(userObj => {
            if (!accum.includes(userObj.name) && orderObj.userId === userObj.id) {
                accum.push(userObj.name);
            }
        })
        return accum;
    }, [])
}

// console.log(productsPurchased(orders, products)); // logs foo and bazz products

// console.log(topSellingProductByQuantity(orders, products));//logs bazz product

// console.log(usersWithOrders(users, orders));//logs info on moe and curly