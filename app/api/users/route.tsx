// GET - getting data
// POST - creating data
// PUT - updating data
import {NextRequest , NextResponse} from 'next/server'

export function GET(request:NextRequest) {
  // fetch users from a db in reality
  return NextResponse.json([
    {id: 1, name : 'Mosh'},
    {id: 2, name : 'john'}
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({error:'Name is required'}, {status : 400})
  // validate it
  // if invalid , return 404 erroe
  // if valid , return 
  return NextResponse.json({ id : 1,name : body.name},{status : 201});
}

