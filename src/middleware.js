import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const token = request.cookies.get("nextjs-token")
  console.log(token);

  const dummyUserData = {
    role : "user",
    email : "test@admin"
  }
  let isServicePage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role == 'admin'

  if (isServicePage && !isAdmin) {
    return  NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }