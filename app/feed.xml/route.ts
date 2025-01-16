export const maxDuration = 25;
import feed from 'lib/feed';

export const dynamic = 'force-static'

export async function GET() {
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
