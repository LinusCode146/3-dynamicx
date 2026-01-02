import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
    secret: process.env.AUTH_SECRET!,
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-Mail", type: "email", placeholder: "mail@beispiel.de" },
                password: { label: "Passwort", type: "password" }
            },
            async authorize(credentials) {
                console.log("Login-Versuch für:", credentials?.email);

                if (!credentials?.email || !credentials?.password) {
                    console.log("Fehlende Credentials");
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                    include: { accounts: true }
                });

                console.log("User gefunden:", user ? "Ja" : "Nein");
                console.log("Hat Passwort:", user?.password ? "Ja" : "Nein");

                if (!user) {
                    console.log("Benutzer existiert nicht");
                    return null;
                }

                if (!user.password && user.accounts.length > 0) {
                    console.log("OAuth-Account ohne Passwort");
                    throw new Error("Diese E-Mail ist bereits mit einem anderen Anbieter verknüpft");
                }

                if (!user.password) {
                    console.log("Kein Passwort gesetzt");
                    return null;
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                console.log("Passwort korrekt:", isPasswordValid ? "Ja" : "Nein");

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                };
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt" as const
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            // Beim ersten Login (wenn user vorhanden ist)
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image;
            }

            // Bei GitHub OAuth - hole Email falls nicht vorhanden
            if (account?.provider === "github" && profile) {
                token.email = profile.email || token.email;
            }

            return token;
        },
        async session({ session, token }) {
            // Übertrage die Daten vom JWT Token zur Session
            if (session.user) {
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.image = token.picture as string;
            }
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin',
    }
}

export default NextAuth(authOptions);