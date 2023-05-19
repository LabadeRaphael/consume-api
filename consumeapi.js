fetch('https://dummyjson.com/products')
.then(res=> res.json())
.then(json =>{
  console.log(json.products);
  console.log(json.products[0].category);
  document.getElementById("iphone9-header").innerText = `${json.products[0].title}`;
  document.getElementById("iphone9").src = `${json.products[0].images[2]}`;
  document.getElementById("iphone9-Description").innerText = `${json.products[0].description}`;
  document.getElementById("iphone9-Price").innerText = `${json.products[0].price}`;
  document.getElementById("iphone9-Discount").innerText = `${json.products[0].discountPercentage}`;

  document.getElementById("iPhoneX-header").innerText = `${json.products[1].title}`;
  document.getElementById("iPhone x").src = `${json.products[1].images[1]}`;
  document.getElementById("iPhoneX-Description").innerText = `${json.products[1].description.slice(0,21)}`;
  document.getElementById("iphoneX-Price").innerText = `${json.products[1].price}`;
  document.getElementById("iphoneX-Discount").innerText = `${json.products[1].discountPercentage}`;
  document.getElementById("carousel-iPhoneX").src = `${json.products[1].images[0]}`;


  document.getElementById("Samsung Universe 9-header").innerText = `${json.products[2].title}`;
  document.getElementById("Samsung Universe 9").src = `${json.products[2].images[0]}`;
  document.getElementById("Samsung Universe 9-Description").innerText = `${json.products[2].description.slice(0,32)}...`;
  document.getElementById("Samsung Universe 9-Price").innerText = `${json.products[2].price}`;
  document.getElementById("Samsung Universe 9-Discount").innerText = `${json.products[2].discountPercentage}`;


  document.getElementById("OPPOF19-header").innerText = `${json.products[3].title}`;
  document.getElementById("OPPOF19").src = `${json.products[3].images[1]}`;
  document.getElementById("OPPOF19-Description").innerText = `${json.products[3].description}`;
  document.getElementById("OPPOF19-Price").innerText = `${json.products[3].price}`;
  document.getElementById("OPPOF19-Discount").innerText = `${json.products[3].discountPercentage}`;
  document.getElementById("carousel-OPPOF19").src = `${json.products[3].images[2]}`;
  
  document.getElementById("MacBook-Pro-header").innerText = `${json.products[5].title}`;
  document.getElementById("MacBook-Pro").src = `${json.products[5].images[0]}`;
  document.getElementById("MacBook-Pro-Description").innerText = `${json.products[5].description.slice(0,67)}`;
  document.getElementById("MacBook-Pro-Price").innerText = `${json.products[5].price}`;
  document.getElementById("MacBook-Pro-Discount").innerText = `${json.products[5].discountPercentage}`;
  document.getElementById("carousel-MacBook-Pro").src = `${json.products[5].images[1]}`;

  document.getElementById("Huawei-P30-header").innerText = `${json.products[4].title}`;
  document.getElementById("Huawei-P30").src = `${json.products[4].images[0]}`;
  document.getElementById("Huawei-P30-Description").innerText = `${json.products[4].description.slice(0,27)}`;
  document.getElementById("Huawei-P30-Price").innerText = `${json.products[4].price}`;
  document.getElementById("Huawei-P30-Discount").innerText = `${json.products[4].discountPercentage}`;
  document.getElementById("carousel-Huawei-P30").src = `${json.products[4].thumbnail}`;

  document.getElementById("Samsung-Galaxy-Book-header").innerText = `${json.products[6].title}`;
  document.getElementById("Samsung-Galaxy-Book").src = `${json.products[6].images[0]}`;
  document.getElementById("Samsung-Galaxy-Book-Description").innerText = `${json.products[6].description.slice(0,29)}`;
  document.getElementById("Samsung-Galaxy-Book-Price").innerText = `${json.products[6].price}`;
  document.getElementById("Samsung-Galaxy-Book-Discount").innerText = `${json.products[6].discountPercentage}`;
  document.getElementById("carousel-Samsung-Galaxy-Book").src = `${json.products[6].images[1]}`;
})