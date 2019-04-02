const item = {
  "name": "Biscuits",
  "type": "regular",
  "category": "food",
  "price": 200
}

const applyCoupon = x =>
y => {
  x.price = x.price-(x.price*y/100);
  return x;
};

console.log(applyCoupon(item)(10).price === 180);