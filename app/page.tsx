"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, Activity, MessageSquare, Users, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const dashboards = [
    {
      title: "DSM Osservatorio",
      description: "Monitoraggio e Analisi Disturbi",
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      longDescription: "Dashboard completa per il monitoraggio in tempo reale dei disturbi mentali, con analisi dettagliate delle tendenze, distribuzione geografica e demografica. Include strumenti per il tracciamento dell'efficacia dei trattamenti e indicatori di performance clinica.",
      href: "/dashboard/core-demo",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "DSM Hub Predittivo",
      description: "Analisi Avanzate & Predittive",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      longDescription: "Sistema avanzato di analisi predittiva che utilizza algoritmi di machine learning per identificare pattern clinici, prevedere rischi di ricadute e ottimizzare i percorsi terapeutici. Include modelli predittivi per l'occupazione dei reparti e l'allocazione delle risorse.",
      href: "/dashboard/insight-demo",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "DSM Connect",
      description: "Comunicazione e Monitoraggio Pazienti",
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      longDescription: "Piattaforma integrata per la gestione delle comunicazioni con i pazienti, monitoraggio continuo dello stato di salute e aderenza terapeutica. Include sistema di alert intelligenti, gestione dei feedback e schedulazione automatica dei follow-up basata su criteri clinici personalizzati.",
      href: "/dashboard/connect-demo",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "DSM Operations",
      description: "Gestione Operativa e Risorse",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      longDescription: "Sistema completo per la gestione operativa del DSM, che include monitoraggio in tempo reale dell'occupazione dei reparti, gestione del personale e delle risorse. Fornisce strumenti per l'ottimizzazione dei turni, tracciamento delle scorte farmaceutiche e pianificazione efficiente delle risorse.",
      href: "/dashboard/ops-demo",
      color: "bg-amber-50 hover:bg-amber-100"
    },
    {
      title: "DSM Analisi Demo",
      description: "Analisi & Riconoscimento Pattern",
      icon: <TrendingUp className="h-6 w-6 text-cyan-500" />,
      longDescription: "Versione dimostrativa del sistema di analisi avanzata che utilizza tecniche di intelligenza artificiale per il riconoscimento automatico di pattern clinici, analisi delle correlazioni tra sintomi e trattamenti, e generazione di insights predittivi per supportare le decisioni cliniche.",
      href: "/dashboard/insight-demo-ai",
      color: "bg-cyan-50 hover:bg-cyan-100"
    },
    {
      title: "Assistente Query IA",
      description: "Interrogazione Dati in Linguaggio Naturale",
      icon: <Search className="h-6 w-6 text-indigo-500" />,
      longDescription: "Interfaccia avanzata in linguaggio naturale che permette di interrogare i dati clinici e operativi del DSM utilizzando domande in formato libero. Il sistema traduce automaticamente le richieste in query complesse, genera visualizzazioni interattive e fornisce insights basati su modelli di machine learning.",
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
                  <CardTitle className="flex items-start gap-3">
                    <div className="mt-1">
                      {dashboard.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold">{dashboard.title}</div>
                      <div className="text-sm text-gray-500 font-normal">
                        {dashboard.description}
                      </div>
                      <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                        {dashboard.longDescription}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Ultimo aggiornamento: 04 Nov 2024
        </div>
      </div>
    </div>
  );
}