import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
});

export { handler as GET , handler as POST}










// import GoogleProvider from "next-auth/providers/google";

// // this may be out to date
// const handler =  NextAuth({
//   providers : [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//     })
//   ]
// });

// export { handler as GET , handler as Post}