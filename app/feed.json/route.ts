import feed from '../../lib/feed';

export async function GET() {
  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
