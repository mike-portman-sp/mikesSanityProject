import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json();
  const type = body?.result?._type;
  const slug = body?.result?.slug?.current;

  if (type === "post") {
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
  } else {
    if (slug) revalidatePath(`/${slug}`);
    revalidatePath("/");
  }

  return NextResponse.json({ revalidated: true, slug });
}

