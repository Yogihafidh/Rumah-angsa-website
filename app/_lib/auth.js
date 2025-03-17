import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import { tr } from "date-fns/locale";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [Google],
  // Callback auth middleware. Callbacks only call whenever user accesses accounts route in middleware configuration
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // convert any value to boolean
    },
    async signIn({ user, account, profile }) {
      try {
        // Get guest data for check if user already exists. if user already exists this function return null
        const existingGuest = await getGuest(user.email);

        // If user doesn't exist, create a new one
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      // get guest base on new session
      const guest = await getGuest(session.user.email);

      // set guestId in session
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    // Set login page
    signIn: "/login",
  },
});
