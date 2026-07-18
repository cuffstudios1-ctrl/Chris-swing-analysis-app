import { NextResponse } from 'next/server'; import { deleteSwingAssets } from '@/lib/storage';
export async function POST(req:Request){try{const body=await req.json(); const result=await deleteSwingAssets(body.userId,body.swing); return NextResponse.json(result)}catch(e:any){return NextResponse.json({error:e.message},{status:403})}}
