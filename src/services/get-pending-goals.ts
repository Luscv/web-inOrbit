type PendingGoalsResponse = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;  
}[]

export async function getWeekPendingGoals(): Promise<PendingGoalsResponse>{
    const response = await fetch('https://inorbit-server-8mmb0kt49-luscvs-projects.vercel.app/pending-goals')
    const data = await response.json()
    return data.pendingGoals
}