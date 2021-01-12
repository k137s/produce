import Service from "./service.js";
import {
    Craft,
    Customer,
    Permission,
    ProduceLine,
    ProductOrder,
    Role,
    Sale,
    Tag,
    User,
    Workshop
} from "../models/index.js";


class CraftService extends Service {}

class CustomerService extends Service {}

class PermissionService extends Service {}

class ProduceLineService extends Service {}

class ProductOrderService extends Service {}

class RoleService extends Service {}

class SaleService extends Service {}

class TagService extends Service {}

class UserService extends Service {
    // 根据用户名查找
    async getUserByName(name) {
        const user = await this.Model.findOne({
            where: {
                username: name
            }
        });
        return user;
    }
}

class WorkshopService extends Service {}

const craftService = new CraftService(Craft);
const customerService = new CustomerService(Customer);
const permissionService = new PermissionService(Permission);
const produceLineService = new ProduceLineService(ProduceLine);
const productOrderService = new ProductOrderService(ProductOrder);
const roleService = new RoleService(Role);
const saleService = new SaleService(Sale);
const tagService = new TagService(Tag);
const userService = new UserService(User);
const workshopService = new WorkshopService(Workshop);

export {
    craftService,
    customerService,
    permissionService,
    produceLineService,
    productOrderService,
    roleService,
    saleService,
    tagService,
    userService,
    workshopService
}