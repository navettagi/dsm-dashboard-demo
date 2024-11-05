"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MessageSquare, Calendar, Users, Activity, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const ConnectDashboard = () => {
  // Dati per engagement pazienti
  const engagementData = [
    { week: 'W1', tasso: 78, messaggi: 245, survey: 182 },
    { week: 'W2', tasso: 82, messaggi: 268, survey: 198 },
    { week: 'W3', tasso: 85, messaggi: 290, survey: 215 },
    { week: 'W4', tasso: 88, messaggi: 312, survey: 242 }
  ];

  // Dati risposta sondaggi
  const surveyData = [
    { categoria: 'Umore', completati: 156, pendenti: 12 },
    { categoria: 'Ansia', completati: 142, pendenti: 18 },
    { categoria: 'Sonno', completati: 138, pendenti: 22 },
    { categoria: 'Farmaci', completati: 168, pendenti: 8 }
  ];

  // Messaggi recenti simulati
  const recentMessages = [
    {
      id: 1,
      patient: "ID-4872",
      type: "survey",
      status: "completed",
      message: "Sondaggio umore completato",
      time: "09:45",
      score: 7
    },
    {
      id: 2,
      patient: "ID-4891",
      type: "reminder",
      status: "sent",
      message: "Promemoria appuntamento inviato",
      time: "09:30"
    },
    {
      id: 3,
      patient: "ID-4856",
      type: "alert",
      status: "urgent",
      message: "Segnalazione sintomi critici",
      time: "09:15"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">DSM Connect</h1>
            <p className="text-gray-500">Comunicazione e Monitoraggio Pazienti</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Aggiornato: 04 Nov 2024, 09:45</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Tasso Risposta
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-green-500">+3.2% vs settimana precedente</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Survey Attivi
              </CardTitle>
              <FileText className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">312</div>
              <p className="text-xs text-gray-500">60 in attesa risposta</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Alert Generati
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">8</div>
              <p className="text-xs text-red-500">3 richiedono attenzione</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Aderenza Media
              </CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">92%</div>
              <p className="text-xs text-green-500">Target 90% raggiunto</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engagement Trend */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Trend Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="week" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="tasso" 
                      name="Tasso Risposta (%)"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="messaggi" 
                      name="Messaggi Inviati"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Survey Responses */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Completamento Sondaggi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={surveyData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" />
                    <YAxis dataKey="categoria" type="category" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completati" name="Completati" fill="#22c55e" stackId="a" />
                    <Bar dataKey="pendenti" name="In Attesa" fill="#f59e0b" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Messages and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                Messaggi Recenti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`p-4 rounded-lg ${
                      msg.type === 'alert' ? 'bg-red-50' :
                      msg.type === 'survey' ? 'bg-green-50' :
                      'bg-blue-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-medium">{msg.patient}</span>
                        <p className="text-sm text-gray-600">{msg.message}</p>
                      </div>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        msg.type === 'alert' ? 'bg-red-200 text-red-800' :
                        msg.type === 'survey' ? 'bg-green-200 text-green-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {msg.type.toUpperCase()}
                      </span>
                      {msg.score && (
                        <span className="text-sm font-medium">
                          Score: {msg.score}/10
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" />
                Azioni Rapide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  Invia Nuovo Sondaggio
                </button>
                
                <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                  Promemoria Appuntamenti
                </button>
                
                <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                  Verifica Aderenza Terapie
                </button>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <div className="font-medium text-amber-700">Sondaggi Prioritari</div>
                  <div className="text-sm text-amber-600 mt-2">
                    • 3 valutazioni umore<br />
                    • 5 follow-up terapie<br />
                    • 2 scale ansia
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectDashboard;
