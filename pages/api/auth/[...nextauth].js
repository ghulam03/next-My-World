import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import prisma from "../../../prisma/prisma";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "emailID" },
        password: { label: "Password", type: "password" ,placeholder: "password"},
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        await prisma.$connect();
        const result = await prisma.user.findUnique({
          where: {
            email: credentials.username
          }
          // select: {
          //   password: true,
          //   email: true,
          //   id:true,
          //   name:true,
          //   age:true,
          // },
        });
        console.log(result,"login")
        if (result.password===credentials.password) {
          return result;
        } else {
          return null;
        }

       
      },
    }),
  ],
});
