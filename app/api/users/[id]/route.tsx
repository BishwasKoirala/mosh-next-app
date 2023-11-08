import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// interface Props {
//   params: {id : number}
// }
export async function GET(request: NextRequest,
  {params} : { params : {id : string}}) {
    const user = await prisma.user.findUnique({
      where: {id: parseInt(params.id)}
    })
    if (!user) 
      return NextResponse.json({error:'user not found'}, {status : 404})
    

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  {params} : { params : {id : number}} ) {
  // validate the request body
  const body = await request.json();
  const validation =  schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})
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