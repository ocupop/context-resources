import { defineCollection, z } from "astro:content";

const seoSchema = z
  .object({
    page_description: z.string().nullable(),
    canonical_url: z.string().nullable(),
    featured_image: z.string().nullable(),
    featured_image_alt: z.string().nullable(),
    author_twitter_handle: z.string().nullable(),
    open_graph_type: z.string().nullable(),
    no_index: z.boolean(),
  })
  .optional();

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      image: z.string(),
      image_alt: z.string(),
    }),
    thumb_image_path: z.string(),
    thumb_image_alt: z.string(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  hero_block: z.any(),
  content_blocks: z.array(z.any()),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  title: z.string(),
  page_size: z.number().positive(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

const personasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    full_name: z.string().optional(),
    status: z.string().optional(),
    persona_type: z.string().optional(),
    context: z.string().optional(),
    version: z.union([z.string(), z.number()]).optional(),
    priority: z.string().optional(),
    demographics: z.any().optional(),
    characteristics: z.any().optional(),
    technology_profile: z.any().optional(),
    usage_patterns: z.any().optional(),
    accessibility: z.any().optional(),
    interface_preferences: z.any().optional(),
    content_preferences: z.any().optional(),
    goals: z.any().optional(),
    pain_points: z.any().optional(),
    jobs_to_be_done: z.any().optional(),
    motivations: z.any().optional(),
    values: z.any().optional(),
    professional_context: z.any().optional(),
    domain_context: z.any().optional(),
    solution_motivations: z.any().optional(),
    organizational_readiness: z.any().optional(),
    journey_stages: z.any().optional(),
    touchpoints: z.any().optional(),
    emotional_journey: z.any().optional(),
    design_requirements: z.any().optional(),
    content_guidelines: z.any().optional(),
    feature_requirements: z.any().optional(),
    performance_metrics: z.any().optional(),
    satisfaction_metrics: z.any().optional(),
    business_impact: z.any().optional(),
    empathy_map: z.any().optional(),
    scenarios: z.any().optional(),
    quotes: z.any().optional(),
    research: z.any().optional(),
    notes: z.string().optional(),
    created: z.string().optional(),
    last_updated: z.string().optional(),
    created_by: z.string().optional(),
    reviewed_by: z.string().optional(),
    next_review: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    related_personas: z.array(z.string()).optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  personas: personasCollection,
};
