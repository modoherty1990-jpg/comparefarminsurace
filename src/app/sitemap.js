// src/app/sitemap.js
import { createClient } from '@/lib/supabase'

const BASE_URL = 'https://comparefarminsurace.com.au'

export default async function sitemap() {
  const supabase = createClient()

  // Fetch published guide slugs
  const { data: guides } = await supabase
    .from('farm_guides')
    .select('slug, updated_at')
    .eq('published', true)

  const guideUrls = (guides || []).map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: guide.updated_at,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-matching-works`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...staticPages, ...guideUrls]
}
