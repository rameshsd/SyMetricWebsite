
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import {
  Shield,
  Users,
  Lock,
  User,
  UserCheck,
  Key,
  Bell,
  Trash2,
  Mail,
  UserPlus
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Role Definition & Configuration',
    description: 'Create roles at System, Customer, or Study scopes with granular permissions.',
  },
  {
    icon: Users,
    title: 'Multiple Role Assignment',
    description: 'Assign users multiple roles across different organizations and studies for flexible access modeling.',
  },
  {
    icon: UserPlus,
    title: 'Secure User Onboarding',
    description: 'A controlled process with email validation, automatic notifications, and auditable actions.',
  },
  {
    icon: Key,
    title: 'Credential & Account Management',
    description: 'Includes password reset, PIN reset, and self-service recovery options.',
  },
  {
    icon: Bell,
    title: 'Notification Preferences',
    description: 'Users can manage email alerts for specific transactions, with all notifications centrally stored.',
  },
  {
    icon: Trash2,
    title: 'Full Lifecycle Control',
    description: 'Securely edit, block, unblock, and delete users and profiles with mandatory reason capture and PIN authentication.',
  },
];

export function DetailedIamFeatures() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          title="Detailed Features"
          description="Explore the granular controls and workflows that ensure secure and compliant user management."
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-background border rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm mt-4">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
