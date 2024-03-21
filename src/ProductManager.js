

export class ProductManager {
    
    constructor() {
        this.product = [];
    }

    CreateProduct(products) {
        const newProduct = {
            id: this.GetId(),
            title: products.title ?? "Sin titulo",
            description: products.description ?? "Sin descripcion",
            code: products.code ?? "Sin codigo",
            price: products.price ?? "Sin precio"
        };
        
        this.product.push(newProduct);

        return "Producto Ingresado correctamente!";
    }

    GetAllProduct() {
        return this.product;
    }

    GetId() {
        const productsLength = this.product.length;
        if(usersLength > 0) {
            return parseInt(this.product[productsLength - 1].id + 1);
        }

        return 1;
    }
}