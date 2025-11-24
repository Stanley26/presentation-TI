import React from 'react';
import { Slide } from '../types';
import { CodeBlock } from '../components/CodeBlock';
import { Server, Layout, Code, Globe, Database } from 'lucide-react';

export const foundationSlides: Slide[] = [
  // SLIDE 3: DEFINITION
  {
    id: "what-is-contract",
    title: "Anatomie d'un Contrat API",
    subtitle: "Ce que le fichier OpenAPI définit réellement",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        {/* Left Col: Explanations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="prose prose-slate">
            <p className="text-lg text-slate-600">
              C'est un accord formel, lisible par l'homme et la machine, qui stipule comment deux logiciels communiquent.
            </p>
          </div>
          
          <div className="space-y-3">
             <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">1</span>
                <span className="font-medium text-slate-700">Les Endpoints (URLs)</span>
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center font-bold mr-3">2</span>
                <span className="font-medium text-slate-700">Les Verbes (GET, POST...)</span>
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3">3</span>
                <span className="font-medium text-slate-700">Le Modèle de Données (JSON Schema)</span>
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold mr-3">4</span>
                <span className="font-medium text-slate-700">Les Scénarios d'Erreur</span>
             </div>
          </div>
        </div>

        {/* Right Col: Code Visualization */}
        <div className="lg:col-span-7">
          <CodeBlock 
            title="api-definition.yaml"
            language="yaml"
            code={`
paths:
  /orders:
    post:
      summary: Créer une commande
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/OrderInput'
      responses:
        '201':
          description: Commande créée
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
        '400':
          description: Validation échouée
components:
  schemas:
    OrderInput:
      type: object
      required: [productId, quantity]
      properties:
        productId: { type: string, format: uuid }
        quantity: { type: integer, minimum: 1 }
            `}
          />
        </div>
      </div>
    )
  },

  // SLIDE 4: REST CONTEXT
  {
    id: "rest-refresh",
    title: "Le Socle : API REST",
    subtitle: "Rappel des fondamentaux architecturaux",
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
           <h3 className="text-xl font-bold text-blue-900 mb-2">Pourquoi ce rappel ?</h3>
           <p className="text-blue-800">
             OpenAPI est conçu spécifiquement pour décrire une architecture REST. Comprendre REST, c'est comprendre la structure d'un fichier Swagger.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Card 1 */}
           <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-700">
                <Server />
              </div>
              <h4 className="font-bold text-lg mb-2">Stateless (Sans État)</h4>
              <p className="text-sm text-slate-600">
                Chaque requête HTTP est indépendante. Le serveur ne garde pas de "mémoire" de la conversation précédente. 
                <br/><span className="text-xs text-slate-400 mt-2 block">Analogie : Comme une machine à café, elle ne se souvient pas que vous avez pris un sucre il y a 5 min.</span>
              </p>
           </div>

           {/* Card 2 */}
           <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-700">
                <Layout />
              </div>
              <h4 className="font-bold text-lg mb-2">Ressources & Verbes</h4>
              <p className="text-sm text-slate-600">
                Tout est ressource (URI). L'action est définie par le verbe HTTP.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">GET /users</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">POST /users</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded">DELETE /users/1</span>
              </div>
           </div>

           {/* Card 3 */}
           <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-700">
                <Code />
              </div>
              <h4 className="font-bold text-lg mb-2">Standard JSON</h4>
              <p className="text-sm text-slate-600">
                Le format d'échange universel. OpenAPI permet de typer fortement ce JSON (Integer, String, Date, Email...) pour éviter les erreurs de parsing.
              </p>
           </div>
        </div>
      </div>
    )
  },

  // SLIDE 5: HISTORY
  {
    id: "history",
    title: "L'Évolution du Standard",
    subtitle: "De l'outil propriétaire au standard mondial",
    content: (
      <div className="relative py-8">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>

        <div className="space-y-12">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right">
               <h3 className="text-2xl font-bold text-slate-800">2011</h3>
               <p className="text-lg font-semibold text-blue-600">Naissance de Swagger</p>
               <p className="text-slate-500 text-sm mt-2">Tony Tam crée Swagger pour documenter ses API Wordnik. Le succès est immédiat.</p>
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow z-10 hidden md:block"></div>
            <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8"></div>
            <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow z-10 hidden md:block"></div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mt-4 md:mt-0">
               <h3 className="text-2xl font-bold text-slate-800">2015</h3>
               <p className="text-lg font-semibold text-purple-600">Création de l'OpenAPI Initiative</p>
               <p className="text-slate-500 text-sm mt-2">SmartBear donne Swagger à la Linux Foundation. Google, IBM et Microsoft rejoignent le board.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right">
               <h3 className="text-2xl font-bold text-slate-800">2024+</h3>
               <p className="text-lg font-semibold text-green-600">L'Ère de l'IA & Adoption Totale</p>
               <p className="text-slate-500 text-sm mt-2">OpenAPI est le standard de facto. Les LLM (ChatGPT) l'utilisent pour comprendre et exécuter des actions logicielles.</p>
            </div>
            <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow z-10 hidden md:block"></div>
            <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 6: WHAT IS OPENAPI (THE SPEC)
  {
    id: "what-is-openapi",
    title: "Qu’est‑ce que OpenAPI (OAS) ?",
    subtitle: "La spécification technique derrière le standard",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-start pt-8">
        <div>
           <div className="mb-8">
             <h3 className="text-3xl font-bold text-slate-900 mb-4">Plus qu'une doc, <br/>une <span className="text-blue-600">définition machine</span>.</h3>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Une spécification agnostique (YAML ou JSON) qui décrit les capacités de votre API sans nécessiter l'accès au code source.
             </p>
             
             {/* OAS Definition */}
             <div className="bg-slate-100 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">Décodage de l'acronyme</span>
                <p className="font-bold text-slate-800 text-xl">
                   <span className="text-purple-600">OAS</span> = <span className="text-purple-600">O</span>pen<span className="text-purple-600">A</span>PI <span className="text-purple-600">S</span>pecification
                </p>
             </div>
           </div>

           <div className="space-y-4">
             <div className="flex items-start">
               <div className="bg-blue-100 p-2 rounded-lg mr-4 text-blue-600"><Globe size={20}/></div>
               <div>
                 <h4 className="font-bold text-slate-800">Universel</h4>
                 <p className="text-sm text-slate-500">Compris par Java, Python, Node, Go, et les humains.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-600"><Database size={20}/></div>
               <div>
                 <h4 className="font-bold text-slate-800">Single Source of Truth</h4>
                 <p className="text-sm text-slate-500">Centralise la vérité technique, éliminant les documents Word obsolètes.</p>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl ring-1 ring-slate-800 self-center">
          <CodeBlock 
            title="petstore.yaml"
            language="yaml"
            code={`
openapi: 3.0.3
info:
  title: PetStore API
  version: 1.0.0
servers:
  - url: https://api.petstore.com/v1
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A paged array of pets
          content:
            application/json:    
              schema:
                $ref: '#/components/schemas/Pets'
components:
  schemas:
    Pets:
      type: array
      items:
        $ref: '#/components/schemas/Pet'
            `}
          />
        </div>
      </div>
    )
  }
];
