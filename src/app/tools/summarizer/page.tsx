
import { ProductSummarizer } from '@/components/ai/product-summarizer';
import { SectionTitle } from '@/components/shared/section-title';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Product Summarizer',
};

export default function ProductSummarizerPage() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          title="Product Information Summarizer"
          description="Enter a product URL to generate an engaging summary using AI."
        />
        <div className="max-w-2xl mx-auto mt-12">
          <ProductSummarizer />
        </div>
      </div>
    </section>
  );
}
