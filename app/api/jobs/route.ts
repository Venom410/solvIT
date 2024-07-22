import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import jobListing from "@/app/models/jobListing";

export const GET = async () => {
  try {
    await connectDB();
    // Fetch only active job listings
    const jobListings = await jobListing.find({ status: 'active' });

    return new NextResponse(JSON.stringify(jobListings), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching job listings: " + error, { status: 500 });
  }
};
