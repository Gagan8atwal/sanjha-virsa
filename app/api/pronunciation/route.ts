import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_TEXT_LENGTH = 260;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const text = typeof body?.text === 'string' ? body.text.trim() : '';

    if (!text || text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json({ error: 'Invalid pronunciation text.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Native pronunciation audio is not configured.' },
        { status: 503 },
      );
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini-tts',
        voice: 'coral',
        input: text,
        instructions: 'Speak in clear, natural Majha-style Punjabi. Use native Punjabi pronunciation, a warm teaching voice, and a slightly slow pace for children. Do not translate or add words.',
        response_format: 'mp3',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Pronunciation API failed:', response.status, detail);
      return NextResponse.json({ error: 'Pronunciation audio could not be generated.' }, { status: 502 });
    }

    const audio = await response.arrayBuffer();
    return new NextResponse(audio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  } catch (error) {
    console.error('Pronunciation route error:', error);
    return NextResponse.json({ error: 'Pronunciation request failed.' }, { status: 500 });
  }
}
