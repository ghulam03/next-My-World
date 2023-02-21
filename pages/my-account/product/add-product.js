import ProductForm from "../../../components/my-account/product/ProductForm";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AddProduct() {
  

  return (
    <>
      <ProductForm />
    </>
  );
}
