import { NextResponse } from "next/server";
import { User } from "@/@types/userCaption";

interface Response {
  message: string;
  status: number;
}

interface ErrorResponse {
  error: string;
  status: number;
}

export async function POST(req: Request) {
  try {
    const payload: User = await req.json();


    console.log("Dados recebidos:", payload);
    
    return NextResponse.json <Response> (
      { message: "Cadastro realizado com sucesso!",
        status: 201
       }
    );
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json <ErrorResponse>(
      { error: "Ocorreu um erro. Tente novamente.",
        status: 500
       }
    );
  }
}