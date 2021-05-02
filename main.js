Vue.component('product', {
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <=10 && inventory > 0">almost Out of Stock</p>
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
            <span v-show="onSale">On Sale</span>
            <p>{{ sale }}</p>
            <p>Shipping: {{ shipping }}</p>
            <a :href="link" target="_blank">More products like that</a>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)">
            </div>

            <ul>
                <li v-for="size in sizes">{{ size }}</li>
            </ul>
            <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button @click="removeFromCart">Remove to Cart</button>
            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
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
            cart: 0,
            onSale: true
        }
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
        },
        sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' are on sale'
            }

            return this.brand + ' ' + this.product + ' are not on sale'

        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: "#app",
    data:{
        premium: false
    }
    
});