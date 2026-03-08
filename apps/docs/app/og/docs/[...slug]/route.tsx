import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background:
            'linear-gradient(135deg, rgb(244, 239, 228), rgb(251, 247, 240) 45%, rgb(228, 240, 238))',
          color: 'rgb(15, 23, 42)',
          padding: '72px',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            border: '1px solid rgba(15, 23, 42, 0.14)',
            borderRadius: '32px',
            background: 'rgba(255, 255, 255, 0.72)',
            padding: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div
              style={{
                fontSize: '24px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgb(71, 85, 105)',
              }}
            >
              Useprint docs
            </div>
            <div style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.05 }}>
              {page.data.title}
            </div>
            <div style={{ fontSize: '28px', lineHeight: 1.35, color: 'rgb(51, 65, 85)' }}>
              {page.data.description}
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: '26px', color: 'rgb(71, 85, 105)' }}>
            React components to printable HTML
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
