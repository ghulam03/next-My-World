import { getSession } from "next-auth/react";

export default async function isAuthHandle() {
  const session = await getSession();
  // console.log(session,"session")
  // console.log(session.user.email,"session")
  return !!(session);
}

