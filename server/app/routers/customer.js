import Router from "koa-router";

import Customer from "../controller/customer.js";


const router = new Router();

// customer 相关路由
router.get("/", Customer.listCustomers);
router.get("/:id", Customer.showCustomerDetail);
router.post("/", Customer.addCustomer);
router.put("/:id", Customer.updateCustomer);
router.delete("/:id", Customer.deleteCustomer);
router.delete("/", Customer.deleteCustomers);


export default router;