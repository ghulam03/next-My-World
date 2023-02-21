import ClothForm from "../../../components/my-account/cloth/ClothForm";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AddCloth() {

  return (
    <>
      <ClothForm />
    </>
  );
}
