import {createClient} from "@/lib/supabase/server";
import { cookies } from 'next/headers';
import Navbar from "./navbar";

export async function AuthButtonServer() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();


  return <Navbar session={session} />;
  
}
