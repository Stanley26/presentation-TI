import React from 'react';
import { Slide } from '../types';
import { FileText, Settings, Eye, ArrowRight, Globe, Code, Cloud, GitPullRequest } from 'lucide-react';

export const toolingSlides: Slide[] = [
  // SLIDE 7: SWAGGER VS OPENAPI
  {
    id: "swagger-vs-openapi",
    title: "La Distinction Cruciale",
    subtitle: "Ne confondez plus le Contrat et l'Outil",
    content: (
      <div className="flex flex-col md:flex-row gap-8 h-full items-stretch">
        
        {/* OpenAPI Card */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col relative group hover:border-green-400 transition-colors duration-300">
           <div className="h-2 bg-green-500 w-full"></div>
           <div className="p-8 flex-1 flex flex-col items-center text-center z-10">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-inner">
                <FileText size={40} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-2">OpenAPI</h3>
              <p className="text-green-600 font-bold tracking-widest text-sm uppercase mb-6">La Spécification</p>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                C'est le fichier <code>.yaml</code> ou <code>.json</code>. <br/>
                C'est la loi. C'est le standard ouvert géré par la Linux Foundation.
              </p>

              <div className="mt-auto w-full bg-slate-50 rounded-lg p-4 text-sm text-slate-500 border border-slate-100">
                 "On écrit une spécification OpenAPI."
              </div>
           </div>
           {/* Decorator */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center justify-center md:flex-col">
           <div className="bg-slate-200 text-slate-500 font-bold rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-lg z-20">VS</div>
        </div>

        {/* Swagger Card */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col relative group hover:border-blue-400 transition-colors duration-300">
           <div className="h-2 bg-blue-500 w-full"></div>
           <div className="p-8 flex-1 flex flex-col items-center text-center z-10">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 shadow-inner">
                <Settings size={40} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Swagger</h3>
              <p className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-6">Les Outils</p>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                C'est la marque de SmartBear. <br/>
                Ce sont les logiciels qui lisent ou écrivent l'OpenAPI (UI, Editor, Hub).
              </p>

              <div className="mt-auto w-full bg-slate-50 rounded-lg p-4 text-sm text-slate-500 border border-slate-100">
                 "On visualise le contrat dans Swagger UI."
              </div>
           </div>
           {/* Decorator */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
        </div>

      </div>
    )
  },

  // SLIDE 8: SWAGGER UI DEMO
  {
    id: "swagger-visual",
    title: "La Magie Swagger UI",
    subtitle: "Du code brut à l'expérience développeur",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Left: Input (Code) */}
        <div className="flex flex-col justify-center">
            <h4 className="text-xl font-bold text-slate-600 mb-4 flex items-center">
              <FileText className="mr-2 text-slate-400"/> L'Entrée : Fichier OAS
            </h4>
            <div className="bg-slate-900 rounded-lg p-4 shadow-lg text-xs font-mono text-slate-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl text-[10px] text-slate-500 uppercase">YAML</div>
              <pre>
{`paths:
  /users:
    get:
      tags:
        - Users
      summary: Get all users
      responses:
        '200':
          description: OK
    post:
      tags:
        - Users
      summary: Create user`}
              </pre>
            </div>
            
            <div className="flex justify-center my-6">
               <ArrowRight size={32} className="text-slate-300 animate-pulse rotate-90 md:rotate-0" />
            </div>
        </div>

        {/* Right: Output (UI Mockup) */}
        <div className="flex flex-col h-full overflow-hidden">
            <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
              <Eye className="mr-2 text-blue-400"/> Le Résultat : Documentation Interactive
            </h4>
            
            {/* SWAGGER UI MOCKUP */}
            <div className="bg-white rounded border border-slate-300 shadow-xl flex-1 overflow-y-auto">
               {/* Header Green Bar */}
               <div className="h-14 bg-[#89bf04] px-4 flex items-center">
                  <span className="font-bold text-white tracking-tight">Swagger UI</span>
               </div>
               
               <div className="p-4">
                  {/* API Info */}
                  <h2 className="text-2xl font-bold text-slate-800">
                    PetStore API 
                    <span className="ml-2 text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded-full align-middle">1.0.0</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 mb-6">[ Base URL: api.petstore.com/v1 ]</p>

                  {/* Users Section */}
                  <div className="mb-4">
                     <div className="flex items-center justify-between cursor-pointer mb-2">
                        <h3 className="text-lg font-bold text-slate-700">Users</h3>
                        <span className="text-xs text-slate-400">User Management</span>
                     </div>

                     {/* GET Endpoint (Collapsed) */}
                     <div className="mb-3 rounded border border-[#49cc90] bg-[rgba(73,204,144,0.1)] overflow-hidden">
                        <div className="flex items-center p-2 cursor-pointer">
                           <span className="bg-[#49cc90] text-white font-bold w-16 text-center py-1 rounded text-xs mr-3 shadow-sm">POST</span>
                           <span className="font-mono text-sm font-semibold text-slate-700 mr-2">/users</span>
                           <span className="text-xs text-slate-500 hidden sm:block">Create a new user</span>
                           <ArrowRight size={14} className="ml-auto text-slate-400" />
                        </div>
                     </div>

                     {/* GET Endpoint (Expanded) */}
                     <div className="rounded border border-[#61affe] bg-[rgba(97,175,254,0.1)] overflow-hidden">
                        <div className="flex items-center p-2 cursor-pointer border-b border-[#61affe] bg-[rgba(97,175,254,0.1)]">
                           <span className="bg-[#61affe] text-white font-bold w-16 text-center py-1 rounded text-xs mr-3 shadow-sm">GET</span>
                           <span className="font-mono text-sm font-semibold text-slate-700 mr-2">/users</span>
                           <span className="text-xs text-slate-500 hidden sm:block">Get all system users</span>
                        </div>
                        
                        {/* Mock Body */}
                        <div className="p-4 bg-white">
                           <div className="flex justify-end mb-4">
                              <button className="border border-slate-300 text-slate-600 px-4 py-1 rounded text-xs font-bold hover:bg-slate-50">Try it out</button>
                           </div>
                           
                           <h5 className="font-bold text-xs text-slate-700 mb-2 border-b pb-1">Responses</h5>
                           <div className="flex items-start text-xs font-mono mt-2">
                              <span className="font-bold mr-4">200</span>
                              <span className="text-slate-500">Success</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
        </div>
      </div>
    )
  },

  // SLIDE 9: TOOLING ECOSYSTEM
  {
    id: "tooling-matrix",
    title: "L'Écosystème Swagger",
    subtitle: "Choisir le bon outil pour le bon usage",
    content: (
      <div className="flex flex-col h-full space-y-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-5 font-semibold border-b border-slate-800">Fonctionnalité</th>
                <th className="p-5 font-semibold border-b border-slate-800 w-1/4">
                   <div className="flex items-center gap-2 text-green-400"><Globe size={18}/> Swagger UI</div>
                </th>
                <th className="p-5 font-semibold border-b border-slate-800 w-1/4">
                   <div className="flex items-center gap-2 text-yellow-400"><Code size={18}/> Swagger Editor</div>
                </th>
                <th className="p-5 font-semibold border-b border-slate-800 w-1/4 bg-blue-900/50">
                   <div className="flex items-center gap-2 text-blue-400"><Cloud size={18}/> SwaggerHub</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { label: "Usage Principal", ui: "Documentation Interactive", ed: "Design & Prototypage", hub: "Gouvernance Enterprise" },
                { label: "Hébergement", ui: "Embarqué (Spring/Node)", ed: "Local / Navigateur", hub: "SaaS Cloud" },
                { label: "Édition", ui: "❌ Lecture seule", ed: "✅ YAML/JSON", hub: "✅ Éditeur Visuel + Code" },
                { label: "Collaboration", ui: "❌ Non", ed: "❌ Non", hub: "✅ Commentaires & Teams" },
                { label: "Versioning", ui: "❌ Non", ed: "❌ Non (LocalStorage)", hub: "✅ Historique complet" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-medium text-slate-900 bg-slate-50/50">{row.label}</td>
                  <td className="p-5 text-slate-600">{row.ui}</td>
                  <td className="p-5 text-slate-600">{row.ed}</td>
                  <td className={`p-5 font-medium ${i===0 ? 'text-blue-700' : 'text-slate-700'} bg-blue-50/30`}>{row.hub}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-slate-50 p-4 text-center text-xs text-slate-500 border-t border-slate-200">
             Note: SwaggerHub est la version "Enterprise" payante, tandis que UI et Editor sont Open Source.
          </div>
        </div>

        {/* Alternatives Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md">
           <h4 className="font-bold text-slate-800 mb-4 flex items-center">
             <GitPullRequest className="mr-2 text-purple-600" /> Alternatives à SwaggerHub (SaaS)
           </h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                <div>
                  <span className="font-bold text-slate-700">Stoplight</span>
                  <p className="text-sm text-slate-500">Excellente UX, très orienté Design-First graphique.</p>
                </div>
             </div>
             <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2"></div>
                <div>
                  <span className="font-bold text-slate-700">Postman Enterprise</span>
                  <p className="text-sm text-slate-500">Leader des tests API, intègre maintenant des fonctions de design et documentation.</p>
                </div>
             </div>
             <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                <div>
                  <span className="font-bold text-slate-700">Kong Konnect</span>
                  <p className="text-sm text-slate-500">Idéal si vous utilisez déjà la Gateway Kong (insomnia intégré).</p>
                </div>
             </div>
             <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                <div>
                  <span className="font-bold text-slate-700">Redocly</span>
                  <p className="text-sm text-slate-500">Focus sur une documentation magnifique et un pipeline CI/CD (CLI) robuste.</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    )
  }
];
