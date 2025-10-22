import { companyInfo, teamMembers } from '@/lib/data';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadershipSection } from '@/components/layout/LeadershipSection';
import { GrowthStoryTimeline } from '@/components/layout/GrowthStoryTimeline';

export const metadata = {
  title: 'About Us - SyMetric',
  description: 'Learn about the history, mission, and team behind SyMetric.',
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="About SyMetric"
        breadcrumb={{ href: '/about', label: 'About Us' }}
        showTitle={true}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Revolutionizing Clinical Trials With Innovation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              At SyMetric, we help you make the shift from traditional trial models to agile, patient-centric processes driven by our unified Clinical Trial Platform. With us, you can use the power of technology to automate and simplify project management in clinical trials and improve your productivity. We offer modularized solutions for Pharma Companies, Contract Research Organizations, and Academia. You can integrate your processes with our user-friendly applications or choose from comprehensive modules for every stage of your trial. And all this comes to you, complete with Study Configurations, in a matter of three to four weeks. So take a big leap with SyMetric!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Vision</h2>
              <p className="mt-2 text-muted-foreground italic">Our vision...</p>
              <p className="mt-4 text-xl font-semibold text-primary">
                To accelerate the impact of clinical research on healthcare outcomes through digital interventions.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are committed to building technology solutions that stimulate research for the advancement of Patient-Centric medical science. At the core of our vision lies our efforts to make clinical research less resource-intensive and more affordable.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Mission</h2>
              <p className="mt-2 text-muted-foreground italic">And we are on a mission!</p>
              <p className="mt-4 text-xl font-semibold text-primary">
                To transform the drug development landscape.
              </p>
              <p className="mt-4 text-muted-foreground">
                The SyMetric team works persistently towards this mission by helping systems adopt innovative digital technologies that improve productivity, lower costs, and assure safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <GrowthStoryTimeline />
    </div>
  );
}
