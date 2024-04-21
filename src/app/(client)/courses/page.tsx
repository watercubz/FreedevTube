import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function Courses() {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()

  if(session === null) {
    redirect('/login')
  }
  return (
    <div className="h-screen items-center text-center justify-center">
         <h1>BIENVENIDO A LA SECCION DE CURSOS</h1>
    </div>
  )
}