export {default} from 'next-auth/middleware'

export const config = {
  // * : zero or more parameters
  // * : one or more parameter
  // ? : zero or one
  matcher: ['/dashboard/:path*']
}