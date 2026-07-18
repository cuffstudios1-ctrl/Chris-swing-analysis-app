import { NextResponse } from 'next/server';
import { analyseSwing } from '@/lib/ai';
import { uploadSchema } from '@/lib/schemas';

const seen = new Set<string>();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const key = body.swingId || JSON.stringify(body.frames?.map((f: any) => f.id));

    if (seen.has(key)) {
      return NextResponse.json(
        { error: 'Analysis already submitted. Retry deliberately from the report screen.' },
        { status: 409 },
      );
    }

    seen.add(key);

    const context = uploadSchema.partial().parse(body);
    const analysis = await analyseSwing({
      frames: body.frames ?? [],
      cameraAngle: context.cameraAngle ?? 'down-the-line',
      club: context.club ?? 'Other',
      shotResult: context.shotResult,
      ballFlight: context.ballFlight,
      notes: context.notes,
    });

    return NextResponse.json({ analysis });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
