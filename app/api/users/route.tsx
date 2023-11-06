// GET - getting data
// POST - creating data
// PUT - updating data
import {NextRequest , NextResponse} from 'next/server'
import schema from './schema';

export function GET(request:NextRequest) {
  // fetch users from a db in reality
  return NextResponse.json([
    {id: 1, name : 'Mosh'},
    {id: 2, name : 'john'}
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation =  schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status : 400})
  // validate it
  // if invalid , return 404 erroe
  // if valid , return 
  return NextResponse.json({ id : 1,name : body.name},{status : 201});
}

