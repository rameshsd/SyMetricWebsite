
"use client";

import {
  Users,
  Building,
  Book,
  Hospital,
  Beaker,
  ClipboardList,
  Database,
  FlaskConical,
  GraduationCap,
  LifeBuoy,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  { icon: ShieldCheck, label: "Identity and Access Management" },
  { icon: Building, label: "Organization Management" },
  { icon: Book, label: "Study Management" },
  { icon: Hospital, label: "Site Management" },
  { icon: Beaker, label: "Clinical Supplies Management" },
  { icon: Users, label: "Subject Management" },
  { icon: Database, label: "Data Management" },
  { icon: FlaskConical, label: "Lab Management" },
  { icon: ClipboardList, label: "Medical Coding" },
  { icon: LayoutGrid, label: "Data Services" },
  { icon: GraduationCap, label: "Digital Learning" },
  { icon: LifeBuoy, label: "Help and Support" },
];

export function PlatformToolsGrid() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">
            Overview of Tools on Our Platform
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <tool.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold">{tool.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 p-6 bg-background rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold text-center">Data Management</h3>
            <p className="text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
                Global Library, Data Designer, Data Validation Manager, Data Collection, Discrepancy Management, Source Data Verification, and Data Exports
            </p>
        </div>
      </div>
    </section>
  );
}
