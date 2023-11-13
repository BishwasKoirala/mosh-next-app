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
  {params} : { params : {id : string}} ) {
  // validate the request body
  const body = await request.json();
  const validation =  schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})
  // if invalid, retyrn 400
  // fetcg the user with the given id
    const user = await prisma.user.findUnique({
      where:{id : parseInt(params.id) }
    });

  if (!user) 
    return NextResponse.json({error : 'user not found '}, {status:404})
  // if doestnt exit return 404 error
  const updatedUser = await prisma.user.update({
    where : { id : user.id},
    data: {
      name : body.name,
      email : body.email
    }
  })

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  {params} : { params : {id : string}}
) {
  const user = await prisma.user.findUnique({
    where : { id : parseInt(params.id)}
  })
  // Fetch useers from database 
  // not founde return 404 error
  // delete the user
  // return 200

  if (!user)
    return NextResponse.json({error: 'User not found'},{status:404})

  await prisma.user.delete({
    where : {id : user.id}
  }); 

  return NextResponse.json({});
}