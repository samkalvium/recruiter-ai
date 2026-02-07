import { Zap, Clock, Users, FileCheck, Target, DollarSign, UserCheck } from 'lucide-react';

export const metrics = [
    {
        id: 1,
        label: "Faster Screening",
        value: "10x",
        description: "AI parses and ranks 250+ applications per day vs 25 manually",
        icon: Zap,
        color: "bg-accent-1"
    },
    {
        id: 2,
        label: "Faster Time-to-Hire",
        value: "70%",
        description: "Average hiring timeline drops from 42 days to just 12 days",
        icon: Clock,
        color: "bg-accent-2"
    },
    {
        id: 3,
        label: "More Interview Capacity",
        value: "25x",
        description: "AI conducts 200+ automated screening interviews daily vs 8 manual calls",
        icon: Users,
        color: "bg-primary text-white"
    },
    {
        id: 4,
        label: "Application Completion",
        value: "95%",
        description: "Smart application forms reduce candidate drop-off dramatically",
        icon: FileCheck,
        color: "bg-accent-3"
    },
    {
        id: 5,
        label: "More Qualified Applications",
        value: "89%",
        description: "AI job description optimizer attracts higher-quality candidate pipelines",
        icon: Target,
        color: "bg-accent-2"
    },
    {
        id: 6,
        label: "Lower Recruitment Costs",
        value: "80%",
        description: "vs traditional recruiting agencies and multiple software subscriptions",
        icon: DollarSign,
        color: "bg-accent-1"
    },
    {
        id: 7,
        label: "Reduction in Bad Hires",
        value: "50%",
        description: "AI skills assessment and matching improves hiring accuracy dramatically",
        icon: UserCheck,
        color: "bg-gray-200"
    }
];
