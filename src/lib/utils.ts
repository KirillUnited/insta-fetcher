import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// fetch the Instagram followers
import axios from 'axios';

export async function getInstagramData(username: string) {
  try {
    const response = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
    // const followersCount = response.data.graphql.user.edge_followed_by.count;
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Error fetching Instagram:', error);

    return null;
  }
}