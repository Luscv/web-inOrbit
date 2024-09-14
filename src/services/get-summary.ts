type SummaryResponse = {
    completed: number;
    total: number;
    goalsPerDay: Record<string, {
        id: string;
        title: string;
        completedAt: string;
    }[]>;
  }

export async function getSummary(): Promise<SummaryResponse>{
    const response = await fetch('https://inorbit-server-8mmb0kt49-luscvs-projects.vercel.app/summary')
    const data = await response.json()
    return data.summary
}