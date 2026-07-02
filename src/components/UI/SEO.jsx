import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const title = 'Maryam Hassan Portfolio';
  const description =
    'Portfolio of Maryam Hassan.';
  const url = '';
  const image = `${url}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ayesha Khan',
          jobTitle: 'Full Stack Developer',
          url,
          sameAs: [
            'https://github.com/yourusername',
            'https://linkedin.com/in/yourusername',
            'https://twitter.com/yourusername',
          ],
        })}
      </script>
    </Helmet>
  );
}
