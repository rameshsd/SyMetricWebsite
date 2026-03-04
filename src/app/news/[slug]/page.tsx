
'use client';
import { newsData } from "@/lib/news-data"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function NewsPage({ params }: { params: { slug: string }}) {

const article = (newsData as any)[params.slug]

if (!article) return notFound()

return (

<div className="container max-w-4xl py-16">

<Image
src={article.image}
width={1200}
height={600}
alt={article.title}
className="rounded-xl mb-8"
/>

<p className="text-blue-600 mb-2">
{article.category}
</p>

<h1 className="text-4xl font-bold mb-6">
{article.title}
</h1>

<div className="text-lg whitespace-pre-line text-muted-foreground">
{article.content}
</div>

</div>

)
}
