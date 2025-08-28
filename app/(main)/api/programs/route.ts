import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import { allProgramsQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const programs = await sanityClient.fetch(allProgramsQuery)
    return NextResponse.json({ programs })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch programs' }, { status: 500 })
  }
}


