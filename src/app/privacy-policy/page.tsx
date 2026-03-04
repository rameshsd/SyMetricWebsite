'use client';
import { PageHeader } from '@/components/layout/PageHeader';
import { FileText, Users, Database, Settings, Scale, Archive, Share2, ShieldCheck, Cookie, UserCheck, Mail, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Section = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: LucideIcon }) => (
  <div className="pt-8 mt-8 border-t">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground prose prose-sm md:prose-base dark:prose-invert max-w-none prose-h3:font-semibold prose-h3:text-foreground prose-h3:text-lg">
        {children}
    </div>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumb={{ href: '/', label: 'Home' }}
      />
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-4xl mx-auto">
            <div className="bg-background p-6 sm:p-8 md:p-12 rounded-2xl border shadow-sm">
                <div className="mb-8 pb-8 border-b text-center">
                    <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-muted-foreground mt-2">Last updated: July 29, 2024</p>
                </div>

                <Section title="Introduction" icon={FileText}>
                    <p>This document referred to as the ‘Privacy Policy’ provides information on the collection, use, and sharing (collectively referred to ‘processing’ or ‘process’) as of personal information by SyMetric in connection with the use of websites, web applications, mobile applications, and social media pages that link to this Privacy Policy, an Individual’s interactions with SyMetric during in-person meetings or at SyMetric events, and in the context of other offline sales and marketing activities. This Privacy Policy also explains the privacy rights one may have in relation to these processing activities.</p>
                    <p>A company specialized in Design, Development, Delivery and support of Integrated Software Platform for all types of Clinical Trials. Integrated Platform helps faster submissions and reduce the overall study timelines.</p>
                    <p>As used in this Privacy Policy, ‘personal information’ or ‘personal data’ means information that relates to an identified individual or to an identifiable individual. For example, this could include among other things like names, addresses, email addresses, business contact details, or information gathered through the interactions with us via our websites or at events. Personal information is also referred to as ‘information about an Individual.</p>
                </Section>
                
                <Section title="Scope of this Privacy Policy" icon={Users}>
                    <p>This Privacy Policy applies to the processing of personal information by SyMetric of:</p>
                    <ul>
                      <li>Individual(s) who are visitors and users of the various SyMetric sites, including our website on symetricsystems.com, web or mobile software applications and our social media pages that link to this Privacy Policy (collectively referred to as the sites);</li>
                      <li>Attendees of SyMetric events, such as Conferences, or SyMetric-sponsored events;</li>
                      <li>Customers and prospective customers and their representatives;</li>
                      <li>Subscribers to SyMetric newsletters; and</li>
                      <li>Suppliers and business partners and their representatives.</li>
                    </ul>
                    <p>When interacting with our websites, one also has the ability to link or connect with non-SyMetric websites, services, social networks, applications, or other features. Enabling these features will lead to other parties than SyMetric processing information about the User. SyMetric does not have any control over these features of other parties. We encourage one to review the privacy policies of these parties before using these features.</p>
                </Section>

                <Section title="Responsibility and Information Collection" icon={Database}>
                    <p>SyMetric is responsible for processing the personal information of the User described in this Privacy Policy. SyMetric can process information about the Individual(s) collected both offline and online. Offline information about Individual(s) originates from our interactions with the Individual(s) during in-person meetings or at SyMetric events, conferences, workshops or gatherings;</p>
                    <p>Online information about Individual(s) originates from Individual(s) activities on our sites, for example, in relation to their SyMetric accounts, (pre-)sales inquiries or subscriptions to our newsletters, or from their interactions with SyMetric via electronic communication tools such as email or telephone. Information about Individual(s) may also be provided by third-party sources, such as data aggregators who may not have a relationship with them. Online information about Individual(s) may also originate from the use of cookies and similar technologies (for example, pixel tags and device identifiers) on our sites or sites of third parties.</p>
                    <h3>Types of Personal Information We Process</h3>
                     <ul>
                        <li>name and physical address, email addresses, and telephone numbers;</li>
                        <li>demographic attributes, when tied to personal information that identifies Individual(s);</li>
                        <li>photographs and testimonials;</li>
                        <li>transactional data, including products and services, ordered;</li>
                        <li>company data such as the name, size and location of the company Individual(s) work for and Individual’s role within the company;</li>
                        <li>data from surveys and publicly available information, such as social media posts;</li>
                        <li>unique IDs such as Individual(s) mobile device identifier or cookie ID on Individual(s) browser;</li>
                        <li>IP address and information that may be derived from IP address, such as geographic location;</li>
                        <li>information about a device the Individual uses, such as browser, device type, operating system, the presence or use of “apps”, screen resolution, and the preferred language; and</li>
                        <li>behavioral data of the internet-connected computer or device Individual(s) use when interacting with the sites, such as advertisements clicked or viewed, sites and content areas, date and time of activities or the web search used to locate and navigate to a site.</li>
                    </ul>
                    <p>Please note that SyMetric does not control the content that Individual(s) may post to SyMetric Communities forums or social networks; in some cases, such content may be publicly available on the Internet. Individual(s) should carefully consider whether they wish to submit personal information to these forums or social networks and whether they wish to make their profile available to other users, and the Individual(s) should tailor any content which they may submit accordingly.</p>
                </Section>

                <Section title="Why and how do we use your personal information?" icon={Settings}>
                    <h3>Business Purposes:</h3>
                    <ul>
                        <li>To communicate and respond to your requests and inquiries.</li>
                        <li>To deliver functionality on our sites and for their technical and functional management.</li>
                        <li>To engage in transactions with customers, suppliers and business partners and to process orders for SyMetric products and services.</li>
                        <li>To analyze, develop, improve and optimize the use, function and performance of our sites, products, and services.</li>
                        <li>To manage the security of our sites, networks, and systems.</li>
                        <li>To comply with applicable laws and regulations and to operate our business.</li>
                    </ul>
                    <h3>Commercial Purposes:</h3>
                    <ul>
                        <li>To administer subscriptions of SyMetric newsletters.</li>
                        <li>To market our products and services or related products and services, and to tailor our marketing and sales activities to your or your company’s interests.</li>
                    </ul>
                </Section>
                
                <Section title="What is our basis for processing information?" icon={Scale}>
                    <p>For personal information collected about you, our basis for processing is the following:</p>
                    <ul>
                        <li>In order to communicate adequately with you and to respond to your requests, we need to process information about you and therefore have a legitimate interest in processing this information.</li>
                        <li>In order to engage in transactions with customers, suppliers and business partners, and to process purchases of our products and services, we need to process your information as necessary to enter into or perform a contract with you or your company.</li>
                        <li>We process personal information for marketing and sales activities based on your consent where so indicated on our sites at the time your personal information was collected, or further to our legitimate interest to market and promote our products and services.</li>
                        <li>We rely on our legitimate interest to analyze, develop, improve and optimize our sites, products, and services, and to maintain the security of our sites, networks, and systems.</li>
                        <li>In order to comply with applicable laws and regulations, such as to comply with a subpoena or other legal process, or to process an opt-out request.</li>
                    </ul>
                </Section>
                
                <Section title="For what period do we retain personal information?" icon={Archive}>
                    <p>SyMetric maintains personal information for the following retention periods:</p>
                    <ul>
                      <li>Information we collect to engage in transactions with our customers, suppliers and business partners, and to process purchases of our products and services, will be retained for the duration of the transaction or services period, or longer as necessary for record retention and legal compliance purposes.</li>
                      <li>If you have registered for a SyMetric account, your account information will be retained for as long as you maintain an active account.</li>
                      <li>Contact information such as your email address or phone number collected online on our sites or offline from our interactions with you at SyMetric events and conferences, and used for direct marketing and sales activities will be retained for as long as we have an active (customer) relationship with you. We treat you as an active contact if you have interacted with SyMetric or updated your contact details and preferences in the past 36 months; and you have not made a deletion request.</li>
                      <li>Personal information needed to retain your opt-out preferences is retained for 10 years (or longer as necessary to comply with applicable law).</li>
                    </ul>
                </Section>

                <Section title="When and how can we share your personal information?" icon={Share2}>
                  <h3>Sharing within SyMetric</h3>
                  <p>SyMetric employees are authorized to access personal information only to the extent necessary to serve the applicable purpose(s) and to perform their job functions.</p>
                  <h3>Sharing with third parties</h3>
                  <p>We may share personal information with the following third parties for a business purpose:</p>
                  <ul>
                      <li>Third-party service providers (e.g., order fulfillment, analytics, event/campaign management, website management, information technology and related infrastructure provision, customer service, e-mail delivery, auditing, and other similar service providers) in order for those service providers to perform business functions on behalf of SyMetric.</li>
                      <li>Relevant third parties in the event of a reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock (including in connection with any bankruptcy or similar proceedings).</li>
                      <li>As required by law, such as to comply with a subpoena or other legal process, when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to government requests, including public and government authorities outside your country of residence, for national security and/or law enforcement purposes.</li>
                  </ul>
                  <p>When third parties are given access to personal information, we will take appropriate contractual, technical and organizational measures designed to ensure that personal information is processed only to the extent that such processing is necessary, consistent with this Privacy Policy, and in accordance with applicable law.</p>
                </Section>

                <Section title="How is your personal information secured?" icon={ShieldCheck}>
                   <p>SyMetric has implemented appropriate technical, physical and organizational measures designed to protect personal information against accidental or unlawful destruction or accidental loss, damage, alteration, unauthorized disclosure or access, as well as all other forms of unlawful processing.</p>
                </Section>

                <Section title="What cookies and similar technologies do we use?" icon={Cookie}>
                   <p>Cookies and similar technologies (e.g., pixel tags and device identifiers) are used by SyMetric to recognize you and/or your device(s) on, off and across different services and devices for the purposes specified in this document.</p>
                   <p>Cookies are small text files that contain a string of characters and uniquely identify a browser on a device connected to the Internet. Any browser visiting our sites will receive cookies from us. We use cookies and other technologies on all our sites to ensure the best possible and secure experience on our sites and to provide you with tailored information on products and services.</p>
                   <p>SyMetric also uses cookies or similar technologies on its sites to collect online information such as your mobile device ID, IP address, and other information about your device, as well as behavioral data of your device usage on our sites (e.g. pages viewed, links clicked, documents downloaded).</p>
                </Section>
                
                <Section title="What are your privacy rights?" icon={UserCheck}>
                    <p>We provide multiple choices in respect of the information we process about you:</p>
                    <ul>
                        <li><strong>Opt-out of our use of your personal information:</strong> You may withdraw consent which you have previously provided for the processing of information about you, including for email marketing by SyMetric.</li>
                        <li><strong>Delete personal information:</strong> You can ask us to erase or delete all or some of the information about you.</li>
                        <li><strong>Change or correct personal information:</strong> You can edit some of the information about you by updating your accounts. You can also ask us to change, update, or fix information about you in certain cases, particularly if it is inaccurate.</li>
                        <li><strong>Object to, or limit or restrict the use of personal information:</strong> You can ask us to stop using all or some of the information about you (for example, if we have no legal right to keep using it) or to limit our use of it (for example, if the information about you is inaccurate).</li>
                        <li><strong>Right to access and/or have your information provided to you:</strong> You can also ask us for a copy of information about you and can ask for it to be provided in machine-readable form if you reside in a jurisdiction that provides this right as a matter of law.</li>
                    </ul>
                </Section>

                <Section title="Information Security and Privacy Officer" icon={Mail}>
                  <p>If you believe your personal information has been used in a way that is not consistent with this Privacy Policy, or if you have further questions, you can contact the Information Security and Privacy Officer by written inquiry:</p>
                  <address className="not-italic bg-muted p-4 rounded-lg border">
                    <strong>Information Security and Privacy Officer</strong><br />
                    SyMetric<br />
                    Achiral Systems Pvt. Ltd.<br />
                    No. 51, Kodihalli Main Road<br />
                    HAL 2nd Stage<br />
                    Bengaluru – 560008, India
                  </address>
                </Section>
                
                <Section title="Dispute Resolution or Filing a Complaint" icon={AlertTriangle}>
                    <p>If you have any complaints regarding our compliance with this Privacy Policy, please contact us first. We will investigate and attempt to resolve complaints and disputes regarding the use and disclosure of personal information in accordance with this Privacy Policy and applicable law.</p>
                </Section>

            </div>
        </div>
      </section>
    </>
  );
}
