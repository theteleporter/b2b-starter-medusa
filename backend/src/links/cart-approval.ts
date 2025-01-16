import { defineLink } from "@medusajs/framework/utils";
import ApprovalModule from "../modules/approval";
import CartModule from "@medusajs/medusa/cart";

export default defineLink(
  CartModule.linkable.cart,
  ApprovalModule.linkable.approval
);