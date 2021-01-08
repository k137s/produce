import Service from "./service.js";


class CraftService extends Service {}

class CustomerService extends Service {}

class PermissionService extends Service {}

class ProduceLineService extends Service {}

class ProduceOrderService extends Service {}

class RoleService extends Service {}

class SaleService extends Service {}

class TagService extends Service {}

class UserService extends Service {
    // 根据用户名查找
    static async getUserByName(User, name) {
        const user = await User.findOne({
            where: {
                username: name
            }
        });
        return user;
    }
}

class WorkshopService extends Service {}

export {
    CraftService,
    CustomerService,
    PermissionService,
    ProduceLineService,
    ProduceOrderService,
    RoleService,
    SaleService,
    TagService,
    UserService,
    WorkshopService
}