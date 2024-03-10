import connectMongoDB from '../../../libs/mongodb';
import User from '../../../models/user';
import { NextResponse } from 'next/server';

// Get a particular user
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    console.log(`User ${id}'s info was fetched via GET request.`);
    return NextResponse.json({ user }, { status: 200 });
}
