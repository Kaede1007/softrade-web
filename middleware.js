export const config = {
  matcher: ["/(.*)"],
};

export default function middleware(req) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    // JSなら process.env をそのまま書いてもエラーになりません
    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
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
