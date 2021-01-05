import Context from "koa";


// 客户操作控制
export default class CustomerController {
    static async listCustomers(ctx) {
        ctx.body = "ListCustomers controller";
    }

    static async showCustomerDetail(ctx) {
        ctx.body = `ShowCustomerDetail controller with ID = ${ctx.params.id}`;
    }

    static async updateCustomer(ctx) {
        ctx.body = `UpdateCustomer controller with ID = ${ctx.params.id}`;
    }

    static async deleteCustomer(ctx) {
        ctx.body = `DeleteCustomer controller with ID = ${ctx.params.id}`;
    }
}