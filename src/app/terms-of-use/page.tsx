'use client';
import { PageHeader } from '@/components/layout/PageHeader';
import { FileText, Link as LinkIcon, Ban, MessageSquare, ShieldAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Section = ({ title, children, icon: Icon, id }: { title: string; children: React.ReactNode; icon: LucideIcon; id: string }) => (
  <div id={id} className="pt-8 mt-8 border-t first:mt-0 first:pt-0 first:border-none">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground prose prose-sm md:prose-base dark:prose-invert max-w-none">
        {children}
    </div>
  </div>
);

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        title="Terms of Use"
        breadcrumb={{ href: '/', label: 'Home' }}
      />
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-4xl mx-auto">
            <div className="bg-background p-6 sm:p-8 md:p-12 rounded-2xl border shadow-sm">
                <div className="mb-8 pb-8 border-b text-center">
                    <h1 className="text-4xl font-bold">Terms of Use</h1>
                    <p className="text-muted-foreground mt-2">Welcome to the SyMetric website</p>
                </div>
                
                <Section title="General Terms" icon={FileText} id="general">
                    <p>Welcome to the SyMetric website (the “Web Site”). The Web Site is owned and operated by SyMetric. SyMetric provides its services to you subject to the following conditions. If you visit this Web Site, you accept these conditions. Please read them carefully.</p>
                    <p>SyMetric may, without notice to you, at any time revise these Terms of Use and any other information contained in this Web Site by updating this posting. SyMetric may also make improvements or changes in the products, services, or programs described in this Web Site at any time without notice.</p>
                </Section>
                
                <Section title="Restrictions on Use" icon={Ban} id="restrictions">
                    <p>The SyMetric Web Sites are offered to you conditioned upon your acceptance without modification of the terms, conditions, and notices contained herein (the “Agreement”). Your use of the SyMetric Web Sites constitutes your acknowledgment and agreement to all such terms, conditions and notices, as set forth below and in all links to this Agreement. If you do not agree to accept the terms of this Agreement, you may not access or use the SyMetric Web Sites.</p>
                    <p>This Web Site and all content in this site may not be copied, reproduced, republished, uploaded, posted, transmitted, distributed, or used for the creation of derivative works without SyMetric’s prior written consent, except that SyMetric grants you non-exclusive, non-transferable, limited permission to access and display the Web pages within this Web Site, solely on your computer or other device and for your personal, non-commercial use of this Web Site. This permission is conditioned on your not modifying the content displayed on this Web Site, your keeping intact all copyright, trademark, and other proprietary notices, and your acceptance of any terms, conditions and notices accompanying the content or otherwise set forth in this Web Site. Not withstanding the foregoing, any software and other materials that are made available for downloading, access, or other use from this Web Site with their own license terms, conditions, and notices will be governed by such terms, conditions, and notices.</p>
                </Section>

                <Section title="Links to Third Party Sites" icon={LinkIcon} id="links">
                    <p>SyMetric makes no representations whatsoever about any other web site which you may access through the SyMetric Web Sites. When you access a non-SyMetric Web Site, even one that may contain the SyMetric-logo or other SyMetric trademark, service mark or trade name, please understand that it is independent of SyMetric and that SyMetric has no control over the content on that web site. Additionally, the SyMetric Web Sites may contain links to other web sites (“Linked Sites”). The Linked Sites may not be under the control of SyMetric and SyMetric is not responsible for the contents of any Linked Site not under SyMetric control, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. SyMetric is not responsible for any form of transmission received from any Linked Site. SyMetric makes no warranties or representations of any kind as to the accuracy, currency, or completeness of any information contained in such Linked Sites and shall have no liability for any damages or injuries of any kind arising from such content or information. SyMetric is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by SyMetric of the site or any association with its operators. It is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, trojan horses and other items of a destructive nature.</p>
                </Section>
                
                <Section title="Use of Communication Services" icon={MessageSquare} id="communication">
                    <p>The SyMetric Web Sites may contain bulletin board services, chat areas, blogs, newsgroups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with and share information with the public at large or with a group (collectively, “Communication Services”). You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service. Without prejudice to the generality of the foregoing, you agree that when using a Communication Service, you will not:</p>
                    <ul>
                        <li>Defame, abuse, harass, stalk, threaten, damage the reputation of or otherwise infringe or violate the legal rights (such as rights of privacy and publicity) of others; breach any legal duty owed to others nor advocate, promote or incite any third party to commit or assist any unlawful or criminal act.</li>
                        <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, offensive, discriminatory, indecent, illegal or unlawful topic, name, material or information.</li>
                        <li>Intentionally post inaccurate, false or misleading information or information containing your personal opinions not genuinely held by you.</li>
                        <li>Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
                        <li>Publish, post, upload or distribute another’s confidential, proprietary, sensitive or personal information or any information relating (directly or indirectly) to any past or existing commercial arrangements, contracts, engagements or provision of goods and services between any persons or organizations.</li>
                        <li>Upload files that contain viruses, worms, corrupted files, or any other similar software, programs or malicious content that may damage the operation of systems hosting SyMetric Web Sites or another’s the computer.</li>
                    </ul>
                </Section>

                <Section title="Limitation of Liability" icon={ShieldAlert} id="liability">
                    <p>To the extent permitted by law, in no event will SyMetric be liable to any party for any direct, indirect, incidental, special, exemplary or consequential damages of any type whatsoever related to or arising from this web site or any use of this web site, or of any site or resource linked to, referenced, or accessed through this web site, or for the use or downloading of, or access to, any materials, information, products, or services, including, without limitation, any lost profits, business interruption, lost savings or loss of programs or other data, even if SyMetric is expressly advised of the possibility of such damages. This exclusion and waiver of liability apply to all causes of action, whether based on contract, warranty, tort, or any other legal theories.</p>
                    <p>Additional or different terms, conditions, and notices may apply to specific materials, information, products, software, and services offered through this Web Site. In the event of any conflict, such additional or different terms, conditions, and notices will prevail over these Terms of Use.</p>
                </Section>
            </div>
        </div>
      </section>
    </>
  );
}
