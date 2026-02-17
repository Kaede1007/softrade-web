export const config = {
  matcher: ["/(.*)"],
};

export default function middleware(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    // (process as any) と書くことで、エラーを回避します
    if (
      user === (process as any).env.BASIC_AUTH_USER &&
      pwd === (process as any).env.BASIC_AUTH_PASSWORD
    ) {
      return new Response(null, {
        status: 200,
        headers: { "x-middleware-next": "1" },
      });
    }
  }

  return new Response("Auth Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
