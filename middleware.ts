import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// 这行代码的作用是创建一个中间件，这个中间件用于在路由中进行身份验证。当用户访问受保护的页面时，这个中间件会被调用，它会检查用户的身份验证状态，并根据情况允许或拒绝用户访问。
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher 属性指定了哪些路由应该受到此中间件的保护
  //正则表达式 /((?!api|_next/static|_next/image|.*\\.png$).*) 
  // 匹配除了以 api、_next/static、_next/image 或以 .png 结尾的路由之外的所有路由。
  // 也就是说，只有不在这些特定路径下的路由才会受到此中间件的保护。
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};