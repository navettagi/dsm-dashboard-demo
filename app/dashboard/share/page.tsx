"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Brain, Calendar, Users, MessageSquare, Send, UserPlus, Coffee, Stethoscope, Clock, AlertTriangle, Activity, TrendingUp, Heart, Thermometer } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PatientAIDashboard = () => {
  // Dati simulati per i grafici
  const glucoseData = [
    // Dati storici
    { time: '06:00', value: 130, prediction: null },
    { time: '09:00', value: 145, prediction: null },
    { time: '12:00', value: 160, prediction: null },
    { time: '15:00', value: 140, prediction: null },
    // Tempo presente
    { time: '18:00', value: 135, prediction: 135 },
    // Previsioni future
    { time: '21:00', value: null, prediction: 142 },
    { time: '00:00', value: null, prediction: 138 },
    { time: '03:00', value: null, prediction: 128 },
    { time: '06:00', value: null, prediction: 132 }
  ];

  const vitalSignsData = [
    { time: 'Now', heartRate: 72, bp: 125, temp: 36.8, o2: 98 },
    { time: '-10m', heartRate: 75, bp: 128, temp: 36.8, o2: 97 },
    { time: '-20m', heartRate: 73, bp: 126, temp: 36.9, o2: 98 },
    { time: '-30m', heartRate: 74, bp: 127, temp: 36.8, o2: 98 },
  ];

  const riskPredictionData = [
    { name: 'Rischio Ipoglicemia', value: 15 },
    { name: 'Rischio Ipertensione', value: 25 },
    { name: 'Compliance Terapia', value: 85 },
    { name: 'Stato Generale', value: 75 },
  ];

  const [patientData] = useState({
    name: "Mario Rossi",
    id: "PAZ-123456",
    age: 65,
    conditions: ["Diabete Tipo 2", "Ipertensione"],
    allergies: ["Lattosio", "Penicillina"],
    bmi: 28.5,
    lastUpdate: "2 min fa"
  });

  // ... (resto dei dati come prima) ...

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Header riprogettato */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white col-span-2">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/Navetta_Logo.png" alt="Navetta Logo" className="h-12 w-12 object-contain" />
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{patientData.name}</h2>
                    <p className="text-sm text-gray-500">ID: {patientData.id} • Ultimo aggiornamento: {patientData.lastUpdate}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {patientData.conditions.map((condition, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Stato Generale</h3>
                <p className="text-3xl font-bold mt-2">85%</p>
              </div>
              <Activity className="h-8 w-8 opacity-80" />
            </div>
            <p className="text-sm mt-2 opacity-90">Condizione stabile • Monitoraggio attivo</p>
          </CardContent>
        </Card>
      </div>

      {/* Nuova sezione per monitoraggio real-time */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-500">Battito Cardiaco</span>
            </div>
            <div className="text-2xl font-bold">{vitalSignsData[0].heartRate}</div>
            <div className="text-xs text-gray-500">bpm</div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-500">Pressione</span>
            </div>
            <div className="text-2xl font-bold">{vitalSignsData[0].bp}/85</div>
            <div className="text-xs text-gray-500">mmHg</div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <Thermometer className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-500">Temperatura</span>
            </div>
            <div className="text-2xl font-bold">{vitalSignsData[0].temp}°C</div>
            <div className="text-xs text-gray-500">Normale</div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500">SpO2</span>
            </div>
            <div className="text-2xl font-bold">{vitalSignsData[0].o2}%</div>
            <div className="text-xs text-gray-500">Saturazione</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="aiot" className="flex items-center gap-2">
            <Brain className="h-4 w-4"/>
            AI & IoT
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <Activity className="h-4 w-4"/>
            Analisi Predittiva
          </TabsTrigger>
          <TabsTrigger value="menu" className="flex items-center gap-2">
            <Coffee className="h-4 w-4"/>
            Piano Alimentare
          </TabsTrigger>
          <TabsTrigger value="treatments" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4"/>
            Trattamenti
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="h-4 w-4"/>
            Visite ed Esami
          </TabsTrigger>
        </TabsList>

        {/* Tab Piano Alimentare */}
        <TabsContent value="menu">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Piano del Giorno */}
            <div className="md:col-span-2 space-y-4">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-orange-500" />
                    Piano Alimentare Personalizzato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Colazione */}
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-orange-800">Colazione</h3>
                        <span className="text-sm text-orange-600">07:30 - 08:00</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <span className="text-sm">Tè verde senza zucchero (200ml)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <span className="text-sm">Pane integrale (60g)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <span className="text-sm">Marmellata senza zuccheri aggiunti (30g)</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-orange-600 bg-orange-100 p-2 rounded">
                        Note: Basso indice glicemico, adatto per diabetici
                      </div>
                    </div>

                    {/* Pranzo */}
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-green-800">Pranzo</h3>
                        <span className="text-sm text-green-600">12:30 - 13:00</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-sm">Petto di pollo grigliato (150g)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-sm">Verdure al vapore miste (200g)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-sm">Riso integrale (80g)</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-green-600 bg-green-100 p-2 rounded">
                        Note: Basso contenuto di sodio, proteine magre
                      </div>
                    </div>

                    {/* Cena */}
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-blue-800">Cena</h3>
                        <span className="text-sm text-blue-600">19:00 - 19:30</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">Merluzzo al forno (180g)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">Insalata mista (150g)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">Patate lesse (100g)</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-blue-600 bg-blue-100 p-2 rounded">
                        Note: Ricco di Omega-3, basso contenuto calorico
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar con Analytics e Raccomandazioni */}
            <div className="space-y-4">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Analisi Nutrizionale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Calorie Totali</span>
                        <span className="font-medium">1850 kcal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500">Target: 1800-2000 kcal</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-gray-50 rounded text-center">
                        <div className="text-sm font-medium">Proteine</div>
                        <div className="text-lg font-bold text-blue-600">25%</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded text-center">
                        <div className="text-sm font-medium">Carboidrati</div>
                        <div className="text-lg font-bold text-green-600">45%</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded text-center">
                        <div className="text-sm font-medium">Grassi</div>
                        <div className="text-lg font-bold text-orange-600">30%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Raccomandazioni IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Punti di Forza</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Ottima distribuzione dei pasti</li>
                        <li>• Adeguato apporto proteico</li>
                        <li>• Buona varietà di nutrienti</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-amber-50 rounded">
                      <h4 className="text-sm font-medium text-amber-800 mb-1">Suggerimenti</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Aumentare verdure a foglia verde</li>
                        <li>• Considerare spuntino pomeridiano</li>
                        <li>• Monitorare l'idratazione</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50 rounded">
                      <h4 className="text-sm font-medium text-blue-800 mb-1">Prossimi Obiettivi</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Riduzione graduale carboidrati sera</li>
                        <li>• Introduzione omega-3 settimanali</li>
                        <li>• Variare fonti proteiche</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Tab AI & IoT */}
        <TabsContent value="aiot">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  Suggerimenti IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-purple-600" />
                      <h4 className="font-medium text-purple-900">Pattern Rilevati</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-800">
                      <li>• Tendenza all'iperglicemia post-prandiale</li>
                      <li>• Correlazione attività fisica - pressione rilevata</li>
                      <li>• Miglior controllo glicemico nelle ore mattutine</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium text-blue-900">Raccomandazioni</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Anticipare di 30min la dose insulinica serale</li>
                      <li>• Aumentare l'attività fisica pomeridiana</li>
                      <li>• Monitoraggio più frequente tra le 14-16</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  Dati Sensori IoT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Passi Oggi</div>
                      <div className="text-2xl font-bold">8,742</div>
                      <div className="text-xs text-green-600">+12% vs media</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Qualità Sonno</div>
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-xs text-blue-600">6.8 ore</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Stress Level</div>
                      <div className="text-2xl font-bold">Medio</div>
                      <div className="text-xs text-amber-600">HRV: 45ms</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Temperatura</div>
                      <div className="text-2xl font-bold">36.5°C</div>
                      <div className="text-xs text-green-600">Normale</div>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <h4 className="font-medium text-yellow-900">Alert Attivi</h4>
                    </div>
                    <div className="space-y-2 text-sm text-yellow-800">
                      <div className="flex items-center justify-between">
                        <span>Sedentarietà prolungata</span>
                        <span className="text-xs bg-yellow-200 px-2 py-1 rounded">Ultimo: 2h fa</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Variabilità glicemica elevata</span>
                        <span className="text-xs bg-yellow-200 px-2 py-1 rounded">14:30-16:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Previsione Pattern Glicemici
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={glucoseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3b82f6" 
                        name="Valori Misurati"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="prediction" 
                        stroke="#ef4444" 
                        name="Previsione IA"
                        strokeDasharray="5 5"
                        dot={{ r: 4, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Analisi IA:</span> Le previsioni indicano una tendenza alla stabilizzazione 
                    dei valori glicemici nelle prossime 12 ore, con un leggero picco previsto intorno alle 21:00. 
                    Si consiglia monitoraggio ravvicinato durante la cena.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Analisi Predittiva */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Previsione Glicemia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={glucoseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3b82f6" 
                        name="Valore Attuale"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="prediction" 
                        stroke="#ef4444" 
                        name="Previsione IA"
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Analisi del Rischio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={riskPredictionData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={150} />
                      <Tooltip />
                      <Bar 
                        dataKey="value" 
                        fill="#3b82f6"
                        radius={[0, 4, 4, 0]}
                        label={{ position: 'right', fill: '#666' }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Monitoraggio Parametri Vitali
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={vitalSignsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Battito" />
                      <Line type="monotone" dataKey="bp" stroke="#3b82f6" name="Pressione" />
                      <Line type="monotone" dataKey="o2" stroke="#22c55e" name="SpO2" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

  <TabsContent value="treatments">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Piano Terapeutico Corrente */}
      <div className="md:col-span-2 space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              Piano Terapeutico Attuale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Terapia Farmacologica */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-3">Terapia Farmacologica</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <div>
                      <div className="font-medium">Metformina</div>
                      <div className="text-sm text-gray-500">1000mg - 2 volte al giorno</div>
                    </div>
                    <div className="text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Attivo</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <div>
                      <div className="font-medium">Ramipril</div>
                      <div className="text-sm text-gray-500">5mg - 1 volta al giorno</div>
                    </div>
                    <div className="text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Attivo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitoraggio */}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 mb-3">Piano di Monitoraggio</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <div>
                      <div className="font-medium">Glicemia</div>
                      <div className="text-sm text-gray-500">3 volte al giorno, pre-pasto</div>
                    </div>
                    <Clock className="h-5 w-5 text-purple-500" />
                  </div>

                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <div>
                      <div className="font-medium">Pressione Arteriosa</div>
                      <div className="text-sm text-gray-500">Mattina e sera</div>
                    </div>
                    <Clock className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Raccomandazioni */}
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-3">Raccomandazioni Terapeutiche</h3>
                <div className="space-y-2 text-sm text-amber-700">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Assumere Metformina dopo i pasti principali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Ramipril al mattino a digiuno</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Monitorare effetti collaterali gastrointestinali</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar con Aderenza e Alert */}
      <div className="space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Aderenza Terapeutica</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">92%</div>
                <div className="text-sm text-green-700">Aderenza Ultimo Mese</div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Metformina</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Ramipril</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Alert Attivi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded">
                <div className="font-medium text-red-800">Effetti Collaterali</div>
                <div className="text-sm text-red-600">
                  Segnalato disturbo gastrico lieve
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 rounded">
                <div className="font-medium text-amber-800">Interazioni</div>
                <div className="text-sm text-amber-600">
                  Monitorare uso FANS occasionali
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 rounded">
                <div className="font-medium text-blue-800">Rinnovi</div>
                <div className="text-sm text-blue-600">
                  Prescrizione Metformina in scadenza (15gg)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </TabsContent>

           <TabsContent value="appointments">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Calendario e Prossimi Appuntamenti */}
      <div className="md:col-span-2 space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Prossimi Appuntamenti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Visita Specialistica */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-blue-900">Visita Diabetologica</div>
                    <div className="text-sm text-blue-700">Dr.ssa Maria Bianchi</div>
                  </div>
                  <div className="text-sm bg-blue-200 px-3 py-1 rounded-full text-blue-800">
                    Domani, 10:30
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600 mt-2">
                  <Users className="h-4 w-4" />
                  <span>Team: Dr. Verdi (Cardiologo), Dr.ssa Rossi (Nutrizionista)</span>
                </div>
                <div className="mt-2 text-sm text-blue-700">
                  Note: Revisione terapia e valutazione esami recenti
                </div>
              </div>

              {/* Esami */}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-purple-900">Esami Ematochimici</div>
                    <div className="text-sm text-purple-700">Lab. Analisi Centrale</div>
                  </div>
                  <div className="text-sm bg-purple-200 px-3 py-1 rounded-full text-purple-800">
                    28/11, 08:00
                  </div>
                </div>
                <div className="mt-2 text-sm text-purple-700">
                  Prescrizione: Dr.ssa Bianchi • Digiuno dalla sera precedente
                </div>
              </div>

              {/* Controllo */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-green-900">Controllo Pressione</div>
                    <div className="text-sm text-green-700">Inf. Marco Neri</div>
                  </div>
                  <div className="text-sm bg-green-200 px-3 py-1 rounded-full text-green-800">
                    30/11, 11:00
                  </div>
                </div>
                <div className="mt-2 text-sm text-green-700">
                  Follow-up settimanale • Ambulatorio Infermieristico
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comunicazioni Team */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              Comunicazioni Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Chat/Discussione */}
              <div className="space-y-3">
                {/* Messaggio Medico */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm text-blue-700">MB</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="font-medium text-sm">Dr.ssa Maria Bianchi</div>
                      <div className="text-sm">
                        Valori glicemici stabilizzati. Propongo riduzione graduale Metformina.
                        @Dr.Verdi opinioni sulla PA?
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Oggi, 09:30</div>
                    </div>
                  </div>
                </div>

                {/* Risposta Cardiologo */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm text-green-700">GV</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="font-medium text-sm">Dr. Giuseppe Verdi</div>
                      <div className="text-sm">
                        PA nella norma nell'ultimo mese. Concordo con modifica terapia.
                        Mantenere monitoraggio bisettimanale.
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Oggi, 10:15</div>
                    </div>
                  </div>
                </div>

                {/* Nota Infermiere */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm text-purple-700">MN</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="font-medium text-sm">Inf. Marco Neri</div>
                      <div className="text-sm">
                        Paziente riferisce episodi di vertigini mattutini. 
                        Ho programmato controlli PA mattutini per la prossima settimana.
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Oggi, 11:00</div>
                    </div>
                  </div>
                </div>

                {/* Input Messaggio */}
                <div className="flex gap-2 mt-4">
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Scrivi un messaggio..."
                  />
                  <button className="p-2 bg-blue-500 text-white rounded-lg">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Accesso Familiari */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Accesso Familiari</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">Anna Rossi (Figlia)</div>
                <div className="text-sm text-gray-600">
                  Accesso completo • Ultimo accesso: oggi
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">Marco Rossi (Figlio)</div>
                <div className="text-sm text-gray-600">
                  Solo lettura • Ultimo accesso: 2gg fa
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Note e Promemoria */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Note e Promemoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <div className="font-medium text-yellow-800">Preparazione Esami</div>
                </div>
                <div className="text-sm text-yellow-700 mt-1">
                  Digiuno dalla sera precedente
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <div className="font-medium text-purple-800">Documenti</div>
                </div>
                <div className="text-sm text-purple-700 mt-1">
                  Portare esami precedenti e tessera sanitaria
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team di Cura */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Team di Cura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm text-blue-700">MB</span>
                </div>
                <div>
                  <div className="font-medium">Dr.ssa Maria Bianchi</div>
                  <div className="text-sm text-gray-500">Diabetologa • Referente</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm text-green-700">GV</span>
                </div>
                <div>
                  <div className="font-medium">Dr. Giuseppe Verdi</div>
                  <div className="text-sm text-gray-500">Cardiologo</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm text-purple-700">MN</span>
                </div>
                <div>
                  <div className="font-medium">Marco Neri</div>
                  <div className="text-sm text-gray-500">Infermiere Referente</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </TabsContent>

      </Tabs>
    </div>
  );
};

export default PatientAIDashboard;