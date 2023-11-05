import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {id : number}

}
export function GET(request: NextRequest,
  {params} : { params : {id : number}}) {
    if (params.id > 10) {
      return NextResponse.json({error:'user not found'}, {status : 404})
    }

  return NextResponse.json({id :1,name : 'Mosh'});
}

export async function PUT(
  request: NextRequest,
  {params} : { params : {id : number}} ) {
  // validate the request body
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({error: 'Name is required'},{status:400})
  // if invalid, retyrn 400
  // fetcg the user with the given id
  if (params.id > 10 ) 
    return NextResponse.json({error : 'user not found '}, {status:404})
  // if doestnt exit return 404 error

  return NextResponse.json({id : 1, name : body.name})
}

export function DELETE(
  request: NextRequest,
  {params} : { params : {id : number}}
) {
  // Fetch useers from database 
  // not founde return 404 error
  // delete the user
  // return 200

  if (params.id > 10)
    return NextResponse.json({error: 'User not found'},{status:404})

  return NextResponse.json({});

}