// ─────────────────────────────────────────────────────────────
// Reviews policy (per brief): use ONLY real Google reviews from the
// Place Details API. No place_id was available for either location
// at build time, and we must NOT reuse old-site testimonials or
// invent reviews — so we render an honest placeholder inviting
// reviews across BOTH Google locations. See JUDGEMENT_CALLS.md:
// operator to supply place_id for Barnes (SW13 9JJ) and Chelsea
// Harbour (SW10 0XG), or confirm a review-collection strategy.
// ─────────────────────────────────────────────────────────────

export interface GoogleReview {
  author: string;       // first-name anonymised
  rating: number;       // 1–5
  text: string;
  location?: string;    // Barnes | Chelsea Harbour
}

export const reviewsMeta = {
  googleAvailable: false,
  stars: 5,
  googleNote:
    'Over 30 years we have helped thousands of customers buy and sell left-hand drive cars across the UK, Europe and beyond. We are now gathering verified Google reviews for both our Barnes and Chelsea Harbour showrooms — if you have bought or sold a car with us, we would be grateful for a review.',
  // Each location needs a Google place_id before live reviews can be shown.
  locations: [
    { name: 'Barnes', postcode: 'SW13 9JJ', placeId: null as string | null },
    { name: 'Chelsea Harbour', postcode: 'SW10 0XG', placeId: null as string | null },
  ],
  reviews: [] as GoogleReview[],
};
