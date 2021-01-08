import {
    Customer
} from "../models/index.js";
import {
    CustomerService
} from "../service/index.js";
import Controller from "./controller.js";


// 工艺操作控制
export default class CustomerController {
    static async listCustomers(ctx) {
        const customers = await Controller.listObjects(ctx, CustomerService, Customer);
        ctx.body = customers;
    }

    static async showCustomerDetail(ctx) {
        const customer = await Controller.showObjectDetail(ctx, CustomerService, Customer);
        ctx.body = customer;
    }

    static async addCustomer(ctx) {
        const customer = await CustomerService.getObjectByPk(Customer, ctx.params.id);
        customer = await Controller.addObject(ctx, CustomerService, Customer, customer);
        ctx.body = customer;
    }

    static async updateCustomer(ctx) {
        const customer = await Controller.updateObject(ctx, CustomerService, Customer);
        ctx.body = customer;
    }

    static async deleteCustomer(ctx) {
        await Controller.deleteObject(ctx, CustomerService, Customer);
    }

    static async deleteCustomers(ctx) {
        await Controller.deleteObjects(ctx, CustomerService, Customer);
    }
}