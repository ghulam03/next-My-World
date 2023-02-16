import { getSession } from "next-auth/react";

export default async function getEmailId() {
  const session = await getSession();
//   console.log(session, "session");
//   console.log(session.user.email, "session");
  

  if (!session) {
    return "no user is login";
  }
  const emailId = session.user.email;

  return emailId;
}
