var app = new Vue({
    el: "#app",
    data:{
        brand: "Vue Mastery",
        product: "socks",
        selectedVariant: 0,
        link: "https://www.google.com",
        inventory: 0,
        onSale: false,
        details: ["80% cotton", "20% poliester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ["P", "M", "G"],
        cart: 0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateProduct(index){
            this.selectedVariant = index;
            //console.log(this.selectedVariant);
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});