var app = new Vue({
    el: "#app",
    data:{
        product: "socks",
        image: "assets/vmSocks-blue-onWhite.jpg",
        link: "https://www.google.com",
        inventory: 100,
        onSale: false,
        details: ["80% cotton", "20% poliester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["P", "M", "G"],
        cart: 0
    }
});