import { EntityRepository, Repository } from "typeorm";
import { Media } from "./entities/media.entity";

@EntityRepository(Media)
export class MediaRepository extends Repository<Media> {

//   public async createMedia(
//     createProductDto: CreateProductDTO,
//   ): Promise<Media> {
//     const { name, description, price } = createProductDto;

//     const product = new Product();
//     product.name = name;
//     product.description = description;
//     product.price = price;

//     await product.save();
//     return product;
//   }

//   public async editProduct(
//     createProductDto: CreateProductDTO,
//     editedProduct: Product,
//   ): Promise<Product> {
//     const { name, description, price } = createProductDto;

//     editedProduct.name = name;
//     editedProduct.description = description;
//     editedProduct.price = price;
//     await editedProduct.save();

//     return editedProduct;
//   }
}