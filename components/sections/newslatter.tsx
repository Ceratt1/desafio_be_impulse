"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Label } from "../ui/labels/labelPrincipal"
import { Button } from "../ui/buttons/buttonPrincipal"
import { Input } from "../ui/input/inputPrincipal"
import { User } from "@/@types/userCaption"
// import { LeadCaptionService } from "@/services/leadCaption"


export default function Newsletter() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    submitted: false,
    loading: false,
    error: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState.name.trim() || !formState.email.trim()) {
      setFormState((prev) => ({ ...prev, error: "Por favor, preencha todos os campos." }))
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setFormState((prev) => ({ ...prev, error: "Por favor, insira um email válido." }))
      return
    }

    setFormState((prev) => ({ ...prev, loading: true, error: "" }))

    try {
      

     const payloadUser : User = {
       name: formState.name,
       email: formState.email
     }
     const response = await fetch("/api/lead", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payloadUser)
    });

    
      if (response.body) {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }))
    }else{
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: "Ocorreu um erro. Por favor, tente novamente.",
      }))
    }
    } catch {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: "Ocorreu um erro. Por favor, tente novamente.",
      }))
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4 w-fit">
                FIQUE POR DENTRO
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Receba novidades e conteúdos exclusivos</h2>
              <p className="text-gray-600 mb-6">
                Cadastre-se para receber em primeira mão nossas dicas, promoções e oportunidades especiais para
                impulsionar sua carreira.
              </p>

              {formState.submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-green-700">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h3 className="font-bold">Cadastro realizado com sucesso!</h3>
                  </div>
                  <p>Obrigado por se inscrever. Em breve você receberá nossas novidades.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-900" htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      
                      placeholder="Seu nome"
                      value={formState.name}
                      onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-900" htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-gray-900"
                    />
                  </div>

                  {formState.error && <div className="text-red-500 text-sm">{formState.error}</div>}

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    disabled={formState.loading}
                  >
                    {formState.loading ? "Enviando..." : "Quero receber novidades"}
                    {!formState.loading && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao se inscrever, você concorda com nossa política de privacidade. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>

            <div className="bg-orange-600 p-8 md:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-6">O que você vai receber:</h3>
              <ul className="space-y-4">
                {[
                  "Dicas práticas para aumentar sua renda online",
                  "Tendências e oportunidades do mercado digital",
                  "Convites para webinars e eventos exclusivos",
                  "Descontos especiais em lançamentos de cursos",
                  "Histórias inspiradoras de alunos de sucesso",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-orange-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-orange-600 bg-orange-500 flex items-center justify-center text-xs font-medium"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-orange-200">+5.000 pessoas já estão recebendo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

