"use client";

import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Activity, MessageSquare, Users, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const dashboards = [
    {
      title: "DSM Analytics Hub",
      description: "Monitoraggio e Analisi Disturbi",
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      href: "/dashboard/core-demo",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "DSM Insight Hub",
      description: "Analytics Avanzate & Predittive",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      href: "/dashboard/insight-demo",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "DSM Connect",
      description: "Comunicazione e Monitoraggio Pazienti",
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      href: "/dashboard/connect-demo",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "DSM Operations",
      description: "Gestione Operativa e Risorse",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      href: "/dashboard/ops-demo",
      color: "bg-amber-50 hover:bg-amber-100"
    },
    {
      title: "DSM Insight Demo",
      description: "Analytics e Pattern Recognition",
      icon: <TrendingUp className="h-6 w-6 text-cyan-500" />,
      href: "/dashboard/insight-demo-ai",
      color: "bg-cyan-50 hover:bg-cyan-100"
    },
    {
      title: "AI Query Assistant",
      description: "Interrogazione Dati in Linguaggio Naturale",
      icon: <Search className="h-6 w-6 text-indigo-500" />,
      href: "/dashboard/ai-query",
      color: "bg-indigo-50 hover:bg-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
    <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">DSM Dashboard Suite</h1>
    <p className="text-gray-500">Seleziona una dashboard per visualizzarla</p>
    </div>

    {/* Dashboard Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {dashboards.map((dashboard, index) => (
      <Link
      key={index}
      href={dashboard.href}
      className="no-underline"
      >
      <Card className={`cursor-pointer transition-all duration-200 ${dashboard.color}`}>
      <CardHeader>
      <CardTitle className="flex items-center gap-3">
      {dashboard.icon}
      <div>
      <div className="text-lg">{dashboard.title}</div>
      <div className="text-sm text-gray-500 font-normal">
      {dashboard.description}
      </div>
      </div>
      </CardTitle>
      </CardHeader>
      </Card>
      </Link>
    ))}
    </div>

    {/* Info Footer */}
    <div className="mt-8 text-center text-sm text-gray-500">
    Ultimo aggiornamento: 04 Ott 2023
    </div>
    </div>
    </div>
  );
}
